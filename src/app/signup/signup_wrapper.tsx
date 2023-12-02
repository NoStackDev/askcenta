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
import { registerUser, verifyUserNumber } from "@/api/user";
import PhoneVerficationForm from "./phone_verification_form";
import { UserRegisterResponseType } from "@/types";
import SignupSuccessForm from "./signup_success";
import { signupUserAction } from "@/actions";

const signupFormSchema = z.object({
  username: z
    .string({ required_error: "Whatsapp number is required" })
    .min(4, { message: "Username needs to be atleast 4 characters" }),
  email: z.string({ required_error: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export type SignupFormField = z.infer<typeof signupFormSchema>;

// const phoneVerificationFormSchema = z.object({
//   verificationCode: z
//     .string()
//     .length(4, { message: "Verification code is 4 digits" }),
// });

const successFormSchema = z.object({
  whatsapp_num: z.string().optional(),
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

  // const verificationForm = useForm<z.infer<typeof phoneVerificationFormSchema>>(
  //   {
  //     resolver: zodResolver(phoneVerificationFormSchema),
  //     defaultValues: {
  //       verificationCode: "",
  //     },
  //   }
  // );

  const onboardForm = useForm<z.infer<typeof successFormSchema>>({
    resolver: zodResolver(successFormSchema),
    defaultValues: {
      whatsapp_num: "",
    },
  });

  const {
    verificationCode,
    inputStates,
    verificationInputClassName,
    handleChange: onInputChange,
  } = useVerificationHook(4);

  // React.useEffect(() => {
  //   verificationForm.setValue(
  //     "verificationCode",
  //     verificationCode ? verificationCode : ""
  //   );
  // }, [verificationCode]);

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

          console.log(registeredUser);
          return;
        }

        setAuthState("onboard");
        console.log(registeredUser);
      } catch (err: any) {
        setAuthState("signup");
        console.log(err);
      }
    })();
  }

  // function onVerificationSubmit(
  //   values: z.infer<typeof phoneVerificationFormSchema>
  // ) {
  //   if (authState === "verifying") return;

  //   setAuthState("verifying");

  //   (async () => {
  //     try {
  //       const verifiedUser = await verifyUserNumber({
  //         email: signupForm.getValues("email"),
  //         otpCode: values.verificationCode,
  //       });
  //       console.log("verified use: ", verifiedUser);
  //       if (verifiedUser) {
  //         setAuthState("onboard");
  //       }
  //     } catch (err: any) {
  //       console.log(err);
  //       err.cause.errors.otp_code &&
  //         verificationForm.setError("verificationCode", {
  //           message: err.cause.errors.otp_code[0],
  //         });
  //       setAuthState("verify");
  //     }
  //   })();
  // }

  function onBoardSubmit(values: z.infer<typeof successFormSchema>) {
    if (authState === "onboarding") return;
    setAuthState("onboarding");
    window.location.href = "/";
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

      {/* <Form {...verificationForm}>
        <form
          onSubmit={verificationForm.handleSubmit(onVerificationSubmit)}
          className={cn(
            "px-5 md:px-[75px] pb-8 w-full absolute left-full transition-all duration-150 ease-in-out",
            // authState !== "verify" && authState !== "verifying" && "hidden",
            (authState === "verify" || authState === "verifying") && "left-0",
            (authState === "onboard" || authState === "onboarding") && "hidden",
            className
          )}
          {...props}
        >
          <PhoneVerficationForm
            verificationForm={verificationForm}
            whatsappNum={signupForm.getValues("whatsappNum")}
          />
        </form>
      </Form> */}

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
