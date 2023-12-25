"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { WhatsappIllustration } from "../icons";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Button } from "../ui/button";
import { RequestResponsesType } from "@/types";

type Props = {
  children: React.ReactNode;
  response: RequestResponsesType;
};

export default function ResponseWhatsappContactModal({
  children,
  response,
}: Props) {
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100vw_-_48px)] left-1/2 -translate-x-1/2 h-fit top-1/2 -translate-y-1/2 rounded-[20px] shadow-modal-content">
        <div className="flex flex-col px-4 py-[72px] items-center">
          <WhatsappIllustration className="" />
          <h3 className="mt-[72px] font-poppins font-medium text-xl text-black">
            Chat on WhatsApp
          </h3>
          <p className="mt-4 font-roboto font-normal text-sm text-black opacity-80 leading-[24px] text-center">
            You will be redirected to WhatsApp messenger, ensure to apply our
            safety tips while dealing with people you meet here.
          </p>

          <DialogClose className="mt-4">
            <Link
              href="/"
              className="underline underline-offset-2 font-roboto font-medium text-sm text-black leading-6"
            >
              Safety Tips
            </Link>
          </DialogClose>

          <Button
            variant="request_outlined"
            className="mt-10 w-full text-base rounded-3xl py-[14px] font-medium"
          >
            <a href={response.whatsapp_link + `?text=${currentUrl}%0A`}>
              Proceed to WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
