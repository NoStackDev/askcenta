import React from "react";
import ProfileTopbar from "./profile_topbar";
import ProfileTabs from "./profile_tabs";

type Props = {};

export default function ProfilePage({}: Props) {
  return (
    <main className="w-full">
      <ProfileTopbar />

      <ProfileTabs className="mt-4" />
    </main>
  );
}

export const runtime = "edge";
