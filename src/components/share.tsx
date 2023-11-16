"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { RWebShare } from "react-web-share";
import { cn } from "@/lib/utils";

interface ShareProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export default function Share({
  className,
  children,
  text,
  ...props
}: ShareProps) {
  const [url, setUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (window) {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <>
      {url && (
        <div className={cn("w-fit h-fit", className)} {...props}>
          <RWebShare
            data={{
              text: text,
              url: url,
              title: "AskCenta",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            {children}
          </RWebShare>
        </div>
      )}
    </>
  );
}
