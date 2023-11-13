"use client";

import { resendOtp } from "@/api/user";
import LoadingSpinner from "@/components/load_spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useUserAuthContext } from "@/context/use_auth_context";
import useCountdown from "@/hooks/useCountDown";
import useVerificationHook from "@/hooks/useVerificationHook";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ResendOtpType } from "@/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  verificationForm: UseFormReturn<
    {
      verificationCode: string;
    },
    any,
    undefined
  >;
  whatsappNum: string;
}

export default function PhoneVerficationForm({
  className,
  verificationForm,
  whatsappNum,
  ...props
}: Props) {
  const { authState, setAuthState } = useUserAuthContext();
  const { countDownState, setCountDownState, countDownValues } =
    useCountdown(300000);
  const [prevAuthState, setPrevAuthState] = React.useState<
    | "logging in"
    | "signing up"
    | "verifying"
    | "onboarding"
    | "login"
    | "signup"
    | "verify"
    | "onboard"
    | null
  >(null);

  const {
    verificationCode,
    inputStates,
    verificationInputClassName,
    handleChange: onInputChange,
  } = useVerificationHook(4);

  React.useEffect(() => {
    setPrevAuthState(authState);

    if (prevAuthState === "signing up" && authState === "verify") {
      setCountDownState("restart");
    }
  }, [authState]);

  React.useEffect(() => {
    if (verificationCode?.length === 4) {
      verificationForm.setValue("verificationCode", verificationCode);
    }
  }, [verificationCode]);

  async function onResend() {
    const otpPromise: Promise<ResendOtpType> = resendOtp(whatsappNum);
    const otpRes = await otpPromise;
    if (otpRes.success === true) {
      setCountDownState("restart");
    }
  }

  return (
    <>
      <h1 className="font-poppins font-bold text-2xl text-black">
        Verify Phone
      </h1>
      <p className="font-roboto font-normal text-base text-[#48466D] mt-4">
        Please enter the verification code for registration we sent to your
        mobile <span className="text-black">+234{whatsappNum}</span>
      </p>

      <div className="mt-10 flex flex-col justify-between overflow-y-auto">
        {/* verification code  */}
        <FormField
          control={verificationForm.control}
          name="verificationCode"
          render={({ field }) => (
            <FormItem className="">
              <FormMessage />
              <FormControl className="mt-2">
                <input
                  {...field}
                  className="hidden pl-2 w-full font-roboto font-normal text-base border border-[#D9D9D9] rounded-xl h-12 bg-[#F7F9FF] text-black placeholder:font-roboto placeholder:font-normal placeholder:text-base placeholder:opacity-60 placeholder:text-black"
                />
              </FormControl>
              <div className="grid grid-cols-4 first:rounded-l-xl last:rounded-r-xl">
                {inputStates.map((state, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      value={state.inputValue}
                      placeholder="-"
                      onChange={(e) => onInputChange(e, index)}
                      className={cn(
                        "font-roboto font-normal text-base border border-[#D9D9D9] h-12 bg-[#F7F9FF] text-black text-center w-full placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-black placeholder:text-center",
                        verificationInputClassName,
                        index === 0 && "rounded-l-xl",
                        index === 3 && "rounded-r-xl"
                      )}
                    />
                  );
                })}
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 mt-8 md:mt-14"
        >
          {authState === "verifying" ? (
            <div className="flex items-start justify-center gap-3">
              <LoadingSpinner />
              <span>Verifying</span>
            </div>
          ) : (
            "Verify"
          )}
        </Button>

        {countDownState === "ongoing" && (
          <div className="flex items-center justify-center mt-10">
            <span className="font-roboto font-normal text-base text-[#6356E5]">
              {countDownValues.minutes}:{countDownValues.seconds}
            </span>
          </div>
        )}

        {countDownState === "completed" && (
          <div className="flex items-center justify-center mt-10 gap-2">
            <Button
              type="button"
              className="font-roboto font-semibold text-base text-[#6356E5]"
              onClick={onResend}
            >
              Resend Code
            </Button>
          </div>
        )}

        <div className="flex items-center justify-center mt-10 gap-2">
          <Button
            type="button"
            onClick={() => {
              setAuthState("signup");
            }}
            className="font-roboto font-semibold text-base text-black"
          >
            BACK
          </Button>
        </div>
      </div>
    </>
  );
}
