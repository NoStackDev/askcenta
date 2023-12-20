import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { use } from "react";
import LogoutBtn from "./logout";
import ResetPasswordBtn from "./reset_password";
import EmailNotificationSwitch from "./email_notification_switch";
import ChangeNotificationEmailBtn from "./change_notification_email";
import ChangePreferedLocationBtn from "./change_prefered_location";
import AnonymousSwitch from "./change_anonymous_switch";
import ContactUsBtn from "./contact_us";
import DeleteAccountBtn from "./delete_account";
import Link from "next/link";
import { getUserDetailsAction, getUserPreferenceAction } from "@/actions";
import {
  CitiesResponseType,
  StateResponseType,
  UserDetailsType,
  UserPreferenceType,
} from "@/types";
import { fetchCities, fetchStates } from "@/api/location";
import Email from "./email";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WhatsappNumForm from "./whatsapp_number_form";

type Props = {};

export default async function Page({}: Props) {
  const userDetailsRes: Promise<UserDetailsType> = getUserDetailsAction();
  const userPreferenceRes: Promise<UserPreferenceType> =
    getUserPreferenceAction();
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();

  const [userDetails, userPreference, cities, states] = await Promise.all([
    userDetailsRes,
    userPreferenceRes,
    citiesRes,
    statesRes,
  ]);

  return (
    <main className="w-full mt-2 md:mt-0">
      <Card variant="settings">
        <CardHeader className="font-poppins font-semibold text-base text-black">
          SETTINGS
        </CardHeader>

        <CardContent className="mt-7 flex items-center justify-between font-roboto">
          <Email />
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
              WhatsApp Messenger
            </span>
          </div>

          <p className="font-normal text-xs text-black opacity-70 mt-2">
            Add your WhatsApp contact details for easy reach out from those
            interested in your offers.
          </p>

          <div
            className={cn(
              "flex justify-between items-center mt-5",
              !userDetails.data.whatsapp_num && "justify-end"
            )}
          >
            {userDetails.data.whatsapp_num && (
              <span>{userDetails.data.whatsapp_num}</span>
            )}

            <Dialog>
              <DialogTrigger>
                <Button className="font-roboto text-sm font-medium text-[#6356E5]">
                  Change Number
                </Button>
              </DialogTrigger>
              <DialogContent>
                <WhatsappNumForm
                  userDetails={userDetails}
                  citiesData={cities.data}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <ChangePreferedLocationBtn
        userDetails={userDetails}
        citiesdata={cities.data}
        statesdata={states.data}
        className="mt-4"
      />

      <Card variant="settings" className="mt-4">
        <CardHeader className="font-roboto font-normal text-base text-black opacity-60">
          Privacy
        </CardHeader>

        <CardContent className="mt-3 flex flex-col font-roboto">
          <div className="flex items-center justify-between">
            <span className="font-normal text-base text-black">
              Post as Anonymous
            </span>

            <AnonymousSwitch userPreference={userPreference} />
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
