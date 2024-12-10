"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const actionLogOut = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
  redirect("/");
};
