"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { DiscoverIcon } from "./icons";

type Props = {};

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const pathname = usePathname();

  return (
    <Card variant="sidebar" {...props} ref={forwardRef}>
      <CardContent>
        <ul className="flex flex-col gap-6 font-roboto font-medium text-lg text-[#1B1839]">
          <Link href="/" className="border-b border-[#EDECF0]">
            <li
              className={cn(
                "mb-4 flex items-center gap-8",
                pathname === "/" && "text-[#6356E5]"
              )}
            >
              <DiscoverIcon
                height="24px"
                width="24px"
                aria-label="discover"
                svgColor={pathname === "/" ? "#6356E5" : ""}
              />

              <span>Discover</span>
            </li>
          </Link>
          <Link href="/" className="border-b border-[#EDECF0]">
            <li className={cn("mb-4")}>Nearby Requests</li>
          </Link>
          <Link href="/" className="border-b border-[#EDECF0]">
            <li className={cn("mb-4")}>Custom Requests</li>
          </Link>
          <Link href="/" className="border-b border-[#EDECF0]">
            <li className={cn("mb-4")}>Saved</li>
          </Link>
          <Link href="/" className="border-b border-[#EDECF0]">
            <li className={cn("mb-4")}>Profile</li>
          </Link>
          <Link href="/" className="border-b border-[#EDECF0]">
            <li className={cn("mb-4")}>Settings</li>
          </Link>
        </ul>
      </CardContent>
    </Card>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
