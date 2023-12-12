"use client";

import React from "react";
import { CityType, UserDetailsType } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { KeyboardBackspaceIcon, CloseIcon, CancelIcon } from "../icons";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import ResponseFormOne from "./response_form_one";
import { cn } from "@/lib/utils";
import ResponseFormTwo from "./response_form_two";
import { DialogProps } from "@radix-ui/react-dialog";
import { getUserDetailsAction, postResponseAction } from "@/actions";
import LoadingSpinner from "../load_spinner";
import ResponseFormWhatsapp from "./response_form_whatsapp";

interface ResponseFormProps extends React.HTMLAttributes<DialogProps> {
  requestid: string;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  user: UserDetailsType["data"] | null;
}

// const responseFormWhatsappSchema

const responseFormSchema = z.object({
  whatsapp_num: z
    .string()
    .length(10, { message: "Whatsapp number number be 10 digits" }),
  title: z.string().min(1, { message: "Please select a response" }),
  location: z.string().min(1, { message: "Please select a location" }),
  description: z.string().optional(),
  visibility: z.enum(["public", "private"]),
});

export default function ResponseForm({
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
    console.log("posting state: ", isPosting);
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
    formdata.append("req_id", requestid);

    try {
      const res = await postResponseAction(formdata);

      if (res.isError) {
        res.errors.title &&
          form.setError("title", { message: res.errors.title[0] });
        setIsPosting(false);
        return;
      }

      console.log(res);

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
