import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex justify-between items-center bg-white">
      <nav className="w-full max-w-7xl flex justify-between items-center m-4 md:my-6 md:mx-[100px] 2xl:mx-auto">
        <Image src={"/images/logo.png"} width={130} height={32} alt="logo" />

        <div className="flex items-center gap-6 md:gap-10">
          <Button className="" variant="nav">
            Login
          </Button>

          <div className="h-10 w-10 rounded-lg bg-[#F7F7F9] flex">
            <Image
              src="/icons/searchIcon.png"
              width={24}
              height={24}
              alt="search"
              className="m-auto"
            />
          </div>

          <div className="h-10 w-10 rounded-lg bg-[#F7F7F9] hidden">
            <Image
              src="/icons/notificationIcon.png"
              width={24}
              height={24}
              alt="notification"
              className="m-auto"
            />
          </div>

          <div className="h-10 w-10 rounded-lg bg-[#E9EEFE] flex">
            <Image
              src="/icons/hamburgerMenu.png"
              width={24}
              height={24}
              alt="menu"
              className="m-auto"
            />
          </div>

          <Button className="hidden md:flex" variant="request">
            Place a Request
          </Button>
        </div>
      </nav>
    </div>
  );
}
