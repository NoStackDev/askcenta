"use client";

import VisibilityOffFillIcon from "@/components/icons/visibility_off_fill_icon";
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
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  whatsappNum: z
    .string({ required_error: "Whatsapp number is required" })
    .length(10, { message: "Phone number can only be 10 digits" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must a be atleast 6 characters" }),
});

type Props = {};

export default function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      whatsappNum: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById(
      "login_password"
    ) as HTMLInputElement | null;

    if (passwordInput) {
      passwordInput.type === "password"
        ? (passwordInput.type = "text")
        : (passwordInput.type = "password");
    }
  }

  return (
    <div className={cn("px-5", className)} {...props}>
      <h1 className="font-poppins font-bold text-2xl text-black">Login</h1>
      <p className="font-roboto font-normal text-base text-black opacity-60 mt-4">
        Welcome Back! please login to continue
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 h-full flex flex-col justify-between overflow-y-auto"
        >
          {/* whatsapp number  */}
          <FormField
            control={form.control}
            name="whatsappNum"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    WhatsApp Number
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl className="mt-2">
                  <div className="border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex items-center">
                    <span className="font-roboto font-normal text-base text-black pr-2 border-r border-r-black/60">
                      +234
                    </span>
                    <input
                      placeholder="Phone eg. 8011112222"
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
                      type="password"
                      placeholder="Enter Password"
                      {...field}
                      className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                      id="login_password"
                    />

                    <span onClick={togglePasswordVisibility}>
                      <VisibilityOffFillIcon />
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8"
          >
            Login
          </Button>

          <div className="flex items-center justify-center mt-10">
            <Link
              href="/login"
              className="font-roboto font-medium text-base text-black"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center justify-center mt-10 gap-2">
            <span className="font-roboto font-normal text-base text-black opacity-80">
              Don’t have an account?
            </span>
            <Link
              href="/login"
              className="font-roboto font-semibold text-base text-[#6356E5]"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
