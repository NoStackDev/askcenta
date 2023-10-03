"use client";

import React from "react";
import { SelectItem, SelectItemText } from "../ui/select";
import { SubCategoryType } from "../../../types";

interface TopbarSelectLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  subcategory: SubCategoryType;
}

export default function TopbarSelectLink({
  className,
  subcategory,
  ...props
}: TopbarSelectLinkProps) {
  return (
    <a
      href={`/?category_group_id=${subcategory.id}`}
      key={subcategory.id}
      onClick={() => console.log("clicked")}
    >
      <SelectItem value={subcategory.name.trim()}>
        <SelectItemText>{subcategory.name.trim()}</SelectItemText>
      </SelectItem>
    </a>
  );
}
