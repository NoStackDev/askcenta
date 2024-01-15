import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <main
      className={cn(
        "bg-white sm:mx-[40px] lg:mx-[100px] 2xl:mx-auto max-w-7xl mt-2 sm:px-6 py-8 px-4 md:px-14 lg:px-[120px] text-justify"
      )}
    >
      <h1 className="font-poppins font-semibold text-xl sm:text-2xl md:text-[28px] sm:mt-4 md:mt-10 text-black uppercase text-center">
        About askcenta
      </h1>

      <p className="mt-2 sm:mt-4 md:mt-14 font-roboto text-lg leading-[29px] text-black text-justify">
        Welcome to Askcenta, where needs meet solutions seamlessly. Our platform
        is more than just a space on the web; it's a dynamic community
        connecting individuals seeking specific products, accommodation,
        services, jobs, and social connections with those ready to provide the
        perfect offer.
      </p>

      <div className="mt-8 md:mt-10">
        <h2 className="text-[#4FC1E9] font-roboto text-[32px] md:text-[40px] font-bold">
          Our Mission
        </h2>

        <p className="font-roboto text-2xl md:text-[28px] font-medium leading-[44px] text-black mt-4 md:mt-6 text-justify">
          At Askcenta, our mission is to simplify the way people find what they
          need. We understand the frustration of endless web searches and the
          challenge of connecting with the right people. That's why we've
          created a platform that puts the power back in your hands
        </p>

        <div className="font-roboto text-lg leading-[29px] text-black tracking-[0.18px] mt-8 md:mt-10">
          <h2 className="text-[#4FC1E9] font-roboto text-[32px] md:text-[40px] font-bold">
            How It Works
          </h2>

          <ul className="mt-4 md:mt-6 flex flex-col gap-8 md:gap-12">
            <li className="flex flex-col gap-2 md:gap-4">
              <p className="font-medium">1. Place a Request</p>
              <p className="text-justify">
                Have a specific need in mind? Simply place a request on Askcenta
                detailing what you're looking for. Whether it's a unique
                product, accommodation, service, job opportunity, or a new
                social connection, let the community know.
              </p>
            </li>

            <li className="flex flex-col gap-2 md:gap-4">
              <p className="font-medium">2. Connect with Relevant Offers</p>
              <p className="text-justify">
                Your request is instantly shared with our vibrant community.
                Users with relevant offers can respond, providing you with the
                offers you're seeking. This streamlined process eliminates the
                need for aimless web searches.
              </p>
            </li>

            <li className="flex flex-col gap-2 md:gap-4">
              <p className="font-medium">
                3. Take the Conversation Off-Platform
              </p>
              <p className="text-justify">
                Once you find a promising offer, connect directly with the
                interested party through the communication channel of your
                choice. For the convenience of our users, we facilitate
                connections via WhatsApp Messenger.
              </p>
            </li>
          </ul>
        </div>

        <div className="font-roboto text-lg leading-[29px] text-black tracking-[0.18px] mt-8 md:mt-10">
          <h2 className="text-[#4FC1E9] font-roboto text-[32px] md:text-[40px] font-bold">
            How It Works
          </h2>

          <p className="mt-4 md:mt-6">
            At Askcenta, we are driven by core values that guide our commitment
            to you:
          </p>

          <p className="mt-4 md:mt-6">
            <span className="font-semibold">Community:</span> We believe in the
            power of community collaboration, connecting individuals and
            fostering meaningful interactions.
          </p>

          <p className="mt-4 md:mt-6">
            <span className="font-semibold">Efficiency:</span> Our platform is
            designed for efficiency, ensuring that your requests are promptly
            seen by those who can fulfill them.
          </p>

          <p className="mt-4 md:mt-6">
            <span className="font-semibold">Empowerment:</span> We empower users
            by providing a simple yet effective solution to their diverse needs.
          </p>
        </div>

        <div className="font-roboto text-lg leading-[29px] text-black tracking-[0.18px] mt-8 md:mt-10">
          <h2 className="text-[#4FC1E9] font-roboto text-[32px] md:text-[40px] font-bold">
            Join The Askcenta Community
          </h2>

          <p className="mt-4 md:mt-6 text-justify">
            Whether you're searching for something specific or eager to get
            those seeking your service, Askcenta is your go-to hub. Join our
            growing community and experience a new way of connecting, sharing,
            and fulfilling needs.
          </p>

          <p className="mt-4 md:mt-6 text-justify">
            We wish to receive feedback from you on how to make the platform
            more valuable for you.
          </p>
          <p className="">
            Thank you for being a part of the Askcenta journey. Together, we're
            building a community where requests turn into solutions!
          </p>

          <p className="mt-4 md:mt-6">
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
