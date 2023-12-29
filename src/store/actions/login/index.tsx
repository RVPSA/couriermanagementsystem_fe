import { USER_SIGNIN } from "./type";

type loginDetailstype = {
  userName: string;
  password: string;
};
declare global {
  type returnType = {
    type: string;
    data?: any;
  };
}

export const userSignIn = (data: loginDetailstype): returnType => {
  return {
    type: USER_SIGNIN,
    data: data,
  };
};
