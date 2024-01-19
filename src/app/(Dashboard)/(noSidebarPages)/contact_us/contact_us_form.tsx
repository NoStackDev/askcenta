"use client";

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

const contactUsFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  email: z.string(),
  message: z.string(),
});

type Props = {};

export default function ContactUsForm({
  className,
  ...props
}: React.HTMLAttributes<typeof Form>) {
  const form = useForm<z.infer<typeof contactUsFormSchema>>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactUsFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "py-6 sm:px-6 md:pb-0 sm:flex sm:flex-col sm:items-center md:rounded-[20px]",
          className
        )}
      >
        {/* name  */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Name
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-2">
                <input
                  type="text"
                  //   placeholder="Enter your names"
                  {...field}
                  className="pl-2 w-full font-roboto font-normal text-base border border-[#5E5D7F] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* email  */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-[30px] w-full">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Email
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-2">
                <input
                  type="email"
                  //   placeholder="Enter your names"
                  {...field}
                  className="pl-2 w-full font-roboto font-normal text-base border border-[#5E5D7F] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* message  */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-[30px] w-full">
              <div className="flex justify-between items-center">
                <FormLabel className="font-roboto font-medium text-sm text-black">
                  Message
                </FormLabel>
              </div>

              <FormMessage />
              <FormControl className="mt-2">
                <textarea
                  //   placeholder="Enter your names"
                  {...field}
                  className="p-2 w-full font-roboto font-normal text-base border border-[#5E5D7F] rounded-xl bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                  rows={8}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14 max-w-[450px]"
        >
          Send Message
        </Button>
      </form>

      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-8 w-full md:justify-center md:gap-2">
        <p className="font-roboto font-medium text-sm text-black">Phone:</p>
        <p className="font-roboto font-normal text-base text-black opacity-70 mt-3 md:mt-0">
          +234 913 018 3343
        </p>
        <p className="font-roboto font-normal text-base text-black opacity-70 mt-2 md:mt-0">
          +234 704 242 3329
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center pb-10">
        <p className="font-roboto font-medium text-sm text-black">
          Email:{" "}
          <span className="font-normal text-base opacity-70">
            <Link href="mailto:support@Askcenta.com">Support@Askcenta.com</Link>
          </span>
        </p>
      </div>
    </Form>
  );
}
