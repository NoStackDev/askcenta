import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FacebookIcon, LinkedinIcon } from "./icons";
import Link from "next/link";
import TwitterXIcon from "./icons/twitter_x_icon";
import { headers } from "next/headers";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<"footer">>(
  ({ className, ...props }, forwardRef) => {
    const headersList = headers();
    const pathname = headersList.get("x-pathname");
    const showFooter = !Boolean(
      pathname === "/login" || pathname === "/signup"
    );

    return (
      <>
        {showFooter && (
          <footer
            className={cn(
              "flex flex-col bg-[#F1F0F6] border-t border-t-[#DEDDE3]",
              className
            )}
          >
            <div className="2xl:w-full max-w-7xl mx-4 mt-6 lg:mx-[100px] 2xl:mx-auto">
              <div className="flex justify-between items-center">
                <Link href="/" className="border-none">
                  <Image
                    src="/images/logo.svg"
                    height={32}
                    width={32}
                    alt="logo"
                  />
                </Link>

                <div className="flex justify-between items-center gap-6">
                  <Link
                    href="http://linkedin.com/company/askcenta"
                    target="_blank"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    href="https://www.facebook.com/Askcenta"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link href="http://twitter.com/Askcenta" target="_blank">
                    <TwitterXIcon />
                  </Link>
                </div>
              </div>

              <div className="mt-8 font-roboto font-normal text-xs min-[375px]:text-sm text-[#010E1E] underline underline-offset-2 flex justify-center sm:justify-start items-center gap-12">
                <Link href="/contact_us">Contact us</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/about">About</Link>
                <Link href="/safetytips">Safety tips</Link>
              </div>
            </div>

            <div className="2xl:w-full max-w-7xl mx-4 mt-6 lg:mx-[100px] 2xl:mx-auto">
              <div className="flex justify-between items-center border-t border-t-[#E1DFF4] pt-4 mb-24 lg:mb-10">
                <div className="font-roboto font-normal text-xs text-[#4D4A4A]">
                  © 2023 Askcenta. All Rights Reserved.
                </div>
                <Link
                  href="/policy"
                  className="font-roboto font-normal text-xs text-black underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </footer>
        )}
      </>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
