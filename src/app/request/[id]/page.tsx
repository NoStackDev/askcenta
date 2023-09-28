import React from "react";
import RequestImgDetail from "./request_img_detail";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function RequestPage({ params }: Props) {
  const id = params.id;

  return (
    <main>
      <RequestImgDetail requestid={id} />
    </main>
  );
}
