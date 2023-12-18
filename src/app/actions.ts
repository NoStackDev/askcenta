"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  FeedsResponse,
  RequestResponsesType,
  UserDetailsType,
  UserPreferenceType,
} from "@/types";
import { LoginFormFields } from "./(Authenticate)/login/login_form";
import { SignupFormField } from "./(Authenticate)/signup/signup_wrapper";

/*
  check and get user authorization cookie and user details
  if avaialable
*/

function getAuthCookieInfo() {
  const cookie = cookies();

  const token = cookie.get("Authorization")?.value;
  const userDetails = cookie.get("user")?.value;

  if (!token || !userDetails) {
    cookie.delete("Authorization");
    cookie.delete("user");
    return redirect("/login");
  }

  return {
    token,
    userDetails: JSON.parse(userDetails) as UserDetailsType["data"],
  };
}

/*
  sign up user
*/

export async function signupUserAction(data: SignupFormField) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const formdata = new FormData();
  formdata.append("email", data.email);
  formdata.append("password", data.password);
  formdata.append("name", data.username);

  const _signupRes = await fetch(`https://askcenta.ng/api/register`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_signupRes.ok) {
    const signUpResJson = await _signupRes.json();
    console.log(
      `failed to signup user with email address ${data.email}`,
      `\nerror message: ${signUpResJson.message}`
    );
    if (signUpResJson.message.toLowerCase().includes("duplicate")) {
      return {
        isError: true,
        errors: {
          email: ["Email is already in use"],
        },
      };
    }
    return { isError: true, message: signUpResJson.message };
  }

  // login user after successful sign up

  const _loginRes = await fetch(`https://askcenta.ng/api/login`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_loginRes.ok) {
    const errors = await _loginRes.json();
    console.log(`failed to login user with email ${data.email} after signup`, {
      ...errors,
    });
    return _signupRes.json();
  }

  // save user token after successful sign up
  const res: Promise<{ token: string }> = _loginRes.json();
  const loginResJson = await res;
  const cookie = cookies();
  cookie.set("Authorization", `Bearer ${loginResJson.token}`, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: true,
  });

  // get user details after successful login
  headers.append("Authorization", `Bearer ${loginResJson.token}`);
  const _resUserDetails = await fetch("https://askcenta.ng/api/user", {
    method: "OPTIONS",
    headers: headers,
  });

  if (!_resUserDetails.ok) {
    const errors = await _resUserDetails.json();
    console.log(
      `failed to get user with email ${data.email} details after successful sign up and login`,
      { ...errors }
    );
    return _signupRes.json();
  }

  // save user details after getting user details
  const resUserDetails: Promise<UserDetailsType> = _resUserDetails.json();
  const resUserDetailsJson = await resUserDetails;
  const { requests_responded, request_made, question_answer, ...others } =
    resUserDetailsJson.data;
  cookie.set("user", JSON.stringify(others), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: true,
  });

  return _signupRes.json();
}

/*
  login user

*/
export async function loginUserAction(data: LoginFormFields) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const formdata = new FormData();
  formdata.append("email", data.email);
  formdata.append("password", data.password);

  const _res = await fetch(`https://askcenta.ng/api/login`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();
    console.log(`failed to login user ${data.email}`, { ...errors });
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

  if (!_resUserDetails.ok) {
    const errors = await _resUserDetails.json();
    console.log(`failed to login user ${data.email}`, { ...errors });
    return { isError: true, errorMessage: `failed to login user`, ...errors };
  }

  const resUserDetails: Promise<UserDetailsType> = _resUserDetails.json();
  const resUserDetailsJson = await resUserDetails;
  const { requests_responded, request_made, question_answer, ...others } =
    resUserDetailsJson.data;
  cookie.set("user", JSON.stringify(others), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: true,
  });

  return redirect("/");
}

