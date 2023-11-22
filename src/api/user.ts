import { UserRegisterResponseType } from "@/types";

export async function registerUser({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("name", username);
  data.append("email", email);
  data.append("password", password);

  const res = await fetch(`https://askcenta.ng/api/register`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`failed to register user`, { cause: await res.json() });
  }

  return res.json();
}

export async function verifyUserNumber({
  whatsappNum,
  otpCode,
}: {
  whatsappNum: string;
  otpCode: string;
}) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("whatsapp_num", "234" + whatsappNum);
  data.append("otp_code", otpCode);

  const res = await fetch(`https://askcenta.ng/api/verifyOtp`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`failed verification`, { cause: await res.json() });
  }

  return res.json();
}

export async function resendOtp(whatsappNum: string) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("whatsapp_num", whatsappNum);

  const res = await fetch(`https://askcenta.ng/api/resendOtp`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`otp resend failed`, { cause: await res.json() });
  }

  return res.json();
}

export async function loginUser({
  whatsappNum,
  password,
}: {
  whatsappNum: string;
  password: string;
}) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("whatsapp_num", "234" + whatsappNum);
  data.append("password", password);

  const res = await fetch(`https://askcenta.ng/api/login`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`failed to login user`, { cause: await res.json() });
  }

  return res.json();
}
