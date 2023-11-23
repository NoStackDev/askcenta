import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const responsePresets = [
  ["I have It!", "Chat me up"],
  ["I am interested!", "let’s chat"],
  ["I can do it!", "let’s have a chat"],
  ["I can assist"!, "hit me up for a chat"],
  ["I have something similar!", "let’s chat"],
  ["I have a suggestion!", "chat me up"],
];

interface ResponseFormOneProps extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      title: string;
      location: string;
      visibility: "public" | "private";
      description?: string | undefined;
    },
    any,
    undefined
  >;
  selectedresponse: string | null;
  setselectedresponse: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ResponseFormOne({
  className,
  form,
  selectedresponse,
  setselectedresponse,
  ...props
}: ResponseFormOneProps) {
  return (
    <div className={cn("", className)}>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Select Your Response
              </FormLabel>
            </div>

            <FormMessage />
            <FormControl>
              <input type="text" {...field} name="title" className="hidden" />
            </FormControl>

            <div className="mt-4 w-full flex flex-col gap-3">
              {responsePresets.map((responsePreset) => {
                return (
                  <Button
                    className={cn(
                      "w-full border border-[#D9D9D9] rounded-[20px] bg-[#F7F9FF] px-4 py-2",
                      selectedresponse ===
                        responsePreset[0] + "  " + responsePreset[1] &&
                        "bg-[#4FC1E9]"
                    )}
                    key={responsePreset[0]}
                    onClick={() =>
                      setselectedresponse(
                        responsePreset[0] + "  " + responsePreset[1]
                      )
                    }
                  >
                    <div
                      className={cn(
                        "w-full text-center font-roboto font-medium text-base text-black",
                        selectedresponse ===
                          responsePreset[0] + "  " + responsePreset[1] &&
                          "text-white"
                      )}
                    >
                      {responsePreset[0] + "  "}{" "}
                      <span className="opacity-50">{responsePreset[1]}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </FormItem>
        )}
      />

      {/* description  */}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="mt-8 pb-5">
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Add Comment{" "}
                <span className="font-roboto font-normal text-base text-black opacity-70">
                  (Optional)
                </span>
              </FormLabel>
            </div>

            <FormMessage />
            <FormControl>
              <textarea
                placeholder="Write here..."
                {...field}
                className="w-full mt-2 p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-lg opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-lg placeholder:opacity-50 placeholder:text-black"
                rows={4}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
