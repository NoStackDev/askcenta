"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FeedsResponse, RequestResponsesType, UserDetailsType } from "@/types";
import { LoginFormFields } from "./login/login_form";

// Unauthenticated

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
    sameSite: true,
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
    sameSite: true,
  });

  return redirect("/");
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
  return redirect("/");
}

export async function getUserDetailsAction() {
  const cookie = cookies();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", cookie.get("Authorization")?.value || "");

  const res = await fetch(`https://askcenta.ng/api/user`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("failed to fetch settings", { cause: await res.json() });
  }

  const resPromise: Promise<UserDetailsType> = res.json();
  return resPromise;
}

export async function placeRequestAction(formdata: FormData) {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;
  formdata.append("user_id", userId || "");

  const _res = await fetch(`https://askcenta.ng/api/requests`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(`failed to post user ${userId} request`, {
      ...errors,
    });
    return {
      isError: true,
      errorMessage: `failed to post user ${userId} request`,
      ...errors,
    };
  }

  return await _res.json();
}

export async function updateRequestAction(
  requestId: number,
  formdata: FormData
) {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;
  formdata.append("user_id", userId || "");

  const _res = await fetch(`https://askcenta.ng/api/requests/${requestId}`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to update user ${userId} request with request id${requestId}`,
      {
        ...errors,
      }
    );
    return {
      isError: true,
      errorMessage: `failed to update user ${userId} request with request id${requestId}`,
      ...errors,
    };
  }

  return await _res.json();
}

export async function deleteRequestAction(requestId: number) {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;

  const _res = await fetch(`https://askcenta.ng/api/requests/${requestId}`, {
    method: "DELETE",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to delete user ${userId} request with request id${requestId}`,
      {
        ...errors,
      }
    );
    return {
      isError: true,
      errorMessage: `failed to delete user ${userId} request with request id${requestId}`,
      ...errors,
    };
  }

  return await _res.json();
}

export async function bookmarkRequestAction(requestId: string) {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;

  const data = new FormData();
  data.append("user_id", userId || "");
  data.append("req_id", requestId.toString());

  const _res = await fetch(`https://askcenta.ng/api/bookmarks`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to delete user ${userId} request with request id${requestId}`,
      {
        ...errors,
      }
    );
    throw new Error("bookmarking failed", {
      cause: {
        isError: true,
        errorMessage: `failed to delete user ${userId} request with request id${requestId}`,
        ...errors,
      },
    });
  }

  return await _res.json();
}

export async function getAllRequestsByUser() {
  const cookie = cookies();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", cookie.get("Authorization")?.value || "");

  const res = await fetch(`http://askcenta.ng/api/requests`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("failed to fetch user requests", {
      cause: await res.json(),
    });
  }

  const resPromise: Promise<FeedsResponse> = res.json();
  return resPromise;
}

export async function fetchBookmarksAction() {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;

  const _res = await fetch(`https://askcenta.ng/api/bookmarks`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(`failed to fetch user ${userId} bookmarks}`, {
      ...errors,
    });
    throw new Error("bookmarking failed", {
      cause: {
        isError: true,
        errorMessage: `failed to fetch user ${userId} bookmarks}`,
        ...errors,
      },
    });
  }

  return await _res.json();
}

export async function postResponseAction(formdata: FormData) {
  const cookie = cookies();
  const headers = new Headers();
  headers.append("Authorization", cookie.get("Authorization")?.value || "");
  headers.append("Accept", "application/json");
  const userId = cookie.get("userId")?.value;
  formdata.append("user_id", userId || "");

  const userDetails = await getUserDetailsAction();
  console.log(userDetails);
  formdata.append("whatsapp_num", userDetails.data.whatsapp_num);

  const _res = await fetch(`https://askcenta.ng/api/responses`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(`failed to post user ${userId} response`, {
      ...errors,
    });
    return {
      isError: true,
      errorMessage: `failed to post user ${userId} response`,
      ...errors,
    };
  }

  return await _res.json();
}

export async function getAllResponsesByUser() {
  const cookie = cookies();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", cookie.get("Authorization")?.value || "");

  const res = await fetch(`http://askcenta.ng/api/responses`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("failed to fetch user responses", {
      cause: await res.json(),
    });
  }

  const resPromise: Promise<{ data: RequestResponsesType[] }> = res.json();
  return resPromise;
}
