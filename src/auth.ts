/** @format */

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const Session = NextAuth({
  providers: [GitHub, Google],
});

export const { auth, signIn, signOut, handlers } = Session;
