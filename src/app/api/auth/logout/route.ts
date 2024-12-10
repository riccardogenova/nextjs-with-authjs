"use server";

import { actionLogOut } from "../../../../actions/auth.logout";

export async function GET() {
  await actionLogOut();
  return new Response(null, { status: 200 });
}
