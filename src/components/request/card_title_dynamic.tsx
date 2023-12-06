"use client";

import React from "react";
import { CardTitle, CardTitleProps } from "../ui/card";
import { cn, randomBgColor } from "@/lib/utils";

interface CardTitleDynamicProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function CardTitleDynamic({
  className,
  children,
  ...props
}: CardTitleDynamicProps) {
  const cardTitleRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (cardTitleRef.current) {
      cardTitleRef.current.style.backgroundColor = randomBgColor();
    }
  });
  return (
    <CardTitle ref={cardTitleRef} className={cn(``, className)} {...props}>
      {children}
    </CardTitle>
  );
}
