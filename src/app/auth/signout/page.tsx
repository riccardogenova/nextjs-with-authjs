"use client";

import { useEffect } from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

export default function Page() {
  useEffect(() => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    redirect("/");
  }, []);

  return <h1>Signing out...</h1>;
}
