import React from "react";
import ProfileTopbar from "../profile_topbar";
import ProfileTabs from "../profile_tabs";

type Props = {};

export default function OtherUsersProfilePage({}: Props) {
  return (
    <main className="w-full">
      <ProfileTopbar otheruser />

      <ProfileTabs otheruser className="mt-4" />
    </main>
  );
}
