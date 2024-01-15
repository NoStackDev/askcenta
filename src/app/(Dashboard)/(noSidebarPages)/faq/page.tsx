import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

export default function FaqPage({}: Props) {
  return (
    <main
      className={cn(
        "bg-white sm:mx-[40px] lg:mx-[100px] 2xl:mx-auto max-w-7xl mt-2 sm:px-6 py-8 text-justify"
      )}
    >
      <h1 className="font-poppins font-semibold text-xl sm:text-2xl md:text-[28px] sm:mt-4 md:mt-10 text-black uppercase text-center">
        askcenta faq
      </h1>

      <div className="mt-8 sm:mt-9 md:mt-14 md:px-14 lg:px-[120px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                What is Askcenta?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                Askcenta is a dynamic online platform that facilitates seamless
                connections between individuals seeking specific products,
                accommodation, services, jobs, or social connections and those
                who can offer relevant solutions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                How does Askcenta work?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <ul className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 flex flex-col gap-4">
                <li>
                  <p className="font-medium">1. Place a Request</p>
                  <p>
                    Users can place a request by describing what they need,
                    specifying their location, and selecting the appropriate
                    category.
                  </p>
                </li>

                <li>
                  <p className="font-medium">2. Connect with Relevant Offers</p>
                  <p>
                    Requests are shared with the Askcenta community, and users
                    with relevant offers can respond directly to the request.
                  </p>
                </li>

                <li>
                  <p className="font-medium">
                    3. Take the Conversation Off-Platform:
                  </p>
                  <p>
                    Users connect with potential matches through their preferred
                    communication channel, primarily using WhatsApp Messenger.
                  </p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                What can I request for on Askcenta?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                To maintain the integrity of the platform and positive
                experience for everyone, any offensive, abusive or inappropriate
                request is not allowed. Askcenta allows you to request for
                things within this range of categories:
              </p>
              <ul className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                <li>- Products</li>
                <li>- Accommodation</li>
                <li>- Services</li>
                <li>- Jobs</li>
                <li>- Social Connections</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                Is there any limit to number of requests one can make?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                Askcenta does not impose a strict limit on the number of
                requests or responses you can make. However, we encourage users
                to make requests and responses that are relevant, meaningful,
                and in line with the platform&apos;s purpose. Excessive or spam-like
                behavior may be subject to moderation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                How do i respond to a request?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                If you have a relevant offer for a user&apos;s request, simply
                respond to the request with details of your offer. You will be
                required to provide your WhatsApp ID through which anyone
                interested in your offer can contact you. If you don&apos;t wish for
                the public to access your DM You can hide your response from the
                public so only the owner of the request can get to see it and
                contact.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                Is Askcenta free to use?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                Yes, Askcenta is completely free for users to place requests and
                connect with relevant offers. There are no hidden fees
                associated with using our platform.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                Is Askcenta available globally?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                No, Askcenta is only available for use Nigeria for now. However,
                effort is being made to enable it in many other countries, you
                can follow us on our social media handles for updates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="mt-4 pb-4">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                Can I trust offers on Askcenta?
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                While Askcenta strives to create a trustworthy community, users
                are encouraged to exercise caution and use their judgment when
                connecting with others. Askcenta does not handle transactions,
                and users are responsible for ensuring the legitimacy of offers
                and transactions. You can check our{" "}
                <Link
                  className="text-[#6356E5] underline underline-offset-2"
                  href="/safetytips"
                >
                  Safety Tips
                </Link>{" "}
                for insight.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="mt-4 pb-4 border-none">
            <AccordionTrigger className="px-4 sm:px-6 md:px-0">
              <p className="text-left font-poppins text-lg font-medium text-[#4FC1E9]">
                Can I post a request as anonymous
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0">
                Yes, you can decide to hide your identity when making a request
                by toggling the anonymous status to active on your settings
                page.
              </p>

              <p className="font-roboto text-base font-normal leading-6 text-black px-4 sm:px-6 md:px-0 mt-3">
                If you have any questions, concerns, or need assistance, please
                contact our support team at{" "}
                <Link
                  className="text-[#6356E5]"
                  href="mailto:support@askcenta.com"
                >
                  support@askcenta.com
                </Link>{" "}
                We are here to help!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
