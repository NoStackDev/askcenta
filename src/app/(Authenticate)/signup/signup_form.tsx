"use client";

import { VisibilityOnFillIcon } from "@/components/icons";
import VisibilityOffFillIcon from "@/components/icons/visibility_off_fill_icon";
import LoadingSpinner from "@/components/load_spinner";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUserAuthContext } from "@/context/use_auth_context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  signupForm: UseFormReturn<
    {
      password: string;
      username: string;
      email: string;
    },
    any,
    undefined
  >;
}

export default function SignupForm({ className, signupForm, ...props }: Props) {
  const { authState } = useUserAuthContext();
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);

  function togglePasswordVisibility() {
    setPasswordIsVisible(!passwordIsVisible);
  }

  return (
    <>
      <h1 className="font-poppins font-bold text-2xl text-black text-center mt-14 uppercase">
        Sign up
      </h1>
      <p className="font-roboto font-normal text-base text-black text-center opacity-60 mt-2">
        Please sign up to continue
      </p>

      <div className="mt-8 flex flex-col overflow-y-auto">
        {/* username  */}
        <FormField
          control={signupForm.control}
          name="username"
          render={({ field }) => (
            <FormItem className="">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Username
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-1">
                <input
                  placeholder="Enter your names"
                  {...field}
                  className="pl-2 w-full font-roboto font-normal text-base border border-[#D9D9D9] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Email  */}
        <FormField
          control={signupForm.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-8">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Email
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-1">
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
          control={signupForm.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-8">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Password
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-1">
                <div className="border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex items-center gap-2">
                  <input
                    type={passwordIsVisible ? "text" : "password"}
                    placeholder="Enter Password"
                    {...field}
                    className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                    id="signup_password"
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
          className={cn(
            "rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-6 md:mt-12"
          )}
        >
          {authState === "signing up" ? (
            <div className="flex items-start justify-center gap-3">
              <LoadingSpinner pathFill="transparent" pathFill1="white" />
              <span>Signing up</span>
            </div>
          ) : (
            "Sign Up"
          )}
        </Button>

        <div className="mt-10 text-center">
          <span className="font-roboto font-normal text-base text-black opacity-80">
            Already have an account?
          </span>
          <Link
            href="/login"
            className="font-roboto font-semibold text-base text-[#6356E5] ml-2"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
