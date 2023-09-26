import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { SidebarContextProvider } from "@/context/sidebar_context";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${roboto.className} bg-[#F7F7F9]`}
      >
        <SidebarContextProvider>
          <Navbar />

          <div className="md:flex md:flex-row md:gap-16 md:my-10 md:mx-[100px] 2xl:mx-auto">
            <Sidebar />

            {children}
          </div>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
