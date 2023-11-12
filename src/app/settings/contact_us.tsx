import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ContactUsBtnProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export default function ContactUsBtn({
  className,
  ...props
}: ContactUsBtnProps) {
  return (
    <Link
      href="/contact_us"
      className={cn("font-roboto font-normal text-base text-black", className)}
      {...props}
    >
      Contact us
    </Link>
  );
}
