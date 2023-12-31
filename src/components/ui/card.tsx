import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

// card
const cardVariants = cva("w-fit h-fit", {
  variants: {
    variant: {
      default: "",
      sidebar:
        "w-full lg:h-fit lg:w-max bg-white font-roboto font-medium text-lg text-[#1B1839] rounded-lg py-10 pb-32 lg:pb-10 px-4",
      card1: "bg-white font-roboto p-4 md:rounded-lg w-full",
      category:
        "px-3 pt-4 pb-8 w-full h-[131px] rounded-xl shadow-category-card hover:cursor-pointer hover:shadow-xl hover:scale-105",
      request:
        "font-roboto bg-white rounded-xl shadow-request-card hover:shadow-xl hover:scale-105",
      request_detail: "w-full",
      response:
        "w-full h-fit bg-white rounded-xl pt-4 pb-2 break-inside-avoid shadow-response-card hover:shadow-xl",
      settings: "w-full h-fit px-4 py-6 md:px-6 bg-white md:rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

// card header
const cardHeaderVariants = cva("", {
  variants: {
    variant: {
      default: "",
      header1: "font-poppins font-semibold text-base text-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {
  asChild?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ variant, className }))}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// card title
const cardTitleVariants = cva("", {
  variants: {
    variant: {
      default: "",
      request:
        "font-roboto font-medium text-base text-white py-[6px] px-6 bg-primary rounded-[20px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  asChild?: boolean;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, variant, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(cardTitleVariants({ variant, className }))}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// card description
const cardDescriptionVariants = cva("", {
  variants: {
    variant: {
      default: "",
      request:
        "font-roboto font-medium text-base text-white py-[6px] px-6 bg-primary rounded-[20px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {
  asChild?: boolean;
}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, variant, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(cardDescriptionVariants({ variant, className }))}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// card content
const cardContentVariants = cva("", {
  variants: {
    variant: {
      default: "",
      request:
        "font-roboto font-medium text-base text-white py-[6px] px-6 bg-primary rounded-[20px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {
  asChild?: boolean;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ variant, className }))}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

// card footer
const cardFooterVariants = cva("", {
  variants: {
    variant: {
      default: "",
      request:
        "font-roboto font-medium text-base text-white py-[6px] px-6 bg-primary rounded-[20px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {
  asChild?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ variant, className }))}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
