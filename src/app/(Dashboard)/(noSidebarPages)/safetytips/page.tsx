import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SafetyTipsPage({}: Props) {
  return (
    <main
      className={cn(
        "bg-white sm:mx-[40px] lg:mx-[100px] 2xl:mx-auto max-w-7xl mt-2 sm:px-6 py-8 text-justify"
      )}
    >
      <h1 className="font-poppins font-semibold text-xl sm:text-2xl md:text-[28px] sm:mt-4 md:mt-10 text-black uppercase text-center">
        safety tips
      </h1>

      <p className="mt-2 sm:mt-4 md:mt-14 px-4 sm:px-6 md:px-14 lg:px-[120px] font-roboto text-lg leading-[29px] text-black">
        As we try to foster a secure community that will be free of scam and
        abuse on our end, we urge you to keep an open eye by adopting these
        safety tips while dealing with people you meet on this platform or
        similar ones.
      </p>

      <div className="mt-5 sm:mt-6 md:mt-8 md:px-14 lg:px-[120px]">
        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Protect your personal information
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            Be cautious about sharing sensitive personal information, such as
            your full name, address, phone number, or financial details, with
            other users. Only share such information in trusted and secure
            environments.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Verify users and offers
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            Before entering into any transactions or agreements with other
            users, take the time to verify their identity and credibility.
            Review their profiles, ratings, and reviews if available. If
            possible, view their profile on their social media handles through
            the link on their profile.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Meet in safe locations:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            If you plan to meet another user in person, always choose safe and
            public locations. Consider meeting during daylight hours and bring a
            friend or family member with you if possible. Trust your instincts
            and avoid situations that feel uncomfortable or unsafe.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Exercise caution with financial transactions:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            If financial transactions are involved, be cautious and use secure
            payment methods or get a receipt for cash payments. Avoid sharing
            sensitive financial information directly with other users unless it
            is necessary and done through secure channels.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Report inappropriate or suspicious activity:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            If you encounter any inappropriate, fraudulent, or suspicious
            activity on the platform, report it immediately to the platform&apos;s
            support team. This helps maintain a safe and reliable community for
            all users.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Be respectful and professional:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            Maintain a respectful and professional tone in your interactions
            with other users. Treat others as you would like to be treated and
            avoid engaging in offensive, discriminatory, or harassing behavior.
          </p>
        </div>

        <div className="w-full border-b-8 border-b-[#E9EEFE] pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Trust your instincts:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            Trust your instincts when engaging with others on the platform. If
            something feels suspicious, too good to be true, or makes you
            uncomfortable, proceed with caution or refrain from engaging
            further.
          </p>
        </div>

        <div className="w-full pb-4 mt-4">
          <p className="font-poppins text-lg font-medium text-[#05A0D7] px-4 sm:px-6 md:px-0">
            Opt for close proximity deals when possible:
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            To promote secure interactions, we encourage users to prioritize
            dealing with users who are closest to them in terms of proximity. By
            selecting users in close proximity, you can benefit from convenient
            face-to-face meetings, reduced delivery times, and increased
            familiarity with local service providers.
          </p>
          <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-4">
            If you have any questions, concerns, or need assistance, please
            contact our support team at{" "}
            <Link className="text-[#6356E5]" href="mailto:support@askcenta.com">
              support@askcenta.com
            </Link>{" "}
            We are here to help!
          </p>
        </div>
      </div>
    </main>
  );
}
