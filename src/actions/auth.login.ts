"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const actionLogIn = async (code: string) => {
  const cookieStore = await cookies();
  const response = await axios.post(
    `https://github.com/login/oauth/access_token?client_id=${process.env.AUTH_GITHUB_ID}&client_secret=${process.env.AUTH_GITHUB_SECRET}&code=${code}&redirect_uri=http://localhost:3000`,
    {
      Accept: "application/json",
    }
  );
  const { data } = response;
  const formattedData = data.split("&").reduce((acc: any, cur: any) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {} as any);

  cookieStore.set("access_token", formattedData.access_token, {
    expires: new Date(Date.now() + formattedData.expires_in),
  });
  cookieStore.set("refresh_token", formattedData.refresh_token, {
    expires: new Date(Date.now() + formattedData.refresh_token_expires_in),
  });

  redirect("/");
};
