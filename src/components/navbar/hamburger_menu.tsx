"use client";

import React from "react";
import { HamburgerIcon } from "../icons";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/context/sidebar_context";

interface HamburgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function HamburgerMenu({
  className,
  ...props
}: HamburgerMenuProps) {
  const { showSidebar, setShowSidebar } = useSidebarContext();

  return (
    <div
      className={cn(
        "h-10 w-10 rounded-lg bg-[#E9EEFE] flex items-center justify-center lg:hidden",
        className
      )}
      onClick={() => setShowSidebar(!showSidebar)}
      {...props}
    >
      <HamburgerIcon aria-label="menu" />
    </div>
  );
}
