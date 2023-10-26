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

const phoneVerficationFormSchema = z.object({
  verificationCode: z
    .string()
    .length(4, { message: "invalid verification code" }),
});

type Props = {};

export default function PhoneVerficationForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const form = useForm<z.infer<typeof phoneVerficationFormSchema>>({
    resolver: zodResolver(phoneVerficationFormSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const {
    verificationCode,
    inputStates,
    verificationInputClassName,
    handleChange: onInputChange,
  } = useVerificationHook(4);

  React.useEffect(() => {
    form.setValue("verificationCode", verificationCode ? verificationCode : "");
  }, [verificationCode]);

  function onSubmit(values: z.infer<typeof phoneVerficationFormSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("px-5 md:px-[75px] pb-8", className)} {...props}>
      <h1 className="font-poppins font-bold text-2xl text-black">
        Verify Phone
      </h1>
      <p className="font-roboto font-normal text-base text-[#48466D] mt-4">
        Please enter the verification code for registration we sent to your
        mobile <span className="text-black">+234801111222</span>
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 h-full flex flex-col justify-between overflow-y-auto"
        >
          {/* verification code  */}
          <FormField
            control={form.control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem className="">
                <FormMessage />
                <FormControl className="mt-2">
                  <input
                    {...field}
                    className="hidden pl-2 w-full font-roboto font-normal text-base border border-[#D9D9D9] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                  />
                </FormControl>
                <div className="grid grid-cols-4 first:rounded-l-xl last:rounded-r-xl">
                  {inputStates.map((state, index) => {
                    return (
                      <input
                        key={index}
                        type="text"
                        value={state.inputValue}
                        placeholder="-"
                        onChange={(e) => onInputChange(e, index)}
                        className={cn(
                          "font-roboto font-normal text-base border border-[#D9D9D9] h-12 bg-[#F7F9FF] text-black text-center w-full placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-black placeholder:text-center",
                          verificationInputClassName,
                          index === 0 && "rounded-l-xl",
                          index === 3 && "rounded-r-xl"
                        )}
                      />
                    );
                  })}
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14"
          >
            Verify
          </Button>

          <div className="flex items-center justify-center mt-10 gap-2">
            <Link
              href="/login"
              className="font-roboto font-semibold text-base text-[#6356E5]"
            >
              Resend Code
            </Link>
          </div>

          <div className="flex items-center justify-center mt-10 gap-2">
            <Link
              href="/login"
              className="font-roboto font-semibold text-base text-black"
            >
              BACK
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
