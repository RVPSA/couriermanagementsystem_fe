import { call, put, takeLatest } from "redux-saga/effects";
import { USER_SIGNIN, USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from "../actions";
import { signInService } from "../../services/loginService";
import { AxiosResponse } from "axios";

// declare global {
//   type incomeType = {
//     type: string;
//     data: any;
//   };
//   type generalResponse = {
//     statusCode: number;
//     message: string;
//     result: any;
//   };
// }

export function* userSignIn(value: sagaInputType) {
  const { data } = value;
  try {
    const response: AxiosResponse = yield call(signInService, data);

    let receivedData: generalResponse = response.data;

    if (receivedData.statusCode === 200 && receivedData.message === "Success") {
      localStorage.setItem("currentUser", JSON.stringify(receivedData.result));
      window.location.replace(
        import.meta.env.VITE_DEVELOPMENT_THIS_URL + "/maintaince"
      );
      yield put({
        type: USER_SIGNIN_SUCCESS,
        data: response.data,
      });
    } else {
      throw receivedData.message;
    }
  } catch (error) {
    yield put({ type: USER_SIGNIN_FAIL, data: "User Signin Fail" });
  }
}

export function* watchUserSignIn() {
  yield takeLatest(USER_SIGNIN, userSignIn);
}
