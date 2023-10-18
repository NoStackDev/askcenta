"use client";

import React from "react";
import { CityType } from "../../../types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { KeyboardBackspaceIcon } from "../icons";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import CloseIcon from "../icons/close_icon";
import ResponseFormOne from "./response_form_one";
import { cn } from "@/lib/utils";
import ResponseFormTwo from "./response_form_two";
import { DialogProps } from "@radix-ui/react-dialog";

interface ResponseFormProps extends React.HTMLAttributes<DialogProps> {
  requestid: string;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

const responseFormSchema = z.object({
  title: z.string().min(1, { message: "Please select a response" }),
  location: z.string().min(1, { message: "Please select a location" }),
  description: z
    .string()
    .max(120, { message: "Description cannot be more than 120 characters" })
    .optional(),
  anonymous: z.enum(["true", "false"]),
});

export default function ResponseForm({
  className,
  children,
  citiesdata,
  statesdata,
  requestid,
  ...props
}: ResponseFormProps) {
  const [formStep, setFormStep] = React.useState(0);
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedResponse, setSelectedResponse] = React.useState<string | null>(
    null
  );

  function onSubmit(values: z.infer<typeof responseFormSchema>) {
    if (formStep === 0) setFormStep(formStep + 1);
    console.log("on submit: ", values);
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
      title: "",
      location: "",
      description: "",
      anonymous: "false",
    },
  });

  return (
    <Dialog onOpenChange={(open) => !open && clearForm()}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-20 md:pb-10">
          <div className="flex justify-between items-center">
            <h2 className="font-poppins font-semibold text-base text-[#011B39]">
              RESPOND TO THIS REQUEST
            </h2>

            <DialogClose>
              <Button>
                <CloseIcon />
              </Button>
            </DialogClose>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 h-full flex flex-col justify-between overflow-y-auto"
            >
              <div className="relative overflow-x-clip overflow-y-auto h-full">
                <ResponseFormOne
                  form={form}
                  selectedresponse={selectedResponse}
                  setselectedresponse={setSelectedResponse}
                  className={cn(
                    "h-fit w-full absolute transition-all animate-dialogFirstContentShow",
                    formStep !== 0 && "hidden"
                  )}
                />
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
                      Send Response
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
