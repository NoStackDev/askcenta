import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { KeyboardBackspaceIcon } from "../icons";
import Link from "next/link";

interface SubCategoryModalProps extends React.HTMLAttributes<typeof Dialog> {
  categorygroup: string;
}
export default async function SubCategoryModal({
  categorygroup,
  children,
  ...props
}: SubCategoryModalProps) {
  return (
    <Dialog {...props}>
      <DialogTrigger> {children}</DialogTrigger>

      <DialogContent>
        <DialogClose>
          <KeyboardBackspaceIcon aria-label="close" />
        </DialogClose>

        <div className="bg-white h-[300px] w-[300px]">ACCOMMODATION</div>

        <div>
          <Link href={`/category_group_id${categorygroup}`}>Hostel</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
