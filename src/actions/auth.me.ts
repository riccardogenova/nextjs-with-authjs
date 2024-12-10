"use server";

import { User } from "../declarations/github.user";
import { createAxiosInstance } from "../helpers/createAxiosInstance";

export const actionUserMe = async () => {
  const Axios = await createAxiosInstance();
  const response = await Axios.get<User>("https://api.github.com/user");
  return response.data;
};
