import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASKCENTA",
  description: "Connect with others, find what you are looking for",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${roboto.className} bg-[#F7F7F9]`}>
        {children}
      </body>
    </html>
  );
}
