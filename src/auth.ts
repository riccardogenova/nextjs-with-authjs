/** @format */

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const Session = NextAuth({
  providers: [GitHub],
});

export const { auth, signIn, signOut, handlers } = Session;
