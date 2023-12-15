import React from "react";
import ContactUsForm from "./contact_us_form";
import Image from "next/image";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <main className="full">
      <div className="px-4 py-6 md:px-0 md:py-0">
        <h1 className="font-poppins font-semibold text-base text-black">
          CONTACT US
        </h1>
      </div>

      <div className="px-4 md:px-0 bg-white">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/logo3.png"}
            width={131}
            height={112}
            alt="logo"
            className="mt-12"
          />
        </div>

        <ContactUsForm className="mt-[30px]" />
      </div>
    </main>
  );
}
