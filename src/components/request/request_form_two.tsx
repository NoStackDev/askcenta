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
import { AddPhotoFillIcon } from "../icons";
import { Button } from "../ui/button";
import Image from "next/image";

interface RequestFormTwoProps extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      title: string;
      description: string;
      category: string;
      location: string;
    },
    any,
    undefined
  >;
  setimage: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function RequestFormTwo({
  className,
  form,
  setimage,
  ...props
}: RequestFormTwoProps) {
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

  return (
    <div className={cn("", className)}>
      {/* description  */}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Additional Description{" "}
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
                className="mt-2 w-full p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-lg opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-lg placeholder:opacity-50 placeholder:text-black"
                rows={8}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* image  */}

      <FormItem className="mt-8 flex items-center gap-4">
        <FormControl>
          <input
            type="file"
            ref={imageInputRef}
            className="hidden"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => onChangePicture(e)}
          />
        </FormControl>

        <Button
          className={cn(
            "border border-[#D9D9D9] bg-[#F1F1F2] rounded-xl p-9 w-[154px] h-[154px]",
            imagePreview && "p-0"
          )}
          onClick={() => {
            if (imageInputRef.current) {
              imageInputRef.current.click();
            }
          }}
        >
          {!imagePreview && <AddPhotoFillIcon />}
          {imagePreview && (
            <Image
              width={154}
              height={154}
              src={imagePreview}
              alt={form.getValues()["title"]}
              className="w-[154px] h-auto bg-cover bg-center"
            />
          )}
        </Button>

        <div className="flex justify-between items-center">
          <FormLabel className="font-roboto font-medium text-base text-black">
            Add Image{" "}
            <span className="font-roboto font-normal text-base text-black opacity-70">
              (Optional)
            </span>
          </FormLabel>
        </div>
      </FormItem>
    </div>
  );
}
