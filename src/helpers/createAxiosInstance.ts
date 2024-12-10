import axios from "axios";
import { cookies } from "next/headers";

export const createAxiosInstance = async () => {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("access_token");
  const headers = { "Content-Type": "application/json", Accept: "application/json" } as any;
  if (!!access_token) headers["Authorization"] = `Bearer ${access_token.value}`;

  return axios.create({
    baseURL: "https://api.github.com",
    headers,
  });
};
