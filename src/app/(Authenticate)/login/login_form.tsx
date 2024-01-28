"use client";

import { loginUserAction } from "@/app/actions";
import { VisibilityOnFillIcon } from "@/components/icons";
import VisibilityOffFillIcon from "@/components/icons/visibility_off_fill_icon";
import LoadingSpinner from "@/components/load_spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUserAuthContext } from "@/context/use_auth_context";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email number is required" })
    .refine((e) => e.includes("@"), "Email not valid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export type LoginFormFields = z.infer<typeof loginFormSchema>;

type Props = {};

export default function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { authState, setAuthState } = useUserAuthContext();
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  React.useEffect(() => {
    setAuthState("login");
  }, []);

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    if (authState === "logging in") return;
    setAuthState("logging in");

    try {
      const res = await loginUserAction({
        email: values.email,
        password: values.password,
      });

      if (res.isError) {
        res.error === "Invalid" &&
          form.setError("email", {
            message: "Invalid email or password",
          });
        res.error === "Invalid" &&
          form.setError("password", {
            message: "Invalid email or password",
          });
        setAuthState("login");
      }
    } catch (err: any) {
      console.log(err);
      // form.setError("whatsappNum", { message: "failed to login" });
      setAuthState("login");
    }
  }

  function togglePasswordVisibility() {
    setPasswordIsVisible(!passwordIsVisible);
  }

  return (
    <div className={cn("px-5 md:px-[75px] pb-8", className)} {...props}>
      <h1 className="font-poppins font-bold text-2xl text-black text-center mt-14">
        Login
      </h1>
      <p className="font-roboto font-normal text-base text-black opacity-60 mt-4 text-center">
        Welcome Back! please login to continue
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 h-full flex flex-col justify-between overflow-y-auto"
        >
          {/* Email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Email
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl className="mt-2">
                  <div className="border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex items-center">
                    <input
                      placeholder="Example@email.com"
                      {...field}
                      className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* password  */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-8">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Password
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl className="mt-2">
                  <div className="border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex items-center gap-2">
                    <input
                      type={passwordIsVisible ? "text" : "password"}
                      placeholder="Enter Password"
                      {...field}
                      className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                      id="login_password"
                    />

                    <span onClick={togglePasswordVisibility}>
                      {passwordIsVisible && <VisibilityOffFillIcon />}
                      {!passwordIsVisible && <VisibilityOnFillIcon />}
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14"
          >
            {authState === "logging in" ? (
              <div className="flex items-start justify-center gap-3">
                <LoadingSpinner pathFill="transparent" pathFill1="white" />
                <span>Logging in</span>
              </div>
            ) : (
              "Login"
            )}
          </Button>

          <div className="flex items-center justify-center mt-10">
            <Link
              href="/login"
              className="font-roboto font-medium text-base text-black"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-10 text-center">
            <span className="font-roboto font-normal text-base text-black opacity-80">
              Don’t have an account?
            </span>
            <Link
              href="/signup"
              className="font-roboto font-semibold text-base text-[#6356E5] ml-2"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
