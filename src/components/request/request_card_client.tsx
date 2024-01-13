"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  CommentIcon,
  LocationOnIcon,
  ScheduleIcon,
  StarFilledIcon,
  StarIcon,
} from "../icons";
import { cn, month } from "@/lib/utils";
import CardTitleDynamic from "./card_title_dynamic";
import Link from "next/link";
import { CityType, StateResponseType, UserDetailsType } from "@/types";
import { Button } from "../ui/button";
import { addBookmarkAction } from "@/actions";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { KeyboardBackspaceIcon, CancelIcon } from "../icons";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { DialogProps } from "@radix-ui/react-dialog";
import { postResponseAction } from "@/actions";
import LoadingSpinner from "../load_spinner";
import ResponseFormOne from "../response/response_form_one";
import ResponseFormWhatsapp from "../response/response_form_whatsapp";
import ResponseFormTwo from "../response/response_form_two";

interface RequestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  requestData: {
    category: string;
    created_at: string;
    title: string;
    id: number;
    image_url: string | null;
    location: string;
    user: string;
    user_id: number;
    num_of_responses: number;
    bookmark: boolean;
  };
  user: UserDetailsType["data"] | null;
  cities: CityType[];
  states: StateResponseType["data"];
}

export default function RequestCardClient({
  className,
  requestData,
  user,
  cities,
  states,
  ...props
}: RequestCardProps) {
  const [bookmarked, setBookmarked] = React.useState(requestData.bookmark);

  const date = new Date(requestData.created_at);

  React.useEffect(() => {
    if (requestData.bookmark) {
      setBookmarked(true);
    }
  }, []);

  async function onSaveClick() {
    setBookmarked(!bookmarked);
    try {
      const res = await addBookmarkAction(requestData.id.toString());
    } catch (err) {
      setBookmarked(!bookmarked);
      console.log(err);
    }
  }

  return (
    <Card
      variant="request"
      className={cn(
        "w-full rounded-2xl break-inside-avoid mb-6 overflow-clip",
        className
      )}
    >
      <CardContent>
        {requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <Image
              width={358}
              height={344}
              alt={requestData.title}
              src={`https://${requestData.image_url}`}
              className="w-full max-h-[344px] object-cover"
            />
          </Link>
        )}

        {requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <CardTitle
              className={cn(
                "px-3 py-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px] h-[100px] flex items-center justify-center"
              )}
            >
              {requestData.title.length > 78
                ? requestData.title.slice(0, 78).trim() + "..."
                : requestData.title}
            </CardTitle>
          </Link>
        )}

        {!requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <CardTitleDynamic
              className={cn(
                "px-3 pt-[9px] pb-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px]",
                `min-h-[223px] flex items-center justify-center py-6 text-[22px] leading-[35px] no-img-request-card`
              )}
            >
              {/* {requestData.title.length > 78
                ? requestData.title.slice(0, 78).trim() + "..."
                : requestData.title} */}
              {requestData.title}
            </CardTitleDynamic>
          </Link>
        )}

        <hr
          className="border-t border-[#EDECF0] border-r-4 bg-none"
          role="separator"
        />

        <div className="w-full px-3 pt-4 pb-5 flex flex-col gap-4">
          <div className={cn("flex justify-between items-center")}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <CommentIcon />
                <span className="font-roboto font-normal text-sm text-black">
                  {requestData.num_of_responses}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <ScheduleIcon aria-label="date" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {date.getDate()} {month(date.getMonth())}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <LocationOnIcon aria-label="locaion" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {requestData.location}
                </span>
              </div>
            </div>

            {user && user.id.toString() !== requestData.user_id.toString() && (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSaveClick();
                }}
                aria-label="bookmark"
                className="hover:scale-105 hover:shadow-sm"
              >
                {!bookmarked && (
                  <StarFilledIcon className="hover:cursor-pointer" />
                )}
                {bookmarked && (
                  <StarIcon
                    className="hover:cursor-pointer"
                    width={"32"}
                    height={"32"}
                  />
                )}
              </Button>
            )}

            {!user && (
              <Link href={"/login"}>
                <StarFilledIcon className="hover:cursor-pointer" />
              </Link>
            )}
          </div>

          {user &&
            user.id.toString() !== requestData.user_id.toString() &&
            requestData.num_of_responses < 5 && (
              <>
                <ResponseFormClient
                  user={user}
                  citiesdata={cities}
                  statesdata={states}
                  requestid={requestData.id.toString()}
                >
                  <Button
                    variant="request_card_outlined"
                    className={cn(
                      "hover:cursor-pointer font-roboto font-normal text-sm",
                      className
                    )}
                  >
                    Respond to Request
                  </Button>
                </ResponseFormClient>
              </>
            )}

          {!user && (
            <Link href={"/login"}>
              <Button
                variant="request_card_outlined"
                className={cn(
                  "hover:cursor-pointer font-roboto font-normal text-sm",
                  className
                )}
              >
                Respond to Request
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface ResponseFormProps extends React.HTMLAttributes<DialogProps> {
  requestid: string;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  user: UserDetailsType["data"] | null;
}

const responseFormSchema = z.object({
  whatsapp_num: z
    .string()
    .length(10, { message: "Whatsapp number number be 10 digits" }),
  title: z.string().min(1, { message: "Please select a response" }),
  location: z.string().min(1, { message: "Please select a location" }),
  description: z.string().optional(),
  visibility: z.enum(["public", "private"]),
});

function ResponseFormClient({
  className,
  children,
  citiesdata,
  statesdata,
  requestid,
  user,
  ...props
}: ResponseFormProps) {
  const [whatsappNum, setWhatsappNum] = React.useState<string | null>(null);
  const [formStep, setFormStep] = React.useState(0);
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedResponse, setSelectedResponse] = React.useState<string | null>(
    null
  );
  const [isPosting, setIsPosting] = React.useState(false);

  async function onSubmit(values: z.infer<typeof responseFormSchema>) {
    if (isPosting) return;

    if (formStep === 0) {
      setFormStep(formStep + 1);
      return;
    }

    setIsPosting(true);
    const formdata = new FormData();
    whatsappNum && formdata.append("whatsapp_num", whatsappNum);
    formdata.append("title", values.title);
    formdata.append("visibility", values.visibility);
    formdata.append("location_id", values.location);
    values.description && formdata.append("description", values.description);
    formdata.append("req_id", requestid);

    try {
      const res = await postResponseAction(formdata);

      if (res.isError) {
        res.errors.title &&
          form.setError("title", { message: res.errors.title[0] });
        setIsPosting(false);
        return;
      }

      window.location.reload();
      setIsPosting(false);
    } catch (err) {
      console.log(err);
      setIsPosting(false);
    }
  }

  function onBackClick() {
    setFormStep(formStep - 1);
  }

  function clearForm() {
    form.setValue("location", selectedCity?.id.toString() || "");
    form.setValue("title", "");
    form.setValue("description", "");
    setSelectedCity(null);
    setSelectedResponse(null);
    setFormStep(0);
  }

  React.useEffect(() => {
    if (user && user.whatsapp_num) {
      setWhatsappNum(user.whatsapp_num);
      form.setValue("whatsapp_num", user.whatsapp_num.slice(3));
    }
  }, []);

  React.useEffect(() => {
    form.unregister("location");
  }, []);

  React.useEffect(() => {
    form.setValue("location", selectedCity?.id.toString() || "");
    form.clearErrors("location");
    form.setValue("title", selectedResponse || "");
  }, [selectedCity, selectedResponse]);

  const form = useForm<z.infer<typeof responseFormSchema>>({
    resolver: zodResolver(responseFormSchema),
    defaultValues: {
      whatsapp_num: "",
      title: "",
      location: "",
      description: "",
      visibility: "public",
    },
  });

  return (
    <Dialog onOpenChange={(open) => !open && clearForm()}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-20 md:pb-10">
          <div className="flex justify-between items-center">
            {whatsappNum && (
              <h2 className="font-poppins font-semibold text-xl text-[#011B39] uppercase">
                RESPOND TO THIS REQUEST
              </h2>
            )}

            {!whatsappNum && (
              <h2 className="font-poppins font-semibold text-xl text-[#000000] uppercase">
                Setup contact Detail
              </h2>
            )}

            <DialogClose>
              <Button>
                <CancelIcon />
              </Button>
            </DialogClose>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 h-full flex flex-col justify-between overflow-y-auto"
            >
              <div className="relative overflow-x-clip overflow-y-auto h-full">
                {whatsappNum && (
                  <ResponseFormOne
                    form={form}
                    selectedresponse={selectedResponse}
                    setselectedresponse={setSelectedResponse}
                    className={cn(
                      "h-fit w-full absolute transition-all animate-dialogFirstContentShow",
                      formStep !== 0 && "hidden"
                    )}
                  />
                )}

                {!whatsappNum && (
                  <ResponseFormWhatsapp
                    setWhatsappNum={setWhatsappNum}
                    form={form}
                    className={cn(
                      "h-fit w-full absolute transition-all animate-dialogFirstContentShow",
                      formStep !== 0 && "hidden"
                    )}
                  />
                )}
                <ResponseFormTwo
                  form={form}
                  citiesdata={citiesdata}
                  statesdata={statesdata}
                  selectedcity={selectedCity}
                  selectedstate={selectedState}
                  setselectedcity={setSelectedCity}
                  setselectedstate={setSelectedState}
                  className={cn(
                    "h-fit w-full absolute left-full transition-all duration-150 ease-in-out",
                    formStep !== 0 && "left-0"
                  )}
                />
              </div>

              {whatsappNum && (
                <div className="w-full flex items-center justify-center pt-4">
                  {formStep === 0 && (
                    <Button
                      type="submit"
                      className="w-full rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 max-w-[358px]"
                      onClick={() => {
                        setTimeout(() => {
                          !form.control._formState.errors["title"] &&
                            setFormStep(formStep + 1);
                          form.clearErrors("location");
                        }, 0);
                      }}
                    >
                      Next
                    </Button>
                  )}

                  {formStep > 0 && (
                    <div className="w-full flex items-center justify-between pt-4">
                      <Button onClick={onBackClick}>
                        <KeyboardBackspaceIcon width="24" height="24" />
                      </Button>

                      <Button
                        type="submit"
                        className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12"
                      >
                        {isPosting && <LoadingSpinner />}
                        {isPosting && "Sending Response"}
                        {!isPosting && "Send Response"}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
