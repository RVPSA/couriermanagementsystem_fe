import { USER_SIGNIN, USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from "../actions";

type stateType = {
  isUserSignIn: boolean;
  isSignInUserFail: boolean;
  isSignInUserSuccess: boolean;
  userDetails: { userName?: string; password?: string };
  error: string;
};

declare global {
  type actionType = {
    type: string;
    data?: any;
  };
}

const initialState: stateType = {
  isUserSignIn: false,
  isSignInUserFail: false,
  isSignInUserSuccess: false,
  userDetails: {},
  error: "",
};

export const loginReducer = (
  state: stateType = initialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        isUserSignIn: true,
      };
    case USER_SIGNIN_SUCCESS:
      let signIndata = action.data;
      return {
        ...state,
        isUserSignIn: false,
        isSignInUserSuccess: true,
        userDetails: signIndata,
      };
    case USER_SIGNIN_FAIL:
      let signInError = action.data;
      return {
        ...state,
        isUserSignIn: false,
        isSignInUserFail: true,
        error: signInError,
      };
    default:
      return state;
  }
};
