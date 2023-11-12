"use server";

import { LoginFormFields } from "./login/login_form";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { UserDetailsType } from "../../types";

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
    console.log(`failed to login user ${data.whatsappNum}`, { ...errors });
    return { isError: true, errorMessage: `failed to login user`, ...errors };
  }

  const res: Promise<{ token: string }> = _res.json();
  const resJson = await res;
  const cookie = cookies();
  cookie.set("Authorization", `Bearer ${resJson.token}`, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  headers.append("Authorization", `Bearer ${resJson.token}`);
  const _resUserDetails = await fetch("https://askcenta.ng/api/user", {
    method: "OPTIONS",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _resUserDetails.json();
    console.log(`failed to login user ${data.whatsappNum}`, { ...errors });
    return { isError: true, errorMessage: `failed to login user`, ...errors };
  }

  const resUserDetails: Promise<UserDetailsType> = _resUserDetails.json();
  const resUserDetailsJson = await resUserDetails;
  cookie.set("userId", resUserDetailsJson.data.id.toString(), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}

export async function logoutUserAction() {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", cookie.get("Authorization")?.value || "");

  const _res = await fetch(`https://askcenta.ng/api/logout`, {
    method: "POST",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();
    console.log(`failed to logout user`, { ...errors });
    return { isError: true, errorMessage: `failed to login user`, ...errors };
  }

  cookie.delete("Authorization");
  cookie.delete("userId");
  redirect("/");
}
