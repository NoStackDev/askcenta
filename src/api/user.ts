import { resolve } from "path";

export async function registerUser({
  username,
  whatsappNum,
  password,
}: {
  username: string;
  whatsappNum: string;
  password: string;
}) {
  //   const headers = new Headers();
  //   headers.append("Accept", "application/json");

  //   const data = new FormData();
  //   data.append("name", username);
  //   data.append("whatsapp_num", whatsappNum);
  //   data.append("password", password);

  //   const res = await fetch(`http://askcenta.ng/api/register`, {
  //     method: "POST",
  //     headers: headers,
  //     body: data,
  //   });

  //   if (!res.ok) {
  //     throw new Error(`failed to register user`);
  //   }

  //   return res.json();

  const res = {
    Message: "Sent",
    data: {
      name: "Amara",
      whatsapp_num: "8112233444",
      role: "Regular",
      is_verified: false,
      updated_at: "2023-11-02T17:07:42.000000Z",
      created_at: "2023-11-02T17:07:42.000000Z",
      id: 3,
    },
  };

  return new Promise((resolve) => setTimeout(() => resolve(res), 3000));
}
