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

const questionFormSchema = z.object({
  question: z
    .string()
    .min(20, { message: "Question cannot be less than 20 charactrs" })
    .max(120, { message: "Question cannot be more than 120 characters" }),
});

interface ProfileQuestionModalProps extends DialogProps {}

export default function ProfileQuestionModal({
  children,
  ...props
}: ProfileQuestionModalProps) {
  const form = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      question: "",
    },
  });

  function onSubmit(values: z.infer<typeof questionFormSchema>) {
    console.log("on submit: ", values);
  }
  return (
    <Dialog {...props}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-20 md:pb-10">
          <div className="flex justify-between items-center">
            <h2 className="font-poppins font-semibold text-base text-[#011B39]">
              QUESTION & ANSWER
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
              className="mt-8 h-full flex flex-col justify-between"
            >
              <div>
                {/* question  */}
                <div>
                  <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem className="mt-8 pb-2">
                        <div className="flex justify-between items-center">
                          <FormLabel className="font-roboto font-medium text-base text-black">
                            Question
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
                    Ask
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
