import { AxiosResponse } from "axios";
import { baseURL } from "./httpClient";

type loginDetailstype = {
  userName: string;
  password: string;
};
export const signInService = async (
  data: loginDetailstype
): Promise<AxiosResponse> => {
  const response = await baseURL.post("/User/TestLogUser", data);
  return response;
};
