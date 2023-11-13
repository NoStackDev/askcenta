import { Analytics } from "@vercel/analytics/react";
import { UserAuthContextProvider } from "@/context/use_auth_context";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
// import localFont from "next/font/local";

// const poppins = localFont({
//   src: [
//     {
//       path:"../../public/fonts/Poppins/Poppins-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-ExtraLight.ttf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Poppins/Poppins-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-poppins",
// });

// const roboto = localFont({
//   src: [
//     {
//       path:"../../public/fonts/Roboto/Roboto-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Roboto/Roboto-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Roboto/Roboto-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Roboto/Roboto-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Roboto/Roboto-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path:"../../public/fonts/Roboto/Roboto-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-roboto",
// });

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
        className={`${poppins.variable} ${roboto.variable} ${roboto.className} bg-[#F4F3FC]`}
      >
        <UserAuthContextProvider>{children}</UserAuthContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
