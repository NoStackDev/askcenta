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
import { CityType, UserDetailsType } from "@/types";
import { LocationModal } from "@/components/modal";
import TwitterXIcon from "@/components/icons/twitter_x_icon";
import { updateUserDetailsAction } from "@/actions";
import LoadingSpinner from "@/components/load_spinner";

const editProfileFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." }),
  // .max(32, { message: "Username cannot be more than 32 characters" }),
  about: z
    .string()
    .max(300, { message: "Bio cannot be more than 300 characters" })
    .optional(),
  business_num: z
    .string()
    // .length(11, { message: "Phone number must be 11 numbers." })
    .optional(),
  // .startsWith("0", { message: "Phone number must start with 08 or 09" }),
  business_addr: z.string().optional(),
  location: z.string().optional(),
  facebook_link: z
    .string()
    // .min(1, { message: "Please input a valid facebook link" })
    .optional(),
  instagram_link: z
    .string()
    // .min(1, { message: "Please input a valid instagram link" })
    .optional(),
  twitter_link: z
    .string()
    // .min(1, { message: "Please input a valid twitter link" })
    .optional(),
});

type Props = {
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  userDetails: UserDetailsType;
};

export default function EditProfileForm({
  citiesdata,
  statesdata,
  userDetails,
}: Props) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [image, setImage] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    async function handleCity() {
      setSelectedCity(
        citiesdata.find((city) => city.city === userDetails.data.location) ||
          null
      );
    }

    userDetails.data.location.length > 0 && handleCity();

    form.setValue("name", userDetails.data.name);
    if (userDetails.data.about) {
      form.setValue("about", userDetails.data.about);
    }
    if (userDetails.data.business_num) {
      form.setValue("business_num", userDetails.data.business_num);
    }
    if (userDetails.data.business_addr) {
      form.setValue("business_addr", userDetails.data.business_addr);
    }
    if (userDetails.data.facebook_link) {
      form.setValue("facebook_link", userDetails.data.facebook_link);
    }
    if (userDetails.data.instagram_link) {
      form.setValue("instagram_link", userDetails.data.instagram_link);
    }
  }, []);

  React.useEffect(() => {
    if (selectedCity) {
      form.clearErrors("location");
      form.setValue("location", selectedCity.id.toString());
    }
  }, [selectedCity]);

  const onChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (imageInputRef.current) {
      imageInputRef.current.files = e.target.files;
    }

    if (e.target.files) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const form = useForm<z.infer<typeof editProfileFormSchema>>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      name: "",
      // about: "",
      // business_num: "",
      // business_addr: "",
      // location: "",
      // facebook_link: "",
      // instagram_link: "",
      // twitter_link: "",
    },
  });

  async function onSubmit(values: z.infer<typeof editProfileFormSchema>) {
    setSaving(true);

    const formdata = new FormData();

    values.about && formdata.append("about", values.about);
    values.business_num && formdata.append("business_num", values.business_num);
    values.business_addr &&
      formdata.append("business_addr", values.business_addr);
    values.location && formdata.append("location_id", values.location);
    values.facebook_link &&
      formdata.append("facebook_link", values.facebook_link);
    values.instagram_link &&
      formdata.append("instagram_link", values.instagram_link);
    image && formdata.append("profile_img", image, values.name);

    try {
      const res = await updateUserDetailsAction(formdata);

      setSaving(false);
    } catch (err) {
      console.log(err);

      setSaving(false);
    }
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
              {saving && <LoadingSpinner />}
              {saving && "Saving Changes"}
              {!saving && "Save Changes"}
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
                  className="h-full w-auto rounded-full object-cover"
                />
              )}
            </Button>
          </FormItem>
        </Card>

        <Card variant="settings" className="py-0">
          {/* name  */}
          <FormField
            control={form.control}
            name="name"
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
                    disabled
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
            name="about"
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
            name="business_num"
            render={({ field }) => (
              <FormItem className="mt-6">
                <div className="flex justify-between items-center">
                  <FormLabel className="font-roboto font-medium text-sm text-black">
                    Business Phone
                  </FormLabel>
                </div>

                <FormMessage />
                <FormControl>
                  {/* <input
                    {...field}
                    className="mt-2 w-full p-3 bg-[#F7F9FF] border border-[#D9D9D9] rounded-xl font-roboto font-normal text-base text-black"
                  /> */}
                  <div className="mt-2 border border-[#D9D9D9] h-12 bg-[#F7F9FF] rounded-xl py-2 px-3 flex items-center">
                    <span className="font-roboto font-normal text-base text-black opacity-70 pr-2 border-r border-r-black/60">
                      +234
                    </span>
                    <input
                      placeholder="8011112222"
                      {...field}
                      className="pl-2 w-full font-roboto font-normal text-base bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* business address  */}
          <FormField
            control={form.control}
            name="business_addr"
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
            name="facebook_link"
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
            name="instagram_link"
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
            name="twitter_link"
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
