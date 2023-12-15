import { Analytics } from "@vercel/analytics/react";
import { UserAuthContextProvider } from "@/context/use_auth_context";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

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
        className={`${poppins.variable} ${roboto.variable} ${roboto.className} bg-[#F4F3FC] antialiased`}
      >
        <HydrationOverlay>
          <UserAuthContextProvider>{children}</UserAuthContextProvider>
        </HydrationOverlay>

        <Analytics />
      </body>
    </html>
  );
}
