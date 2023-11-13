import { AddFillIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import AnswerQandAModal from "./profile_answer_qanda_modal";
import SketchIllustration from "@/components/icons/sketch_illustration";
import ProfileQuestionModal from "./profile_question_modal";

interface ProfileQandATabProps extends TabsContentProps {
  otheruser?: boolean;
}

export default function ProfileQandATab({
  className,
  otheruser,
  ...props
}: ProfileQandATabProps) {
  return (
    <TabsContent className={cn("flex flex-col gap-4", className)} {...props}>
      {otheruser && (
        <div className="px-4 md:px-0">
          <Card className="w-full py-6 bg-white flex flex-col justify-center items-center gap-4 rounded-lg shadow-category-card">
            <div className="flex flex-col items-center gap-2 font-roboto font-normal text-base text-black opacity-60">
              Do you have any question to ask?
              <span className="opacity-100">Username</span>
            </div>

            <ProfileQuestionModal>
              <Button className="flex gap-[6px] justify-center items-center">
                <span className="font-roboto font-semibold text-lg text-black">
                  Post a Question
                </span>

                <AddFillIcon />
              </Button>
            </ProfileQuestionModal>
          </Card>
        </div>
      )}

      {/* {!otheruser && (
        <Card variant="settings" className="flex flex-col gap-2">
          <div className="flex items-start gap-4">
            <span className="font-roboto font-semibold text-sm text-black">
              Q:
            </span>
            <p className="font-roboto font-medium text-sm text-[#010E1E]">
              Lorem ipsum dolor sit amet consectetur. In malesuada fringilla
              molestie dis sapien?
            </p>
          </div>

          <AnswerQandAModal>
            <Button className="bg-[#F0EEFF] w-fit rounded-2xl py-2 px-6 mt-4 ml-8 font-roboto font-medium text-sm text-[#6356E5]">
              Answer
            </Button>
          </AnswerQandAModal>
        </Card>
      )} */}

      {/* <Card variant="settings" className="flex flex-col gap-2">
        <div className="flex items-start gap-4">
          <span className="font-roboto font-semibold text-sm text-black">
            Q:
          </span>
          <p className="font-roboto font-medium text-sm text-[#010E1E]">
            Lorem ipsum dolor sit amet consectetur. In malesuada fringilla
            molestie dis sapien?
          </p>
        </div>

        <div className="flex items-start gap-4">
          <span className="font-roboto font-semibold text-sm text-black">
            A:
          </span>
          <p className="font-roboto font-medium text-sm text-[#010E1E] opacity-80">
            Lorem ipsum dolor sit amet consectetur. In malesuada fringilla
            molestie dis sapien?
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between pl-7">
          <span className="font-roboto font-normal text-sm text-black opacity-60">
            20 Sept, 2023
          </span>

          <Button>
            <EditIcon width="20" height="20" />
          </Button>
        </div>
      </Card> */}

      <div className="h-full min-h-[300px] w-full flex flex-col items-center justify-center">
        <SketchIllustration />

        <p className="mt-6 font-poppins font-medium text-base text-black">
          No Question Yet
        </p>
      </div>
    </TabsContent>
  );
}
