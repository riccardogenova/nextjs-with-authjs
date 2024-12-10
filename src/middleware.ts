/** @format */

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const access_token = request.cookies.get("access_token");
  const isUserLoggedIn = !!access_token?.value;
  const isRootPage = pathname === "/";
  const isHomePage = pathname === "/home";

  if (isUserLoggedIn && isRootPage) {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!isUserLoggedIn && isHomePage) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next();

  return response;
}
