import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { KeyboardBackspaceIcon, LocationIcon, PersonIcon } from "../icons";
import Link from "next/link";
import TopbarSelect from "./topbar_select";
import { SubCategoryResponseType } from "@/types";
import DiscoverTopbarRequestBtn from "./discover_topbar_request_btn";
import { fetchSubCategories } from "@/api/category";
import TopbarRequestInput from "./topbar_request_input";
import { Button } from "../ui/button";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  subcategoryid: string | string[] | undefined;
}

export default async function Topbar({
  className,
  subcategoryid,
  ...props
}: TopbarProps) {
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();
  const subCategories = await subCategoriesRes;

  return (
    <>
      {!subcategoryid && (
        <Card className={cn("", className)} {...props} variant="card1">
          <CardContent className="flex flex-col gap-5">
            <div className="w-full bg-[#F2F4F8] h-12 rounded-3xl flex items-center px-3 gap-2">
              <Link href="/profile">
                <PersonIcon className="" />
              </Link>

              <TopbarRequestInput className="w-full" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <LocationIcon className="mx-2" aria-label="location" />

                <span className="font-roboto font-normal text-xs text-black opacity-60">
                  Nationwide
                </span>
              </div>

              {/* <DiscoverTopbarRequestBtn /> */}
              <Link href="/nearby">
                <Button
                  className={cn("", className)}
                  variant="request_outlined"
                >
                  Nearby requests
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {subcategoryid && (
        <Card variant="card1">
          <Link href="/" className="flex w-fit h-fit">
            <KeyboardBackspaceIcon aria-label="back" />
          </Link>

          <TopbarSelect
            subcategoryid={subcategoryid}
            subcategories={subCategories.data}
          ></TopbarSelect>
        </Card>
      )}
    </>
  );
}
