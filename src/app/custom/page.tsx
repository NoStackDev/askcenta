import React from "react";
import CustomTopbar from "./custom_topbar";
import { RequestContainer } from "@/components/request";

type Props = {};

export default function CustomPage({}: Props) {
  return (
    <main className="w-full">
      <CustomTopbar className="mt-2 md:mt-0" />

      <RequestContainer />
    </main>
  );
}
