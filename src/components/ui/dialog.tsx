"use client";

import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

const Dialog = DialogPrimitive.Root;

const DialogTitle = DialogPrimitive.Title;

const DialogDescription = DialogPrimitive.Description;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Trigger
      className={cn("", className)}
      ref={ref}
      {...props}
      asChild
    >
      {children}
    </DialogPrimitive.Trigger>
  );
});
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-black/50 z-40 hidden md:block" />
      <DialogPrimitive.Content
        className={cn(
          "data-[state=open]:animate-contentShow md:data-[state=open]:animate-contentShowMd w-screen md:w-1/2 h-screen md:h-1/2 fixed top-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] bg-white focus:outline-none z-40",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Close
      className={cn("", className)}
      ref={ref}
      {...props}
      asChild
    >
      {children}
    </DialogPrimitive.Close>
  );
});
DialogClose.displayName = DialogPrimitive.Close.displayName;

export { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogClose };
