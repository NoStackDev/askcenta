"use client";

import Image from "next/image";
import React, { forwardRef } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HamburgerIcon, NotificationIcon, SearchIcon } from "./icons";
import { useSidebarContext } from "@/context/sidebar_context";

type Props = {};

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const { showSidebar, setShowSidebar } = useSidebarContext();
  const showNotification = false;

  return (
    <div
      className={cn(
        "sticky top-0 flex justify-between items-center bg-white",
        className
      )}
      {...props}
      ref={forwardRef}
      aria-label="nav bar"
    >
      <nav className="w-full max-w-7xl flex justify-between items-center m-4 md:my-2 md:mx-[100px] 2xl:mx-auto">
        <Image src={"/images/logo.png"} width={130} height={32} alt="logo" />

        <div className="flex items-center gap-6 md:gap-10">
          <Button className="" variant="nav">
            Login
          </Button>

          <Link
            href="/"
            className="h-10 w-10 rounded-lg bg-[#F7F7F9] flex items-center justify-center"
          >
            <SearchIcon aria-label="search" />
          </Link>

          <Link
            href="/"
            className={cn(
              "h-10 w-10 rounded-lg bg-[#F7F7F9] hidden",
              showNotification && "flex items-center justify-center"
            )}
          >
            <NotificationIcon aria-label="notification" />
          </Link>

          <div
            className={cn(
              "h-10 w-10 rounded-lg bg-[#E9EEFE] flex items-center justify-center md:hidden"
            )}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <HamburgerIcon aria-label="menu" />
          </div>

          <Button className="hidden md:flex" variant="request">
            Place a Request
          </Button>
        </div>
      </nav>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
