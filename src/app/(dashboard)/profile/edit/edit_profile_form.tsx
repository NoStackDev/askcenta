"use client";

import {
  FacebookIcon,
  InstagramCircleIcon,
  KeyboardBackspaceIcon,
  PersonFillIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LocationModal } from "@/components/modal";
import TwitterXIcon from "@/components/icons/twitter_x_icon";
import { CityType } from "../@/types";

const editProfileFormSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  // .max(32, { message: "Username cannot be more than 32 characters" }),
  bio: z
    .string()
    .max(300, { message: "Bio cannot be more than 300 characters" })
    .optional(),
  businessPhoneNum: z
    .string()
    .length(11, { message: "Phone number must be 11 numbers." }),
  // .startsWith("0", { message: "Phone number must start with 08 or 09" }),
  businessAddress: z.string().optional(),
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

type Props = {
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
};

export default function EditProfileForm({ citiesdata, statesdata }: Props) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
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
      businessAddress: "",
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

        <Card variant="settings" className="py-0">
          {/* name  */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Name
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl>
                  <input
                    placeholder="User Name"
                    {...field}
                    className="mt-2 w-full p-3 bg-[#F7F9FF] border border-[#D9D9D9] rounded-xl font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:text-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* bio  */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="mt-6">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Bio
                  </FormLabel>

                  <span className="font-roboto font-normal text-xs text-black opacity-60">
                    300 chars max
                  </span>
                </div>

                <FormMessage />
                <FormControl>
                  <textarea
                    placeholder="Briefly describe what you do"
                    {...field}
                    className="mt-2 w-full p-3 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                    rows={4}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </Card>

        {/* Business info  */}
        <Card variant="settings" className="mt-4">
          <h3 className="font-poppins font-medium text-base text-black opacity-70">
            Business Info
          </h3>

          {/* business phone number  */}
          <FormField
            control={form.control}
            name="businessPhoneNum"
            render={({ field }) => (
              <FormItem className="mt-6">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Business Phone
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl>
                  <input
                    {...field}
                    className="mt-2 w-full p-3 bg-[#F7F9FF] border border-[#D9D9D9] rounded-xl font-roboto font-normal text-base text-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* business address  */}
          <FormField
            control={form.control}
            name="businessAddress"
            render={({ field }) => (
              <FormItem className="mt-6">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Business Address
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl>
                  <textarea
                    placeholder="Enter address"
                    {...field}
                    className="mt-2 w-full p-3 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                    rows={2}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* location  */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mt-6">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Location
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl>
                  <input
                    type="text"
                    className="hidden"
                    {...field}
                    name="location"
                  />
                </FormControl>
                <LocationModal
                  citiesdata={citiesdata}
                  statesdata={statesdata}
                  selectedCity={selectedCity}
                  selectedState={selectedState}
                  setSelectedCity={setSelectedCity}
                  setSelectedState={setSelectedState}
                >
                  <Button
                    className={cn(
                      "mt-2 p-3 font-roboto font-normal text-base text-black justify-start w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
                      selectedCity && "opacity-80"
                    )}
                  >
                    {selectedCity ? selectedCity.city : "Select City"}
                  </Button>
                </LocationModal>
              </FormItem>
            )}
          />
        </Card>

        {/* social media links  */}
        <Card variant="settings" className="mt-6">
          <h3 className="font-poppins font-medium text-base text-black opacity-70">
            Social Media Links
          </h3>

          {/* facebook link  */}
          <FormField
            control={form.control}
            name="facebookLink"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormMessage />
                <FormControl>
                  <div className="flex items-center gap-2 bg-[#F7F9FF] p-4 py-2 border border-[#D9D9D9] rounded-xl">
                    <FacebookIcon className="" />
                    <input
                      {...field}
                      placeholder="Copy your link from facebook and paste here"
                      className="w-full p-1 bg-[#F7F9FF] font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:text-black placeholder:opacity-70"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* instagram link  */}
          <FormField
            control={form.control}
            name="instagramLink"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormMessage />
                <FormControl>
                  <div className="flex items-center gap-2 bg-[#F7F9FF] p-4 py-2 border border-[#D9D9D9] rounded-xl">
                    <InstagramCircleIcon className="" />
                    <input
                      {...field}
                      placeholder="Copy your link from instagram and paste here"
                      className="w-full p-1 bg-[#F7F9FF] font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:text-black placeholder:opacity-70"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* twitter link  */}
          <FormField
            control={form.control}
            name="twitterLink"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormMessage />
                <FormControl>
                  <div className="flex items-center gap-2 bg-[#F7F9FF] p-4 py-2 border border-[#D9D9D9] rounded-xl">
                    <TwitterXIcon className="" />
                    <input
                      {...field}
                      placeholder="Copy your link from Twitter(X) and paste here"
                      className="w-full p-1 bg-[#F7F9FF] font-roboto font-normal text-base text-black placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:text-black placeholder:opacity-70"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </Card>
      </form>
    </Form>
  );
}
