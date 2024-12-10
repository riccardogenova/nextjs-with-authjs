"use server";

export const actionUserGistList = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/gists`);
  const data = await response.json();
  return data;
};
