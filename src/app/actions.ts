"use server";

import { LoginFormFields } from "./login/login_form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUserAction(data: LoginFormFields) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const formdata = new FormData();
  formdata.append("whatsapp_num", "234" + data.whatsappNum);
  formdata.append("password", data.password);

  const _res = await fetch(`https://askcenta.ng/api/login`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();
    return { isError: true, errorMessage: `failed to login user`, ...errors };
  }

  const res: Promise<{ token: string }> = _res.json();
  const resJson = await res;
  const cookie = cookies();
  cookie.set("Authorization", `Bearer ${resJson.token}`, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/");
}

export async function logoutUserAction() {
  const cookie = cookies();
  console.log(cookie.get("Authorization"));
  cookie.delete("Authorization");
  console.log("deleted: ", cookie.get("Authorization"));
  redirect("/");
}
