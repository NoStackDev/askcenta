"use client";

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
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onboardForm: UseFormReturn<
    {
      email?: string | undefined;
    },
    any,
    undefined
  >;
}

export default function SignupSuccessForm({
  className,
  onboardForm,
  ...props
}: Props) {
  const { authState } = useUserAuthContext();
  return (
    <>
      <h1 className="font-poppins font-bold text-xl text-[#49BB8F]">
        Sign up
        <span className="mt-2 block text-[28px]">SUCCESSFUL!</span>
      </h1>
      <p className="font-roboto font-normal text-base text-[#48466D] mt-8">
        Please provide your email to get notified on offers on your requests and
        requests that might interest you.
      </p>
      <div className="mt-10 h-full flex flex-col justify-between overflow-y-auto">
        {/* email  */}
        <FormField
          control={onboardForm.control}
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
                <input
                  {...field}
                  placeholder="Example@email.com"
                  className="pl-2 w-full font-roboto font-normal text-base border border-[#D9D9D9] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14"
        >
          {authState === "onboarding" ? (
            <div className="flex items-start justify-center gap-3">
              <LoadingSpinner />
              <span></span>
            </div>
          ) : (
            "Continue"
          )}
        </Button>
      </div>
    </>
  );
}
