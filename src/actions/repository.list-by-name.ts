"use server";

import { createAxiosInstance } from "../helpers/createAxiosInstance";

export const actionRepositotyListByUsername = async (username: string) => {
  const Axios = await createAxiosInstance();
  const response = await Axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
};
