import { AddFillIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn, month } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import AnswerQandAModal from "./profile_answer_qanda_modal";
import SketchIllustration from "@/components/icons/sketch_illustration";
import ProfileQuestionModal from "./profile_question_modal";
import { getUserDetailsAction } from "@/actions";
import { UserDetailsType } from "@/types";
import { cookies } from "next/headers";

interface ProfileQandATabProps extends TabsContentProps {
  otherUserId?: string | string[] | undefined;
}

export default async function ProfileQandATab({
  className,
  otherUserId,
  ...props
}: ProfileQandATabProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const userDetails: UserDetailsType = otherUserId
    ? await getUserDetailsAction(otherUserId.toString())
    : await getUserDetailsAction();
  return (
    <TabsContent className={cn("flex flex-col gap-4", className)} {...props}>
      {otherUserId && (
        <div className="px-4 md:px-0">
          <Card className="w-full py-6 bg-white flex flex-col justify-center items-center gap-4 rounded-lg shadow-category-card">
            <div className="flex flex-col items-center gap-2 font-roboto font-normal text-base text-black opacity-60 text-center">
              Do you have any inquiries on any of my requests, offers, or
              business matters?
              {/* <span className="opacity-100">Username</span> */}
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

      {userDetails.data.question_answer.map((question_answer) => {
        const date = new Date(question_answer.created_at);
        return (
          <Card
            variant="settings"
            className="flex flex-col gap-2"
            key={question_answer.id}
          >
            <div className="flex items-start gap-4">
              <span className="font-roboto font-semibold text-sm text-black">
                Q:
              </span>
              <p className="font-roboto font-medium text-sm text-[#010E1E]">
                {question_answer.question}
              </p>
            </div>

            {user &&
              user.id === userDetails.data.id &&
              !question_answer.answer && (
                <AnswerQandAModal
                  question={question_answer.question}
                  question_answer_id={question_answer.id}
                  answer_username={userDetails.data.name}
                >
                  <Button className="bg-[#F0EEFF] w-fit rounded-2xl py-2 px-6 mt-4 ml-8 font-roboto font-medium text-sm text-[#6356E5]">
                    Answer
                  </Button>
                </AnswerQandAModal>
              )}

            <div className="mt-2 flex items-center justify-between pl-7">
              <span className="font-roboto font-normal text-sm text-black opacity-60">
                {date.getDate()} {month(date.getMonth())} , {date.getFullYear()}
              </span>

              {/* <Button>
                <EditIcon width="20" height="20" />
              </Button> */}
            </div>
          </Card>
        );
      })}

      {userDetails.data.question_answer.length < 1 && (
        <div className="h-full min-h-[300px] w-full flex flex-col items-center justify-center">
          <SketchIllustration />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            No Question Yet
          </p>
        </div>
      )}
    </TabsContent>
  );
}
