import { ADD_ADMIN } from "./type";

type addAdminDetails = {
  userName: string;
  password: string;
  email: string;
};

export const addAdmin = (data: addAdminDetails): actionType => {
  return {
    type: ADD_ADMIN,
    data: data,
  };
};
