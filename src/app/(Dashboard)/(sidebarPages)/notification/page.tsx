import {
  MessageIcon,
  QuestionIcon,
  SolventIcon,
  SpeakerSymbolIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

export default function NotificationPage({}: Props) {
  return (
    <main className="w-full">
      <h1 className="uppercase font-poppins font-semibold text-base text-black px-4 py-6">
        notification
      </h1>

      <div className="px-4 flex flex-col gap-4 pb-10">
        <Card variant="response" className="px-3 py-4">
          <div className="flex justify-between items-center">
            <div className="rounded bg-[#E9EEFE] p-1">
              <MessageIcon />
            </div>

            <span className="font-roboto font-normal text-xs text-black opacity-60">
              2 Sept.
            </span>
          </div>

          <p className="mt-2 font-roboto font-normal text-base text-black">
            Username responded to your request
          </p>
        </Card>

        <Card variant="response" className="px-3 py-4">
          <div className="flex justify-between items-center">
            <div className="rounded bg-[#E9EEFE] p-1">
              <SpeakerSymbolIcon />
            </div>

            <span className="font-roboto font-normal text-xs text-black opacity-60">
              2 Sept.
            </span>
          </div>

          <p className="mt-2 font-roboto font-normal text-base text-black">
            You have successfully posted a request
          </p>
        </Card>

        <Card variant="response" className="px-3 py-4">
          <div className="flex justify-between items-center">
            <div className="rounded bg-[#E9EEFE] p-1">
              <QuestionIcon />
            </div>

            <span className="font-roboto font-normal text-xs text-black opacity-60">
              2 Sept.
            </span>
          </div>

          <p className="mt-2 font-roboto font-normal text-base text-black">
            You have a question from a client
          </p>
        </Card>

        <Card variant="response" className="px-3 py-4">
          <div className="flex justify-between items-center">
            <div className="rounded bg-[#E9EEFE] p-1">
              <SolventIcon />
            </div>

            <span className="font-roboto font-normal text-xs text-black opacity-60">
              2 Sept.
            </span>
          </div>

          <p className="mt-2 font-roboto font-normal text-base text-black opacity-60">
            Username have answered your question
          </p>
        </Card>
      </div>
    </main>
  );
}
