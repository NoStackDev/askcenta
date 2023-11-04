import { UserRegisterResponseType } from "../../types";

export async function registerUser({
  username,
  whatsappNum,
  password,
}: {
  username: string;
  whatsappNum: string;
  password: string;
}) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("name", username);
  data.append("whatsapp_num", "234" + whatsappNum);
  data.append("password", password);

  const res = await fetch(`http://askcenta.ng/api/register`, {
    method: "POST",
    headers: headers,
    body: data,
    // body: JSON.stringify({
    //   name: username,
    //   whatsapp_num: whatsappNum,
    //   password: password,
    // }),
  });

  if (!res.ok) {
    throw new Error(`failed to register user`, { cause: await res.json() });
  }

  return res.json();

  // const res = {
  //   Message: "Sent",
  //   data: {
  //     name: "Amara",
  //     whatsapp_num: "8112233444",
  //     role: "Regular",
  //     is_verified: false,
  //     updated_at: "2023-11-02T17:07:42.000000Z",
  //     created_at: "2023-11-02T17:07:42.000000Z",
  //     id: 3,
  //   },
  // };

  // return new Promise<UserRegisterResponseType>((resolve) =>
  //   setTimeout(() => resolve(res), 3000)
  // );
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

  const res = await fetch(`http://askcenta.ng/api/verifyOtp`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`failed verification`, { cause: await res.json() });
  }

  return res.json();

  // const res = {
  //   Message: "verified",
  //   data: {
  //     name: "Amara",
  //     whatsapp_num: "8112233444",
  //     role: "Regular",
  //     is_verified: true,
  //     updated_at: "2023-11-02T17:07:42.000000Z",
  //     created_at: "2023-11-02T17:07:42.000000Z",
  //     id: 3,
  //   },
  // };

  // return new Promise((resolve) => setTimeout(() => resolve(res), 3000));
}

export async function resendOtp(whatsappNum: string) {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const data = new FormData();
  data.append("whatsapp_num", whatsappNum);

  const res = await fetch(`http://askcenta.ng/api/resendOtp`, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!res.ok) {
    throw new Error(`otp resend failed`, { cause: await res.json() });
  }

  return res.json();
}
