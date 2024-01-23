"use client";

import useVerificationHook from "@/hooks/useVerificationHook";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import SignupForm from "./signup_form";
import { useUserAuthContext } from "@/context/use_auth_context";
import SignupSuccessForm from "./signup_success";
import {
  getUserDetailsAction,
  signupUserAction,
  updateUserDetailsAction,
} from "@/actions";

const signupFormSchema = z.object({
  username: z
    .string({ required_error: "Whatsapp number is required" })
    .min(4, { message: "Username needs to be atleast 4 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .refine((e) => e.includes("@"), "Email not valid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export type SignupFormField = z.infer<typeof signupFormSchema>;

const successFormSchema = z.object({
  whatsapp_num: z
    .string()
    .length(10, { message: "Whatsapp number must be 10 digits" })
    .refine((e) => !isNaN(Number(e)), "Whatsapp number can only contain digits")
    .optional(),
});

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export default function SignUpWrapper({ className, ...props }: Props) {
  const { authState, setAuthState } = useUserAuthContext();

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  React.useEffect(() => {
    setAuthState("signup");
  }, []);

  const onboardForm = useForm<z.infer<typeof successFormSchema>>({
    resolver: zodResolver(successFormSchema),
    defaultValues: {
      whatsapp_num: undefined,
    },
  });

  const { handleChange: onInputChange } = useVerificationHook(4);

  function onSignupSubmit(values: z.infer<typeof signupFormSchema>) {
    if (authState === "signing up") return;

    setAuthState("signing up");

    (async () => {
      try {
        const registeredUser = await signupUserAction({ ...values });

        if (registeredUser?.isError) {
          setAuthState("signup");
          registeredUser.isError &&
            registeredUser.errors.email &&
            signupForm.setError("email", {
              message: registeredUser.errors.email[0],
            });

          registeredUser.isError &&
            !registeredUser.errors.email &&
            signupForm.setError("email", {
              message: "Sign up failed",
            });

          registeredUser.isError &&
            !registeredUser.errors.email &&
            signupForm.setError("password", {
              message: "Sign up failed",
            });

          registeredUser.isError &&
            !registeredUser.errors.email &&
            signupForm.setError("username", {
              message: "Sign up failed",
            });

          return;
        }

        setAuthState("onboard");
      } catch (err: any) {
        setAuthState("signup");
        console.log(err);
      }
    })();
  }

  async function onBoardSubmit(values: z.infer<typeof successFormSchema>) {
    if (authState === "onboarding") return;
    setAuthState("onboarding");

    try {
      const userDetails = await getUserDetailsAction();
      if (
        !userDetails?.isError &&
        values.whatsapp_num &&
        values.whatsapp_num.length > 0
      ) {
        const data = new FormData();
        data.append("whatsapp_num", values.whatsapp_num);
        const updatedUser = await updateUserDetailsAction(data);
        if (updatedUser.isError && updatedUser.errors.whatsapp_num) {
          onboardForm.setError("whatsapp_num", {
            message: updatedUser.errors.whatsapp_num[0],
          });
          setAuthState("onboard");
          return;
        }
      }

      return (window.location.href = "/");
      setAuthState("onboard");
    } catch (err: any) {
      setAuthState("onboard");
      console.log(err);
    }
  }

  return (
    <div className="relative overflow-x-clip">
      <Form {...signupForm}>
        <form
          onSubmit={signupForm.handleSubmit(onSignupSubmit)}
          className={cn(
            "px-5 md:px-[75px] pb-8 h-max w-full absolute transition-all animate-dialogFirstContentShow",
            authState !== "signup" && authState !== "signing up" && "hidden",
            className
          )}
          {...props}
        >
          <SignupForm signupForm={signupForm} />
        </form>
      </Form>

      <Form {...onboardForm}>
        <form
          onSubmit={onboardForm.handleSubmit(onBoardSubmit)}
          className={cn(
            "px-5 md:px-[75px] pb-8 w-full absolute left-full transition-all duration-150 ease-in-out",
            (authState === "onboard" || authState === "onboarding") && "left-0",
            (authState === "signup" || authState === "signing up") && "hidden",
            className
          )}
          {...props}
        >
          <SignupSuccessForm onboardForm={onboardForm} />
        </form>
      </Form>
    </div>
  );
}
