import { call, put, takeLatest } from "redux-saga/effects";
import { USER_SIGNIN, USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from "../actions";
import { signInService } from "../../services/loginService";
import { AxiosResponse } from "axios";

declare global {
  type incomeType = {
    type: string;
    data: any;
  };
}

export function* userSignIn(value: incomeType) {
  const { data } = value;
  try {
    const response: AxiosResponse = yield call(signInService, data);
    yield put({
      type: USER_SIGNIN_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({ type: USER_SIGNIN_FAIL, data: "User Signin Fail" });
  }
}

export function* watchUserSignIn() {
  yield takeLatest(USER_SIGNIN, userSignIn);
}
