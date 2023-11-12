import { UserAuthContextProvider } from "@/context/use_auth_context";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Askcenta",
  description: "Connect with others, find what you are looking for",
};

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RequestFormWrapper } from "@/components/request";
import { ResponseFormWrapper } from "@/components/response";
import Sidebar from "@/components/sidebar";
import { SidebarContextProvider } from "@/context/sidebar_context";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${roboto.className} bg-[#F4F3FC]`}
      >
        <UserAuthContextProvider>
          <SidebarContextProvider>
            <Navbar />
            <Sidebar className="lg:hidden" />

            <div
              className={cn(
                "lg:flex lg:flex-row lg:gap-16 my-0 md:my-10 md:mx-4 lg:mx-[100px] 2xl:mx-auto max-w-7xl"
              )}
            >
              <Sidebar className="hidden lg:flex" />

              {children}
            </div>
          </SidebarContextProvider>

          <RequestFormWrapper>
            <button id="request_form_modal_trigger" className="hidden"></button>
          </RequestFormWrapper>
          <ResponseFormWrapper requestid={"2"}>
            <button
              id="response_form_modal_trigger"
              className="hidden"
            ></button>
          </ResponseFormWrapper>
        </UserAuthContextProvider>

        <Footer />
      </body>
    </html>
  );
}
