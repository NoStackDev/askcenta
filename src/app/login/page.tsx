import { LoginPageIllustrationOne } from "@/components/icons";
import Image from "next/image";
import React from "react";
import LoginForm from "./login_form";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <main className="bg-[#FFFFFF] h-screen">
      <div className="flex justify-between items-start">
        <Image
          src="/images/logo2.png"
          height={32}
          width={142}
          alt="askcenta"
          className="ml-5 mt-8"
        />

        <LoginPageIllustrationOne />
      </div>

      <LoginForm />
    </main>
  );
}
