import React from "react";
import ContactUsForm from "./contact_us_form";
import Image from "next/image";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <main className="w-full">
      <div className="px-4 py-6 md:px-0 md:py-0">
        <h1 className="font-poppins font-semibold text-xl text-black uppercase text-center">
          CONTACT US
        </h1>
        <p className="text-center font-roboto text-base leading-6 tracking-[0.16px] text-black font-medium mt-2">
          We will love to hear from you to improve on what we do
        </p>
      </div>

      <div className="px-4 md:px-0 bg-white">
        {/* <div className="flex flex-col items-center">
          <Image
            src={"/images/logo3.png"}
            width={131}
            height={112}
            alt="logo"
            className="mt-12"
          />
        </div> */}

        <ContactUsForm className="mt-6" />
      </div>
    </main>
  );
}
