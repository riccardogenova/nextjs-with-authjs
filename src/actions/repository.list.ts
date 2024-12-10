"use server";

import { createAxiosInstance } from "../helpers/createAxiosInstance";

export const actionRepositoryList = async () => {
  const Axios = await createAxiosInstance();
  const response = await Axios("https://api.github.com/user/repos");
  return response.data;
};
