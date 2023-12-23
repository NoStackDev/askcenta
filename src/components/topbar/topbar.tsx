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

  const captions = [
    "Explore people's need around you and make them an offer",
    "Transform how you access products, services and connections",
    "Whatever you want, whereever you need it. Just ask!",
    "Request for whatever you need and get instant offers for it",
  ];
  const mathRandom = Math.random();
  const mathRandomWithFloor = Math.floor(mathRandom * captions.length);
  const randomInteger =
    mathRandomWithFloor >= captions.length
      ? captions.length - 1
      : mathRandomWithFloor;

  return (
    <>
      {!subcategoryid && (
        <Card
          className={cn(
            "bg-index-topbar-bg bg-no-repeat bg-cover px-2 md:px-8 pb-4 md:pb-6 md:rounded-[20px]",
            className
          )}
          {...props}
          variant="card1"
        >
          <p className="font-poppins font-extrabold text-xl text-center text-white leading-[36px] tracking-[0.02em] mt-6">
            {captions[randomInteger]}
          </p>
          <CardContent className="flex flex-col gap-5 bg-white rounded-3xl md:rounded-lg py-4 px-3 mt-8">
            <div className="w-full bg-[#F2F4F8] h-12 rounded-3xl md:rounded-lg flex items-center px-3 gap-2">
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
        <Card
          variant="card1"
          className="max-md:bg-linear-bg-gradient md:bg-white"
        >
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
