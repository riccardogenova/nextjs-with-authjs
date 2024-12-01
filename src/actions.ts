"use server";

import { signIn, signOut } from "./auth";

export const actionLoginGitHub = async () => {
  await signIn("github");
};

export const actionLoginGoogle = async () => {
  await signIn("google");
};

export const actionLogout = async () => {
  await signOut();
};
