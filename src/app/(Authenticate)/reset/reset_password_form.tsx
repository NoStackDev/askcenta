"use client";

import { resetPasswordAction } from "@/actions";
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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resetPasswordFormSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be atleast 6 characters" }),
    password1: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be atleast 6 characters" }),
  })
  .refine((data) => data.password === data.password1, {
    message: "Password does not match",
    path: ["password1"],
  });

export type resetPasswordFormFields = z.infer<typeof resetPasswordFormSchema>;

interface ResetPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
  resetToken: string;
}

export default function ResetPasswordForm({
  className,
  resetToken,
  ...props
}: ResetPasswordFormProps) {
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  const [passwordIsVisible1, setPasswordIsVisible1] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const resetForm = useForm<resetPasswordFormFields>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      password1: "",
    },
  });

  async function onSubmit(values: resetPasswordFormFields) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
    try {
      const formData = new FormData();
      formData.append("token", resetToken);
      formData.append("password", values.password);
      const res = await resetPasswordAction(formData);
      console.log("values: ", values);
    } catch (err: any) {
      console.log(err);
      setIsSubmitting(false);
    }
  }

  return (
    <div className={cn("px-5 md:px-[75px] pb-8", className)} {...props}>
      <h1 className="font-poppins font-bold text-2xl text-black text-center mt-14 uppercase">
        Forgot Password
      </h1>
      <p className="font-roboto font-normal text-base text-black opacity-60 mt-4 text-center">
        Enter your sign up Email address to reset
      </p>

      <Form {...resetForm}>
        <form
          onSubmit={resetForm.handleSubmit(onSubmit)}
          className="mt-16 h-full flex flex-col justify-between overflow-y-auto"
        >
          {/* Password  */}
          <FormField
            control={resetForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-8">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    New Password
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

                    <span
                      onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    >
                      {passwordIsVisible && <VisibilityOffFillIcon />}
                      {!passwordIsVisible && <VisibilityOnFillIcon />}
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* password 1 */}
          <FormField
            control={resetForm.control}
            name="password1"
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
                      type={passwordIsVisible1 ? "text" : "password"}
                      placeholder="Enter Password"
                      {...field}
                      className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                      id="login_password1"
                    />

                    <span
                      onClick={() => setPasswordIsVisible1(!passwordIsVisible1)}
                    >
                      {passwordIsVisible1 && <VisibilityOffFillIcon />}
                      {!passwordIsVisible1 && <VisibilityOnFillIcon />}
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
            {isSubmitting ? (
              <div className="flex items-start justify-center gap-3">
                <LoadingSpinner pathFill="transparent" pathFill1="white" />
                <span>Saving</span>
              </div>
            ) : (
              "Save & Continue"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
