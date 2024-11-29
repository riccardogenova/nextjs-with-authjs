"use server";

import { signIn, signOut } from "./auth";

export const actionLogin = async () => {
  await signIn("github");
};

export const actionLogout = async () => {
  await signOut();
};
