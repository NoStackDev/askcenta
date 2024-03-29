"use client";

import { getNotifications } from "@/actions";
import {
  MessageIcon,
  QuestionIcon,
  SolventIcon,
  SpeakerSymbolIcon,
} from "@/components/icons";
import LoadingDots from "@/components/loading_dots";
import { Card } from "@/components/ui/card";
import { cn, month } from "@/lib/utils";
import { NotificationResponseType } from "@/types";
import React from "react";

type Props = {};

export default function NotificationPage({}: Props) {
  const [notifications, setNotification] = React.useState<
    NotificationResponseType["data"]
  >([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await getNotifications();
        if (loading) setLoading(false);
        setNotification(res.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    fetchNotifications();
    const intervalId = setInterval(() => {
      fetchNotifications();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="w-full min-h-screen">
      <h1 className="uppercase font-poppins font-semibold text-base text-black px-4 py-6">
        notification
      </h1>

      <div className="px-4 flex flex-col gap-4 pb-10">
        {notifications.map((notification) => {
          return (
            <Card
              variant="response"
              className="px-3 py-4"
              key={notification.id}
            >
              <div className="flex justify-between items-center">
                <div className="rounded bg-[#E9EEFE] p-1">
                  {notification.message.includes(
                    "Your request has been posted!"
                  ) && <SpeakerSymbolIcon />}
                  {(notification.message.includes("responded to your") ||
                    notification.message.includes("responsed to your")) && (
                    <MessageIcon />
                  )}
                  {notification.message.includes("You have a question") && (
                    <QuestionIcon />
                  )}
                  {notification.message.includes("answered your question") && (
                    <SolventIcon />
                  )}
                </div>

                <span className="font-roboto font-normal text-xs text-black opacity-60">
                  {new Date(notification.created_at).getDate()}{" "}
                  {month(new Date(notification.created_at).getMonth())}
                </span>
              </div>

              <p className="mt-2 font-roboto font-normal text-base text-black">
                {notification.message}
              </p>
            </Card>
          );
        })}

        {!loading && notifications.length === 0 && (
          <p className="mx-auto mt-5 font-roboto text-base text-black">
            You have no notification
          </p>
        )}

        {loading && (
          <LoadingDots
            className={cn("absolute left-1/2 -translate-x-1/2 mt-5")}
          />
        )}
      </div>
    </main>
  );
}
