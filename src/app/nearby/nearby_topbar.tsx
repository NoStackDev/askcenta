import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

export default function NearbyTopbar({}: Props) {
  return (
    <Card variant="settings" className="w-full bg-white mt-2 md:mt-0 bg-index-category-bg">
      <div className="font-poppins font-semibold text-base text-[#011B39]">
        NEARBY REQUESTS
      </div>

      <p className="mt-[10px] font-roboto font-normal text-xs text-black opacity-70">
        Explore what people are searching for around you and fulfill their needs
        to earn more income
      </p>
    </Card>
  );
}
