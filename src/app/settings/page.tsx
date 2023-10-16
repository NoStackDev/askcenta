import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import LogoutBtn from "./logout";
import PhoneNum from "./phone_num";
import ResetPasswordBtn from "./reset_password";
import EmailNotificationSwitch from "./email_notification_switch";
import ChangeNotificationEmailBtn from "./change_notification_email";
import PreferredLocation from "./preferred_location";
import ChangePrefferedLocationBtn from "./change_preffered_location";
import AnonymousSwitch from "./change_anonymous_switch";
import ContactUsBtn from "./contact_us";
import DeleteAccountBtn from "./delete_account";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <main className="w-full mt-2 md:mt-0">
      <Card variant="settings">
        <CardHeader className="font-poppins font-semibold text-base text-black">
          SETTINGS
        </CardHeader>

        <CardContent className="mt-7 flex items-center justify-between font-roboto">
          <PhoneNum />
          <LogoutBtn />
        </CardContent>
      </Card>

      <Card variant="settings" className="mt-4">
        <CardContent className="flex items-center justify-between font-roboto">
          <span className="font-normal text-base text-black">
            Reset password
          </span>

          <ResetPasswordBtn />
        </CardContent>
      </Card>

      <Card variant="settings" className="mt-4">
        <CardContent className="flex flex-col font-roboto">
          <div className="flex items-center justify-between">
            <span className="font-normal text-base text-black">
              Enable email notification
            </span>

            <EmailNotificationSwitch />
          </div>

          <p className="font-normal text-xs text-black opacity-70 mt-2">
            Receive email notifications for offers on your requests and requests
            you might be interested in
          </p>

          <ChangeNotificationEmailBtn className="self-start mt-4" />
        </CardContent>
      </Card>

      <Card variant="settings" className="mt-4">
        <CardContent className="flex flex-col font-roboto">
          <div className="flex items-center justify-between">
            <span className="font-normal text-base text-black">
              Preferred Location
            </span>

            <ChangePrefferedLocationBtn />
          </div>

          <PreferredLocation className="mt-2" />
        </CardContent>
      </Card>

      <Card variant="settings" className="mt-4">
        <CardHeader className="font-roboto font-normal text-base text-black opacity-60">
          Privacy
        </CardHeader>

        <CardContent className="mt-3 flex flex-col font-roboto">
          <div className="flex items-center justify-between">
            <span className="font-normal text-base text-black">
              Post as Annonymous
            </span>

            <AnonymousSwitch />
          </div>

          <p className="font-normal text-xs text-black opacity-70 mt-2">
            Hide your identity from any requests you make
          </p>
        </CardContent>
      </Card>

      <Card variant="settings" className="mt-4 mb-4 md:mb-0">
        <CardContent className="flex flex-col items-start font-roboto">
          <DeleteAccountBtn />

          <ContactUsBtn className="mt-6" />

          <Link
            href="/faq"
            className="font-roboto font-normal text-base text-black mt-6"
          >
            FAQ
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}

export const runtime = "edge";
