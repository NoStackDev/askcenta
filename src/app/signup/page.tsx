import {
  LoginPageIllustrationOne,
  LoginPageIllustrationTwo,
} from "@/components/icons";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SignupPage({}: Props) {
  return (
    <main className="bg-[#FFFFFF] h-screen w-full md:grid md:grid-cols-[6fr_4fr]">
      <div className="hidden md:flex md:flex-col bg-[#4FC1E9] h-full justify-center">
        <LoginPageIllustrationTwo className="ml-[100px]" />

        <h2 className="ml-[100px] mt-[78px] max-w-[550px] font-roboto font-semibold text-[40px] text-[#010913]">
          Transform How You Access Services, Products & Connections
        </h2>
      </div>

      <div className="overflow-y-auto">
        <div className="flex justify-between items-start">
          <Image
            src="/images/logo2.png"
            height={32}
            width={142}
            alt="askcenta"
            className="ml-5 md:ml-[75px] mt-8"
          />

          <LoginPageIllustrationOne />
        </div>
      </div>
    </main>
  );
}
