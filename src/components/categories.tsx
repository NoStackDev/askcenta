import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import {
  BoxOpenIcon,
  DashboardIcon,
  HouseIcon,
  PeopleGroupIcon,
  ServicePackagesIcon,
  ServiceRepairmanIcon,
} from "./icons";

import SubCategoryModal from "./modal/sub_category_modal";
import Link from "next/link";

type Props = {};

const Categories = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  return (
    <Card
      ref={forwardRef}
      className={cn("", className)}
      {...props}
      variant="card1"
    >
      <CardHeader className="" variant="header1">
        CATEGORIES
      </CardHeader>

      <CardContent className="grid max-320screen:grid-cols-1 grid-cols-3 md:grid-cols-6 lg:grid-cols-3 1104screen:grid-cols-6 gap-2 mt-2">
        <SubCategoryModal categorygroup="social">
          <Card className="bg-[#5BE7C4]" variant="category">
            <CardContent>
              <PeopleGroupIcon aria-label="social" />

              <span className="block font-roboto font-medium text-sm text-black mt-4">
                Social
              </span>
            </CardContent>
          </Card>
        </SubCategoryModal>

        <SubCategoryModal categorygroup="jobs">
          <Card className="bg-[#4FC1E9]" variant="category">
            <CardContent>
              <ServicePackagesIcon aria-label="jobs" />

              <span className="block font-roboto font-medium text-sm text-black mt-4">
                Jobs
              </span>
            </CardContent>
          </Card>
        </SubCategoryModal>

        <SubCategoryModal categorygroup="products">
          <Card className="bg-[#EB89B5]" variant="category">
            <CardContent>
              <BoxOpenIcon aria-label="products" />

              <span className="block font-roboto font-medium text-sm text-black mt-4">
                Products
              </span>
            </CardContent>
          </Card>
        </SubCategoryModal>

        <SubCategoryModal categorygroup="services">
          <Card className="bg-[#4FC1E9]" variant="category">
            <CardContent>
              <ServiceRepairmanIcon aria-label="services" />

              <span className="block font-roboto font-medium text-sm text-black mt-4">
                Services
              </span>
            </CardContent>
          </Card>
        </SubCategoryModal>

        <SubCategoryModal categorygroup="accomodation ">
          <Card className="bg-[#5BE7C4]" variant="category">
            <CardContent>
              <HouseIcon aria-label="accommodation" />

              <span className="block font-roboto font-medium text-sm text-black mt-4">
                <span className="break break-words">Accommodation</span>
                {/* <span className="hidden min-[440px]:flex md:hidden min-[905px]:flex">
                Accommodation
              </span>
              <div className="w-fit h-fit min-[440px]:hidden md:flex min-[905px]:hidden">
                Accommod-
              </div>
              <div className="w-fit h-fit min-[440px]:hidden md:flex min-[905px]:hidden">
                ation
              </div> */}
              </span>
            </CardContent>
          </Card>
        </SubCategoryModal>

        <Link href="/custom">
          <Card className="border border-[#6356E5]" variant="category">
            <CardContent className="flex flex-col items-center">
              <DashboardIcon
                width="48"
                height="48"
                pathColor="#6356E5"
                aria-label="custom"
              />

              <span className="block font-roboto font-medium text-sm text-[#6356E5] mt-4">
                Custom
              </span>
            </CardContent>
          </Card>
        </Link>
      </CardContent>
    </Card>
  );
});

Categories.displayName = "Categories";

export default Categories;
