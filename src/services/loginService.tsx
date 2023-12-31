import { AxiosResponse } from "axios";
import { backendUrl } from "./httpClient";

type loginDetailstype = {
  userName: string;
  password: string;
};
export const signInService = async (
  data: loginDetailstype
): Promise<AxiosResponse> => {
  const response: AxiosResponse = await backendUrl.post(
    "/User/LoginUSer",
    data
  );
  return response;
};
