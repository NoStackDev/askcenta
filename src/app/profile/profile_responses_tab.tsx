import { RequestContainer } from "@/components/request";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import { Button } from "@/components/ui/button";
import { AddFillIcon } from "@/components/icons";
import ProfileQuestionModal from "./profile_question_modal";

interface ProfileResponsesTabProps extends TabsContentProps {
  otheruser?: boolean;
}

export default function ProfileResponsesTab({
  className,
  otheruser,
  ...props
}: ProfileResponsesTabProps) {
  return (
    <TabsContent className={cn("", className)} {...props}>
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
      <RequestContainer />
    </TabsContent>
  );
}
