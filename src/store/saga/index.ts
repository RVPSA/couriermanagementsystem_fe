import { all } from "redux-saga/effects";
import { watchUserSignIn } from "./loginSaga";

//need to add all saga (middleware)
export default function* rootSaga() {
  yield all([watchUserSignIn()]);
}
