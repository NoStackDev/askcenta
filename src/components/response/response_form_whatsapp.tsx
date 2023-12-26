"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import LoadingSpinner from "../load_spinner";
import { updateUserDetailsAction } from "@/actions";
import { UserDetailsType } from "@/types";
import { WhatsappCircleIcon } from "../icons";

interface ResponseFormWhatsappProps
  extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      whatsapp_num: string;
      title: string;
      location: string;
      visibility: "public" | "private";
      description?: string | undefined;
    },
    any,
    undefined
  >;
  setWhatsappNum: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ResponseFormWhatsapp({
  className,
  form,
  setWhatsappNum,
}: ResponseFormWhatsappProps) {
  const [isUpdating, setIsUpdating] = React.useState(false);

  async function onSaveClick() {
    if (isUpdating) {
      return;
    }
    setIsUpdating(true);
    if (form.getValues("whatsapp_num").length !== 10) {
      form.trigger("whatsapp_num");
      return;
    }
    if (form.getValues("whatsapp_num").length === 10) {
      try {
        const formData = new FormData();
        formData.append("whatsapp_num", 234 + form.getValues("whatsapp_num"));
        const res = await updateUserDetailsAction(formData);
        if (res.isError) {
          res.errors.whatsapp_num &&
            form.setError("whatsapp_num", {
              message: res.errors.whatsapp_num[0],
            });
          setIsUpdating(false);
          return;
        }
        setIsUpdating(false);
        setWhatsappNum(res.data.whatsapp_num);
      } catch (err: any) {
        console.log(err);
        setIsUpdating(false);
      }
    }
  }
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col gap-4 items-start text-justify">
        <h3 className="font-roboto text-lg font-medium text-[#4FC1E9] leading-[23px]">
          Via WhatsApp Messenger
        </h3>
        <p className="font-roboto text-base font-normal text-[#262525] leading-[23px]">
          Kindly add your WhatsApp number. This allows interested users to
          easily contact you. Rest assured, your number will only be visible to
          those you choose to connect with, ensuring your privacy.
        </p>
      </div>

      {/* Whatsapp Number  */}
      <FormField
        control={form.control}
        name="whatsapp_num"
        render={({ field }) => (
          <FormItem className="mt-8">
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-sm text-black">
                WhatsApp Number
              </FormLabel>
            </div>

            <FormMessage />

            <FormControl className="mt-2">
              <div className="border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex gap-1 items-center">
                <span className="font-roboto font-normal text-base text-black opacity-70 pr-2 border-r border-r-black/60">
                  +234
                </span>
                <input
                  placeholder="8011112222"
                  {...field}
                  className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
                <WhatsappCircleIcon />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <Button
        type="button"
        className="mt-8  justify-self-stretch rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12"
        onClick={onSaveClick}
      >
        {isUpdating && <LoadingSpinner />}
        {isUpdating && "Saving"}
        {!isUpdating && "Save & Continue"}
      </Button>

      <span className="mt-10 font-roboto text-sm font-medium text-black text-center italic opacity-60">
        Service only available in Nigeria
      </span>
    </div>
  );
}
