"use client";

import {
  AddPhotoFillIcon,
  KeyboardBackspaceIcon,
  PersonFillIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const editProfileFormSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  // .max(32, { message: "Username cannot be more than 32 characters" }),
  bio: z
    .string()
    // .max(32, { message: "Bio cannot be more than 300 characters" })
    .optional(),
  businessPhoneNum: z.string(),
  // .length(11, { message: "Phone number must be 11 numbers." })
  // .startsWith("0", { message: "Phone number must start with 08 or 09" }),
  location: z.string().min(1, { message: "Please select a location" }),
  facebookLink: z
    .string()
    // .min(1, { message: "Please input a valid facebook link" })
    .optional(),
  instagramLink: z
    .string()
    // .min(1, { message: "Please input a valid instagram link" })
    .optional(),
  twitterLink: z
    .string()
    // .min(1, { message: "Please input a valid twitter link" })
    .optional(),
});

type Props = {};

export default function EditProfileForm({}: Props) {
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);

  const onChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (imageInputRef.current) {
      imageInputRef.current.files = e.target.files;
    }

    if (e.target.files) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      //   setimage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const form = useForm<z.infer<typeof editProfileFormSchema>>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      username: "",
      bio: "",
      businessPhoneNum: "",
      location: "",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
  });

  function onSubmit(values: z.infer<typeof editProfileFormSchema>) {
    console.log("on submit: ", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* topbar  */}
        <Card variant="settings" className="py-4 flex flex-col">
          <Link href="/profile" className="w-fit h-fit">
            <KeyboardBackspaceIcon />
          </Link>

          <div className="mt-5 flex items-center justify-between">
            <h2 className="font-poppins font-semibold text-base text-[#4C4B60]">
              EDIT PROFILE
            </h2>

            <Button className="rounded-2xl bg-[#EFEEF8] px-3 py-2 font-roboto font-medium text-sm text-[#6356E5]">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* image  */}
        <Card variant="settings" className="mt-2 py-6">
          <FormItem className="flex flex-col items-center">
            <FormControl>
              <input
                type="file"
                ref={imageInputRef}
                className="hidden"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => onChangePicture(e)}
              />
            </FormControl>

            <h3 className="font-roboto font-medium text-sm text-black">
              Profile Photo
            </h3>

            <Button
              className={cn(
                "mt-3 border border-[#9B91FD] rounded-full p-[9.6px] w-[72px] h-[72px] overflow-clip",
                imagePreview && "p-0"
              )}
              onClick={() => {
                if (imageInputRef.current) {
                  imageInputRef.current.click();
                }
              }}
            >
              {!imagePreview && <PersonFillIcon />}
              {imagePreview && (
                <Image
                  width={72}
                  height={72}
                  src={imagePreview}
                  alt="profile"
                  className="w-[72px] h-auto bg-cover bg-center"
                />
              )}
            </Button>
          </FormItem>
        </Card>
      </form>
    </Form>
  );
}
