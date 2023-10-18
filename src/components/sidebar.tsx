"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

import { usePathname } from "next/navigation";
import {
  AccountIcon,
  DashboardIcon,
  DiscoverIcon,
  MyLocationIcon,
  SettingsIcon,
  StarIcon,
} from "./icons";
import { useSidebarContext } from "@/context/sidebar_context";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const { showSidebar, setShowSidebar } = useSidebarContext();
  const pathname = usePathname();

  React.useEffect(() => {
    showSidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [showSidebar]);

  return (
    <>
      <Card
        variant="sidebar"
        {...props}
        ref={forwardRef}transition-all ease-in-out duration-200
        className={cn(
          "fixed -bottom-[100%] lg:sticky lg:top-24 rounded-none md:rounded-lg transition-all ease-in-out duration-150 lg:duration-0 z-50 lg:z-auto",
          showSidebar && "bottom-[calc(100vh_-_630px)]",
          className
        )}
      >
        <CardContent>
          <ul className="flex flex-col gap-6 font-roboto font-medium text-lg text-[#1B1839]">
            <Link
              href="/"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname === "/" && "text-[#6356E5]"
                )}
              >
                <DiscoverIcon
                  height="24px"
                  width="24px"
                  aria-label="discover"
                  svgColor={pathname === "/" ? "#6356E5" : null}
                />

                <span className="w-max">Discover</span>
              </li>
            </Link>

            <Link
              href="/nearby"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname.split("/")[1] === "nearby_requests" &&
                    "text-[#6356E5]"
                )}
              >
                <MyLocationIcon
                  height="24px"
                  width="24px"
                  aria-label="nearby requests"
                  pathColor={
                    pathname.split("/")[1] === "nearby_requests"
                      ? "#6356E5"
                      : null
                  }
                />

                <span className="w-max">Nearby Requests</span>
              </li>
            </Link>

            <Link
              href="/custom"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname.split("/")[1] === "nearby_requests" &&
                    "text-[#6356E5]"
                )}
              >
                <DashboardIcon
                  height="24px"
                  width="24px"
                  aria-label="custom requests"
                  pathColor={
                    pathname.split("/")[1] === "custom_requests"
                      ? "#6356E5"
                      : null
                  }
                />

                <span className="w-max">Custom Requests</span>
              </li>
            </Link>

            <Link
              href="/saved"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname.split("/")[1] === "saved" && "text-[#6356E5]"
                )}
              >
                <StarIcon
                  height="24px"
                  width="24px"
                  aria-label="saved requests"
                  pathColor={
                    pathname.split("/")[1] === "saved" ? "#6356E5" : null
                  }
                />

                <span className="w-max">Saved</span>
              </li>
            </Link>

            <Link
              href="/profile"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname.split("/")[1] === "profile" && "text-[#6356E5]"
                )}
              >
                <AccountIcon
                  height="24px"
                  width="24px"
                  aria-label="profile"
                  pathColor={
                    pathname.split("/")[1] === "profile" ? "#6356E5" : null
                  }
                />

                <span className="w-max">Profile</span>
              </li>
            </Link>

            <Link
              href="/settings"
              className="border-b border-[#EDECF0]"
              onClick={() => setShowSidebar(false)}
            >
              <li
                className={cn(
                  "mb-4 flex items-center gap-8 mr-10",
                  pathname.split("/")[1] === "settings" && "text-[#6356E5]"
                )}
              >
                <SettingsIcon
                  height="24px"
                  width="24px"
                  aria-label="settings"
                  pathColor={
                    pathname.split("/")[1] === "settings" ? "#6356E5" : null
                  }
                />

                <span className="w-max">Settings</span>
              </li>
            </Link>
          </ul>
        </CardContent>
      </Card>

      <div
        onClick={() => setShowSidebar(false)}
        className={cn(
          "h-full w-full fixed backdrop-blur-sm bg-black/50 hidden z-40",
          showSidebar && "block animate-sidebarOverlayShow"
        )}
      ></div>
    </>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
