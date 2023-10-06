import Image from "next/image";
import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NotificationIcon, SearchIcon } from "../icons";
import { HamburgerMenu } from ".";

type Props = {};

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const showNotification = false;

  return (
    <div
      className={cn(
        "sticky top-0 flex justify-between items-center bg-white z-10",
        className
      )}
      {...props}
      ref={forwardRef}
      aria-label="nav bar"
    >
      <nav className="w-full max-w-7xl flex justify-between items-center m-4 md:my-2 md:mx-4 lg:mx-[100px] 2xl:mx-auto">
        <Link href="/">
          <Image src={"/images/logo.png"} width={130} height={32} alt="logo" />
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <Button className="" variant="nav">
            Login
          </Button>

          <Link
            href="/search"
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

          <HamburgerMenu />

          <Button className="hidden lg:flex" variant="request">
            Place a Request
          </Button>
        </div>
      </nav>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
