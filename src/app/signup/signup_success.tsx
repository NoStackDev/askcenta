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
import useVerificationHook from "@/hooks/useVerificationHook";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const successFormSchema = z.object({
  email: z.string(),
});

type Props = {};

export default function SignupSuccessForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const form = useForm<z.infer<typeof successFormSchema>>({
    resolver: zodResolver(successFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof successFormSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("px-5 md:px-[75px] pb-8", className)} {...props}>
      <h1 className="font-poppins font-bold text-xl text-[#49BB8F]">
        Sign up
        <span className="mt-2 block text-[28px]">SUCCESSFUL!</span>
      </h1>
      <p className="font-roboto font-normal text-base text-[#48466D] mt-8">
        Please provide your email to get notified on offers on your requests and
        requests that might interest you.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 h-full flex flex-col justify-between overflow-y-auto"
        >
          {/* username  */}
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
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
