"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DeleteConfirmationIllustration } from "../icons";
import { deleteRequestAction } from "@/actions";
import LoadingSpinner from "../load_spinner";

type Props = { children: React.ReactNode; requestid: number };

export default function DeleteRequestModal({ children, requestid }: Props) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  async function onDeleteBtnClick() {
    setIsDeleting(true);
    try {
      const res = await deleteRequestAction(requestid);

      if (res.isError) {
        setIsDeleting(false);
        return;
      }

      console.log(res);

      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setIsDeleting(false);
    }
  }
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100vw_-_48px)] left-1/2 -translate-x-1/2 h-fit top-1/2 -translate-y-1/2 rounded-[20px] shadow-modal-content">
        <div className="flex flex-col px-4 py-[72px] items-center">
          <DeleteConfirmationIllustration className="" />
          <h3 className="mt-[72px] font-poppins font-medium text-xl text-black">
            Delete Request
          </h3>
          <p className="mt-4 font-roboto font-normal text-sm text-black opacity-80 leading-[24px] text-center">
            Do you wish to delete your request?
          </p>

          <Button
            variant="request_outlined"
            className="mt-10 w-full text-base rounded-3xl py-[14px] font-medium"
            onClick={onDeleteBtnClick}
          >
            {isDeleting && (
              <>
                <LoadingSpinner pathFill1="white" pathFill="transparent" />{" "}
              </>
            )}
            {!isDeleting && "Yes, delete"}
            {isDeleting && "Deleting"}
          </Button>

          <DialogClose>
            <Button className="mt-10">CANCEL</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
