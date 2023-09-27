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

type Props = {};

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const { showSidebar, setShowSidebar } = useSidebarContext();
  const pathname = usePathname();

  return (
    <Card
      variant="sidebar"
      {...props}
      ref={forwardRef}
      className={cn(
        "absolute -left-[100%] md:relative md:left-0 transition-all ease-in-out duration-200 md:duration-0 z-50 md:z-auto",
        showSidebar && "left-0",
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

              <span>Discover</span>
            </li>
          </Link>

          <Link
            href="/"
            className="border-b border-[#EDECF0]"
            onClick={() => setShowSidebar(false)}
          >
            <li
              className={cn(
                "mb-4 flex items-center gap-8 mr-10",
                pathname.split("/")[1] === "nearby_requests" && "text-[#6356E5]"
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

              <span>Nearby Requests</span>
            </li>
          </Link>

          <Link
            href="/"
            className="border-b border-[#EDECF0]"
            onClick={() => setShowSidebar(false)}
          >
            <li
              className={cn(
                "mb-4 flex items-center gap-8 mr-10",
                pathname.split("/")[1] === "nearby_requests" && "text-[#6356E5]"
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

              <span>Custom Requests</span>
            </li>
          </Link>

          <Link
            href="/"
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

              <span>Saved</span>
            </li>
          </Link>

          <Link
            href="/"
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

              <span>Profile</span>
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

              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </CardContent>
    </Card>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
