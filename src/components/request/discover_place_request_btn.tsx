"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/context/sidebar_context";
import { UserDetailsType } from "@/types";
import Link from "next/link";

interface DiscoverPlaceRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  user: UserDetailsType["data"] | null;
}

export default function DiscoverPlaceRequestBtn({
  className,
  user,
  ...props
}: DiscoverPlaceRequestBtnProps) {
  const { showSidebar } = useSidebarContext();

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    const triggerBtn = document.getElementById("request_form_modal_trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  }

  return (
    <>
      {user ? (
        <Button
          onClick={(e) => onClick(e)}
          className={cn("md:hidden", showSidebar && "hidden", className)}
          variant="place_a_request"
          {...props}
        >
          Place a Request
        </Button>
      ) : (
        <Link href={"/login"}>
          <Button
            className={cn("md:hidden", showSidebar && "hidden", className)}
            variant="place_a_request"
            {...props}
          >
            Place a Request
          </Button>
        </Link>
      )}
    </>
  );
}
