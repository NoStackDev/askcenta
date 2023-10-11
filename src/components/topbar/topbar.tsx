import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { KeyboardBackspaceIcon, LocationIcon, PersonIcon } from "../icons";
import { Button } from "../ui/button";
import Link from "next/link";
import TopbarSelect from "./topbar_select";
import { SubCategoryResponseType } from "../../../types";
import { RequestFormWrapper } from "../request";

async function fetchSubCategories() {
  const res = await fetch("https://www.askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch feed");
  }

  return res.json();
}

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
              <PersonIcon className="" />

              <div className="font-roboto font-medium text-base opacity-60 text-black">
                What do you need?
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <LocationIcon className="mx-2" aria-label="location" />

                <span className="font-roboto font-normal text-xs text-black opacity-60">
                  Nationwide
                </span>
              </div>

              <RequestFormWrapper>
                <Button variant="request_outlined">Post request</Button>
              </RequestFormWrapper>
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
