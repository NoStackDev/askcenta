"use client";

import { DialogProps } from "@radix-ui/react-dialog";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/components/icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProfileQuestionResponseType } from "@/types";
import { postAnswer } from "@/actions";
import LoadingSpinner from "@/components/load_spinner";

const answerFormSchema = z.object({
  answer: z
    .string()
    .min(5, { message: "Answer cannot be less than 5 charactrs" })
    .max(120, { message: "Answer cannot be more than 120 characters" }),
});

interface AnswerQandAModalProps extends DialogProps {
  question_answer_id: number;
  question: string;
  answer_username: string;
}

export default function AnswerQandAModal({
  children,
  question_answer_id,
  answer_username,
  question,
  ...props
}: AnswerQandAModalProps) {
  const [posting, setPosting] = React.useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof answerFormSchema>>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      answer: "",
    },
  });

  async function onSubmit(values: z.infer<typeof answerFormSchema>) {
    setPosting(true);
    try {
      const formData = new FormData();
      formData.append("id", question_answer_id.toString());
      formData.append("answer", values.answer);
      const res: ProfileQuestionResponseType = await postAnswer(formData);
      if (res.success) {
        setPosting(false);
        if (closeButtonRef.current) {
          closeButtonRef.current.click();
        }
        return;
      }
    } catch (err) {
      console.log(err);
      setPosting(false);
    }
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
              <Button ref={closeButtonRef}>
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
                <div className="">
                  <h3 className="font-roboto font-normal text-base text-black opacity-70">
                    Question
                  </h3>

                  <p className="mt-2 font-roboto font-medium text-base text-[#010E1E]">
                    {question}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-roboto font-normal text-sm text-black opacity-60">
                      Asked by:
                    </span>
                    <span className="font-roboto font-medium text-sm text-[#6356E5]">
                      {answer_username}
                    </span>
                  </div>
                </div>

                {/* answer  */}
                <div>
                  <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                      <FormItem className="mt-8 pb-2">
                        <div className="flex justify-between items-center">
                          <FormLabel className="font-roboto font-medium text-base text-black">
                            Answer
                          </FormLabel>

                          <span className="font-roboto font-normal text-xs text-black opacity-60">
                            140 char max
                          </span>
                        </div>

                        <FormMessage />
                        <FormControl>
                          <textarea
                            placeholder="Write your answer here..."
                            {...field}
                            className="w-full mt-2 p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-base opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-50 placeholder:text-black"
                            rows={6}
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
                    {posting ? (
                      <div className="flex items-center gap-2">
                        <LoadingSpinner /> <span>Posting Answer</span>
                      </div>
                    ) : (
                      "Answer"
                    )}
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
