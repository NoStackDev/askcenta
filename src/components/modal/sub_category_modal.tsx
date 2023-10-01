import React from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { KeyboardBackspaceIcon } from "../icons";
import Link from "next/link";

interface SubCategroyModalProps extends React.HTMLAttributes<typeof Dialog> {
  categoryid: number;
}
export default async function SubCategroyModal({
  categoryid,
  children,
  ...props
}: SubCategroyModalProps) {
  return (
    <Dialog {...props}>
      // trigger
      {children}
      <DialogContent>
        <DialogClose>
          <KeyboardBackspaceIcon aria-label="close" />
        </DialogClose>

        <div>ACCOMMODATION</div>

        <div>
          <Link href={`/category_group_id${categoryid}`}>Hostel</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
