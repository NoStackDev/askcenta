import React from "react";
import ContactUsForm from "./contact_us_form";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <main className="w-full max-w-[651px] mx-auto md:mt-10  md:rounded-[20px]">
      <div className="px-4 py-6 md:px-0 md:py-0">
        <h1 className="font-poppins font-semibold text-xl text-black uppercase text-center">
          CONTACT US
        </h1>
        <p className="text-center font-roboto text-base leading-6 tracking-[0.16px] text-black font-medium mt-2">
          We will love to hear from you to improve on what we do
        </p>
      </div>

      <div className="px-4 md:px-0 bg-white md:mt-6 md:rounded-[20px] mb-20">
        <ContactUsForm className="md:py-16 md:pb-0 md:px-32 md:rounded-[20px]" />
      </div>
    </main>
  );
}
