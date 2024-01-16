"use client";

import React from "react";

import { updateUserDetailsAction } from "@/actions";
import { CityType, UserDetailsType } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/load_spinner";
import { DialogClose } from "@/components/ui/dialog";
import { CancelIcon, WhatsappCircleIcon } from "@/components/icons";

const WhatsappNumFormSchema = z.object({
  whatsapp_num: z
    .string()
    .length(10, { message: "Whatsapp number be 10 digits" })
    .refine(
      (e) => !isNaN(Number(e)),
      "Whatsapp number can only contain digits"
    ),
});

interface WhatsappNumFormProps extends React.HTMLAttributes<typeof Form> {
  userDetails: UserDetailsType;
  citiesData: CityType[];
}

export default function WhatsappNumForm({
  className,
  userDetails,
  citiesData,
  ...props
}: WhatsappNumFormProps) {
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [prevWhatsappNum, setPrevWhatsappNum] = React.useState<string | null>(
    userDetails.data.whatsapp_num
      ? userDetails.data.whatsapp_num.slice(3)
      : null
  );
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof WhatsappNumFormSchema>>({
    resolver: zodResolver(WhatsappNumFormSchema),
    defaultValues: {
      whatsapp_num: "",
    },
  });

  React.useEffect(() => {
    if (userDetails.data.whatsapp_num) {
      form.setValue("whatsapp_num", userDetails.data.whatsapp_num.slice(3));
    }
  }, []);

  async function onSubmit() {
    if (
      form.getValues("whatsapp_num").length === 10 &&
      form.getValues("whatsapp_num") === prevWhatsappNum
    ) {
      if (closeButtonRef.current) {
        closeButtonRef.current.click();
        return;
      }
    }

    setIsUpdating(true);
    if (form.getValues("whatsapp_num").length !== 10) {
      form.trigger("whatsapp_num");
      setIsUpdating(false);
      return;
    }

    if (form.getValues("whatsapp_num").length === 10) {
      try {
        const formData = new FormData();

        formData.append("whatsapp_num", 234 + form.getValues("whatsapp_num"));
        const res: any = await updateUserDetailsAction(formData);

        if (res.isError && res.errors.whatsapp_num) {
          form.setError("whatsapp_num", {
            message: res.errors.whatsapp_num[0],
          });
          setIsUpdating(false);
          return;
        } else {
          if (closeButtonRef.current) {
            closeButtonRef.current.click();
            return;
          }
          setIsUpdating(false);
        }
      } catch (err: any) {
        console.log(err);
        if (err.errors && err.errors.whatsapp_num) {
          form.setError("whatsapp_num", {
            message: err.errors.whatsapp_num[0],
          });
        }
        setIsUpdating(false);
      }
    }
  }
  return (
    <Form {...form}>
      <div className="px-4 mt-11 flex justify-between items-center">
        <h2 className="font-poppins font-semibold text-xl text-black uppercase">
          Setup contact Detail
        </h2>
        <DialogClose>
          <Button ref={closeButtonRef}>
            <CancelIcon />
          </Button>
        </DialogClose>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-4 md:px-6 mt-10 h-full flex flex-col justify-between overflow-y-auto"
      >
        <div className={cn("flex flex-col", className)}>
          <div className="flex flex-col gap-4 items-start text-justify">
            <h3 className="font-roboto text-lg font-medium text-[#4FC1E9] leading-[23px]">
              Via WhatsApp Messenger
            </h3>
            <p className="font-roboto text-base font-normal text-[#262525] leading-[23px]">
              Kindly add your WhatsApp number. This allows interested users to
              easily contact you. Rest assured, your number will only be visible
              to those you choose to connect with, ensuring your privacy.
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

          <Button className="mt-8  justify-self-stretch rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12">
            {isUpdating && <LoadingSpinner />}
            {isUpdating && "Saving"}
            {!isUpdating && "Save"}
          </Button>

          <span className="mt-10 font-roboto text-sm font-medium text-black text-center italic opacity-60">
            Service only available in Nigeria
          </span>
        </div>
      </form>
    </Form>
  );
}
