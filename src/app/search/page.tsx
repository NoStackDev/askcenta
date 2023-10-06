import { RequestContainer } from "@/components/request";
import React from "react";
import Searchbar from "../saved/search_bar";

type Props = {};

export default function SearchPage({}: Props) {
  return (
    <main className="w-full mt-10">
      <div className="px-4">
        <Searchbar />
      </div>
      <RequestContainer />
    </main>
  );
}
