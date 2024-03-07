"use client";

import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/load_spinner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { forgotPasswordAction } from "@/actions";

const forgotPasswordFormSchema = z.object({
  email: z
    .string({ required_error: "Email number is required" })
    .refine((e) => e.includes("@"), "Email not valid"),
});

export type forgotPasswordFormFields = z.infer<typeof forgotPasswordFormSchema>;

export default function ForgotPasswordForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isResetting, setIsResetting] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const forgotForm = useForm<forgotPasswordFormFields>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: forgotPasswordFormFields) {
    if (isResetting) return;
    setIsResetting(true);

    try {
      const formData = new FormData();
      formData.append("email", values.email);
      const res = await forgotPasswordAction(formData);
      setIsResetting(false);
    } catch (err: any) {
      console.log(err);
      setIsResetting(false);
    } finally {
      setEmailSent(true);
    }
  }

  return (
    <div className={cn("px-5 md:px-[75px] pb-8", className)} {...props}>
      <h1 className="font-poppins font-bold text-2xl text-black text-center mt-14 uppercase">
        Forgot Password
      </h1>
      {!emailSent && (
        <>
          <p className="font-roboto font-normal text-base text-black opacity-60 mt-4 text-center">
            Enter your sign up Email address to reset
          </p>

          <Form {...forgotForm}>
            <form
              onSubmit={forgotForm.handleSubmit(onSubmit)}
              className="mt-16 h-full flex flex-col justify-between overflow-y-auto"
            >
              {/* Email  */}
              <FormField
                control={forgotForm.control}
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

              <Button
                type="submit"
                className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14"
              >
                {isResetting ? (
                  <div className="flex items-start justify-center gap-3">
                    <LoadingSpinner pathFill="transparent" pathFill1="white" />
                    <span>Sending reset link to email</span>
                  </div>
                ) : (
                  "Reset"
                )}
              </Button>

              <div className="flex items-center justify-center mt-10">
                <Link
                  href="/login"
                  className="font-roboto font-medium text-base text-black"
                >
                  Back?
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
        </>
      )}

      {emailSent && (
        <>
          <h2 className="mt-16 font-poppins font-bold text-lg text-[#49BB8F]">
            check your email for a password reset link
            {/* <span className="mt-2 block text-[28px]">SUCCESSFUL!</span> */}
          </h2>

          <div className="flex items-center justify-center mt-10">
            <Link
              href="/login"
              className="font-roboto font-medium text-base text-black"
            >
              Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
