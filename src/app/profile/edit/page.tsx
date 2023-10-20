import React from "react";
import EditProfileForm from "./edit_profile_form";

type Props = {};

export default function ProfileEditPage({}: Props) {
  return (
    <main className="w-full mt-2 md:mt-0">
      <EditProfileForm />
    </main>
  );
}