/*
  logout user
*/
export async function logoutUserAction() {
  const cookie = cookies();

  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const _res = await fetch(`https://askcenta.ng/api/logout`, {
    method: "POST",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();
    console.log(`failed to logout user with user id ${userDetails.id}`, {
      ...errors,
    });
    return {
      isError: true,
      errorMessage: `failed to login user with user id ${userDetails.id}`,
      ...errors,
    };
  }

  cookie.delete("Authorization");
  cookie.delete("user");
  return redirect("/");
}

/*
 get user details
*/

export async function getUserDetailsAction(
  userId: string | number | null = null
) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const res = userId
    ? await fetch(`https://askcenta.ng/api/users/${userId}`, {
        method: "OPTIONS",
        headers: headers,
      })
    : await fetch(`https://askcenta.ng/api/user`, {
        method: "OPTIONS",
        headers: headers,
      });

  if (!res.ok) {
    // throw new Error("failed to fetch settings", { cause: await res.json() });
    const resJson = await res.json();
    console.log(
      `failed to fetch user details for user with user id ${userDetails.id}`,
      resJson
    );

    return { isError: true, resJson };
  }

  // const resPromise: Promise<UserDetailsType> = res.json();
  return res.json();
}

/*
  update user details
*/

export async function updateUserDetailsAction(data: FormData) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const res = await fetch(`https://askcenta.ng/api/update`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    const resJson = await res.json();
    console.log(
      `failed to update user details for user with user id ${userDetails.id}`,
      resJson
    );

    return { isError: true, ...resJson };
  }

  const cookie = cookies();
  const updatedUserDetailsJson: UserDetailsType = await res.json();
  const { requests_responded, request_made, question_answer, ...others } =
    updatedUserDetailsJson.data;

  cookie.set("user", JSON.stringify(others), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: true,
  });

  return updatedUserDetailsJson;
}

/*
  place request
*/

export async function placeRequestAction(formdata: FormData) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");

  formdata.append("user_id", userDetails.id.toString());

  const _res = await fetch(`https://askcenta.ng/api/requests`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(`failed to post user with user id ${userDetails.id} request`, {
      ...errors,
    });
    return {
      isError: true,
      errorMessage: `failed to post user with user id ${userDetails.id} request`,
      ...errors,
    };
  }

  return await _res.json();
}

/*
  update request
*/

export async function updateRequestAction(
  requestId: number,
  formdata: FormData
) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");

  formdata.append("user_id", userDetails.id.toString());

  const _res = await fetch(`https://askcenta.ng/api/requests/${requestId}`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to update user with user id ${userDetails.id} request with request id${requestId}`,
      {
        ...errors,
      }
    );
    return {
      isError: true,
      errorMessage: `failed to update user with user id ${userDetails.id} request with request id${requestId}`,
      ...errors,
    };
  }

  return await _res.json();
}

/*
  delete request 
*/
export async function deleteRequestAction(requestId: number) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");

  const _res = await fetch(`https://askcenta.ng/api/requests/${requestId}`, {
    method: "DELETE",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to delete user with user id ${userDetails.id} request with request id${requestId}`,
      {
        ...errors,
      }
    );
    return {
      isError: true,
      errorMessage: `failed to delete user with user id ${userDetails.id} request with request id${requestId}`,
      ...errors,
    };
  }

  return await _res.json();
}

/*
  fetch user bookmarks
*/

export async function fetchBookmarksAction() {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");

  const _res = await fetch(`https://askcenta.ng/api/bookmarks`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to fetch user bookmarks for user with user id ${userDetails.id}`,
      {
        ...errors,
      }
    );

    return {
      isError: true,
      errorMessage: `failed to fetch user bookmarks for user with user id ${userDetails.id} bookmarks}`,
      ...errors,
    };
  }

  return await _res.json();
}

/*
  add  bookmark
*/

export async function addBookmarkAction(requestId: string) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("user_id", userDetails.id.toString());
  data.append("req_id", requestId.toString());

  const _res = await fetch(`https://askcenta.ng/api/bookmarks`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to delete user with user id ${userDetails.id} request with request id${requestId}`,
      {
        ...errors,
      }
    );

    return {
      isError: true,
      errorMessage: `failed to delete user with user id ${userDetails.id} request with request id${requestId}`,
      ...errors,
    };
  }

  return await _res.json();
}

/*
  get all request from a user
*/

export async function getAllRequestsByUser() {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const res = await fetch(`http://askcenta.ng/api/requests`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!res.ok) {
    const errors = await res.json();
    return {
      isError: true,
      errorMessage: `failed to fetch user requests of user with user id ${userDetails.id}`,
      ...errors,
    };
  }

  const resPromise: Promise<FeedsResponse> = res.json();
  return resPromise;
}

