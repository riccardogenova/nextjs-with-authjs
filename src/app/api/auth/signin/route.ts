"use server";

import { NextRequest } from "next/server";
import { actionLogIn } from "../../../../actions/auth.login";

export async function GET(request: NextRequest) {
  const { url } = request;
  const code = url.split("?code=")[1];
  await actionLogIn(code);
}
