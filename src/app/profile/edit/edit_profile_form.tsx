import { KeyboardBackspaceIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { z } from "zod";

const requestFormSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." })
    .max(32, { message: "Username cannot be more than 32 characters" }),
  bio: z
    .string()
    .max(32, { message: "Bio cannot be more than 300 characters" })
    .optional(),
  businessPhoneNum: z
    .string()
    .length(11, { message: "Phone number must be 11 numbers." })
    .startsWith("0", { message: "Phone number must start with 08 or 09" }),
  location: z.string().min(1, { message: "Please select a location" }),
  facebookLink: z
    .string()
    .min(1, { message: "Please input a valid facebook link" })
    .optional(),
  instagramLink: z
    .string()
    .min(1, { message: "Please input a valid instagram link" })
    .optional(),
  twitterLink: z
    .string()
    .min(1, { message: "Please input a valid twitter link" })
    .optional(),
});

type Props = {};

export default function EditProfileForm({}: Props) {
  return (
    <div>
      {/* topbar  */}
      <Card variant="settings">
        <KeyboardBackspaceIcon />

        <div>
          <h2>EDIT PROFILE</h2>

          <Button></Button>
        </div>
      </Card>
    </div>
  );
}