/*
  post response
*/

export async function postResponseAction(formdata: FormData) {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Authorization", token);
  headers.append("Accept", "application/json");
  formdata.append("user_id", userDetails.id.toString());

  userDetails.whatsapp_num &&
    formdata.append("whatsapp_num", userDetails.whatsapp_num);

  const _res = await fetch(`https://askcenta.ng/api/responses`, {
    method: "POST",
    headers: headers,
    body: formdata,
  });

  if (!_res.ok) {
    const errors = await _res.json();

    console.log(
      `failed to post user reponse of user with user id ${
        userDetails.id
      } to request with request id ${formdata.get("req_id")}`,
      {
        ...errors,
      }
    );
    return {
      isError: true,
      errorMessage: `failed to post user reponse of user with user id ${
        userDetails.id
      } to request with request id ${formdata.get("req_id")}`,
      ...errors,
    };
  }

  return await _res.json();
}

/* 
  get all response by user
*/

export async function getAllResponsesByUser() {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const res = await fetch(`http://askcenta.ng/api/responses`, {
    method: "OPTIONS",
    headers: headers,
  });

  if (!res.ok) {
    const errors = await res.json();
    console.log(
      `failed to fetch all responses by user with user id ${userDetails.id}`
    );
    return {
      isError: true,
      errorMessage: `failed to fetch all responses by user with user id ${userDetails.id}`,
      ...errors,
    };
  }

  const resPromise: Promise<{ data: RequestResponsesType[] }> = res.json();
  return resPromise;
}

/*
  get user preference
*/
export async function getUserPreferenceAction() {
  const { token, userDetails } = getAuthCookieInfo();

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", token);

  const res = await fetch(
    `http://askcenta.ng/api/user_preferances/${userDetails.id}`,
    {
      method: "OPTIONS",
      headers: headers,
    }
  );

  if (!res.ok) {
    const errors = await res.json();
    console.log(
      `failed to fetch user preference for user with user id ${userDetails.id}`
    );
    return {
      isError: true,
      errorMessage: `failed to fetch user preference for user with user id ${userDetails.id}`,
      ...errors,
    };
  }

  const resPromise: Promise<UserPreferenceType> = res.json();
  return resPromise;
}

/*
  update user preference
*/
export async function updateUserPreferenceAction(data: {
  [name: string]: any;
}) {
  const { token, userDetails } = getAuthCookieInfo();

  const userPreferences: UserPreferenceType = await getUserPreferenceAction();
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-type", "application/json");
  headers.append("Authorization", token);
  data.user_id = userDetails.id;
  let formData = {};
  formData = { ...userPreferences, ...data };

  const res = await fetch(
    `http://askcenta.ng/api/user_preferances/${userPreferences.id}`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    }
  );

  if (!res.ok) {
    const errors = await res.json();
    console.log(
      `failed to update user preference for user with user id ${userDetails.id}`,
      { error: errors.message }
    );

    return {
      isError: true,
      errorMessage: `failed to update user preference for user with user id ${userDetails.id}`,
      ...errors,
    };
  }

  // const resPromise: Promise<UserPreferenceType> = res.json();
  return res.json();
}

/* 
  post a question
*/
export async function postQuestion(formData: FormData) {
  const { token, userDetails } = getAuthCookieInfo();

  const userPreferences: UserPreferenceType = await getUserPreferenceAction();
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-type", "application/json");
  headers.append("Authorization", token);

  formData.append("ask_user_id", userDetails.id.toString());

  const res = await fetch(`http://askcenta.ng/api/questions`, {
    method: "POST",
    headers: headers,
    body: formData,
  });

  if (!res.ok) {
    const errors = await res.json();
    console.log(
      `failed to post question from user with user id ${
        userDetails.id
      } to user with user id ${formData.get("answer_user_id")}`,
      { error: errors.message }
    );

    return {
      isError: true,
      errorMessage: `failed to post question from user with user id ${
        userDetails.id
      } to user with user id ${formData.get("answer_user_id")}`,
      ...errors,
    };
  }

  return res.json();
}
