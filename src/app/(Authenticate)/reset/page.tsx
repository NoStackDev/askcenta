import { LoginPageIllustrationTwo } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResetPasswordForm from "./reset_password_form";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ResetPasswordPage({ params, searchParams }: Props) {
  const resetToken = searchParams["token"];
  if (!resetToken) {
    redirect("/login");
  }
  return (
    <main className="bg-[#FFFFFF] h-screen w-full md:grid md:grid-cols-[6fr_4fr]">
      <div className="hidden md:flex md:flex-col bg-[#4FC1E9] h-full justify-center">
        <LoginPageIllustrationTwo className="ml-[100px]" />

        <h2 className="ml-[100px] mt-[78px] max-w-[550px] font-roboto font-semibold text-[40px] text-[#010913]">
          Transform How You Access Services, Products & Connections
        </h2>
      </div>

      <div className="overflow-y-auto">
        <div className="grid place-content-center w-full">
          <Link href="/" className="w-fit h-fit mt-8">
            <Image
              src="/images/name.svg"
              height={32}
              width={142}
              alt="askcenta"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <ResetPasswordForm resetToken={resetToken.toString()} />
      </div>
    </main>
  );
}
