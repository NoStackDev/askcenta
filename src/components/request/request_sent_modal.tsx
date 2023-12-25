import React from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { NotebookCheckIllustration } from "../icons";
import { Button } from "../ui/button";
import { usePopupStatesContext } from "@/context/popup_states_context";

type Props = {
  modalState: boolean;
};

export default function RequestSentModal({ modalState }: Props) {
  const { setPopupStateType } = usePopupStatesContext();
  return (
    <Dialog
      open={modalState}
      onOpenChange={(open) => !open && setPopupStateType(null)}
    >
      <DialogContent className="w-[calc(100vw_-_48px)] left-1/2 -translate-x-1/2 h-fit top-1/2 -translate-y-1/2 rounded-[20px] shadow-modal-content">
        <div className="flex flex-col px-4 py-[72px] items-center">
          <NotebookCheckIllustration className="" />
          <h3 className="mt-[72px] font-poppins font-medium text-xl text-black">
            Request Successful
          </h3>
          <p className="mt-4 font-roboto font-normal text-sm text-black opacity-80 leading-[24px] text-center">
            Members of the community with relevant offer will respond to your
            request soon.
          </p>

          <DialogClose>
            <Button
              variant="request_outlined"
              className="mt-10 w-full text-base rounded-3xl py-[14px] font-medium"
            >
              Done
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
