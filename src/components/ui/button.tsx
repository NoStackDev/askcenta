import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        nav: "font-poppins font-medium text-base text-[#6356E5]",
        request:
          "font-roboto font-medium text-base text-white py-[6px] px-6 bg-request-gradient rounded-[20px]",
        request_outlined:
          "font-roboto font-normal text-xs text-[#6356E5] py-[6px] px-4 rounded-xl border border-[#E5E4F0] hover:bg-request-gradient hover:text-white transition-all ease-in-out duration-200",
        request_card_outlined:
          "font-roboto font-medium text-sm text-[#6356E5] w-full py-2 rounded-2xl border border-[#E9EEFE] bg-white hover:bg-[#6356E5] hover:text-white transition-all ease-in-out duration-200",
        place_a_request:
          "fixed bottom-[18px] right-4 z-30 font-roboto font-semibold text-base text-white bg-request-gradient rounded-3xl shadow-place-a-request px-4 py-[14px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
