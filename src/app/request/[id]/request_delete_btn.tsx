"use client";

import { deleteRequestAction } from "@/actions";
import { DeleteIcon } from "@/components/icons";
import LoadingSpinner from "@/components/load_spinner";
import React from "react";

type Props = {};

export default function RequestDeleteBtn({ requestid }: { requestid: number }) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  async function onClick() {
    setIsDeleting(true);
    try {
      const res = await deleteRequestAction(requestid);

      if (res.isError) {
        setIsDeleting(false);
        return;
      }

      console.log(res);

      window.location.href = "/";
      const timeoutId = setTimeout(() => setIsDeleting(false), 3000);
      clearTimeout(timeoutId);
    } catch (err) {
      console.log(err);
      setIsDeleting(false);
    }
  }

  return (
    <div
      className="flex items-center gap-1 hover:cursor-pointer"
      onClick={onClick}
    >
      {!isDeleting && <DeleteIcon aria-label="Delete" />}
      {isDeleting && <LoadingSpinner pathFill1="black" />}
      <span className="font-roboto font-normal text-sm text-black opacity-80">
        {!isDeleting && "Delete"}
        {isDeleting && "Deleting"}
      </span>
    </div>
  );
}
