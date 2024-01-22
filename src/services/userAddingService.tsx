import { AxiosResponse } from "axios";
import { backendUrl } from "./httpClient";

type addAdminDetails = {
  userName: string;
  password: string;
  email: string;
};

export const addAdminService = async (
  data: addAdminDetails
): Promise<AxiosResponse> => {
  const response: AxiosResponse = await backendUrl.post("Admin/AddAdmin", data);
  return response;
};
