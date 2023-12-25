import React from "react";
import ProfileTopbar from "./profile_topbar";
import ProfileTabs from "./profile_tabs";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProfilePage({ searchParams }: Props) {
  const otherUserId = searchParams.user;
  return (
    <main className="w-full">
      {otherUserId ? (
        <ProfileTopbar otherUserId={otherUserId} />
      ) : (
        <ProfileTopbar />
      )}

      <ProfileTabs otherUserId={otherUserId} className="mt-4" />
    </main>
  );
}
