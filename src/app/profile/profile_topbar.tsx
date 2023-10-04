import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ProfilePageProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function ProfileTopbar({
  className,
  ...props
}: ProfilePageProps) {
  return (
    <Card className={cn("", className)} {...props} variant="settings">
      <CardContent>
        <Avatar>
          <AvatarFallback />
        </Avatar>
      </CardContent>
    </Card>
  );
}
