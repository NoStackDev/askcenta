import { Analytics } from "@vercel/analytics/react";
import { UserAuthContextProvider } from "@/context/use_auth_context";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { PopupStatesContextProvider } from "@/context/popup_states_context";

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
        className={`${poppins.variable} ${roboto.variable} ${roboto.className} bg-[#F7F7F9] antialiased`}
      >
        <HydrationOverlay>
          <UserAuthContextProvider>
            <PopupStatesContextProvider>{children}</PopupStatesContextProvider>
          </UserAuthContextProvider>
        </HydrationOverlay>

        <Analytics />
      </body>
    </html>
  );
}
