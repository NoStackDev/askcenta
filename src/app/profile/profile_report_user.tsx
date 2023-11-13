"use client";

import { CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogProps } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const reportFormSchema = z.object({
  report: z
    .string()
    .min(20, { message: "Report cannot be less than 20 charactrs" })
    .max(120, { message: "Report cannot be more than 120 characters" }),
});

interface ProfileReportUserProps extends DialogProps {}

export default function ProfileReportUserModal({
  children,
  ...props
}: ProfileReportUserProps) {
  const form = useForm<z.infer<typeof reportFormSchema>>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      report: "",
    },
  });

  function onSubmit(values: z.infer<typeof reportFormSchema>) {
    console.log("on submit: ", values);
  }

  return (
    <Dialog {...props}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-20 md:pb-10">
          <div className="flex justify-between items-center">
            <h2 className="font-poppins font-semibold text-base text-[#011B39]">
              REPORT
            </h2>

            <DialogClose>
              <Button>
                <CloseIcon />
              </Button>
            </DialogClose>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 h-full flex flex-col justify-between"
            >
              <div>
                <div className="">
                  <p className="font-roboto font-medium text-sm text-[#010E1E]">
                    Help us keep the community safe and conducive for everyone
                    by reporting any inappropriate act.
                  </p>

                  <div className="flex flex-col gap-2 mt-6">
                    <p className="font-roboto font-normal text-sm text-black opacity-60">
                      Request/user
                    </p>
                    <p className="font-roboto font-normal text-xs text-[#6356E5]">
                      https://askcenta.com/profile/1
                    </p>
                  </div>
                </div>

                {/* report  */}
                <div className="mt-12">
                  <FormField
                    control={form.control}
                    name="report"
                    render={({ field }) => (
                      <FormItem className="mt-8 pb-2">
                        <div className="flex justify-between items-center">
                          <FormLabel className="font-roboto font-medium text-base text-black">
                            Comment
                          </FormLabel>

                          <span className="font-roboto font-normal text-xs text-black opacity-60">
                            140 char max
                          </span>
                        </div>

                        <FormMessage />
                        <FormControl>
                          <textarea
                            placeholder="Write here..."
                            {...field}
                            className="w-full mt-2 p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-base opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-50 placeholder:text-black"
                            rows={8}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center pt-4">
                <div className="w-full flex items-center justify-between pt-4">
                  <Button
                    type="submit"
                    className="w-full rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12"
                  >
                    Send Report
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
