import { fetchBookmarksAction, getUserDetailsAction } from "@/actions";
import { Notebook_icon } from "@/components/icons";
import { RequestContainer } from "@/components/request";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { RequestType, UserDetailsType } from "@/types";
import { TabsContentProps } from "@radix-ui/react-tabs";
import { cookies } from "next/headers";
import React from "react";

interface ProfileResponsesTabProps extends TabsContentProps {
  otherUserId?: string | string[] | undefined;
}

export default async function ProfileResponsesTab({
  className,
  otherUserId,
  ...props
}: ProfileResponsesTabProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  const res = await getUserDetailsAction(otherUserId?.toString() || null);
  const requests: RequestType[] = res.data.requests_responded;
  let requestsWithBookmarks: RequestType[] = [...requests];

  if (user) {
    try {
      const bookmarkedUserRequests: { data: RequestType[] } =
        await fetchBookmarksAction();
      requestsWithBookmarks = requests.map((request) => {
        const matchedBookmark = bookmarkedUserRequests.data.find(
          (bookmarkedRequest) => bookmarkedRequest.id === request.id
        );
        if (matchedBookmark) {
          return matchedBookmark;
        }
        return request;
      });
    } catch (err) {
      console.log(`failed trying to fetch bookmarks for user `, err);
    }
  }

  return (
    <TabsContent className={cn("", className)} {...props}>
      <RequestContainer requests={requestsWithBookmarks} />
      {requestsWithBookmarks.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            Oops! No Response
          </p>
        </div>
      )}
    </TabsContent>
  );
}
