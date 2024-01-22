import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_ADMIN, ADD_ADMIN_FAIL, ADD_ADMIN_SUCCESS } from "../actions";
import { addAdminService } from "../../services/userAddingService";
import { AxiosResponse } from "axios";

export function* addAdmin(value: sagaInputType) {
  const { data } = value;

  try {
    const response: AxiosResponse = yield call(addAdminService, data);

    let receivedData: generalResponse = response.data;

    if (response.status == 200 && receivedData.statusCode === 200) {
      yield put({ type: ADD_ADMIN_SUCCESS, data: receivedData.result });
    } else {
      yield put({ type: ADD_ADMIN_FAIL, data: receivedData.message });
    }
  } catch (error) {
    yield put({ type: ADD_ADMIN_FAIL, data: "Add Admin Fail" });
  }
}

export function* watchAddAdmin() {
  yield takeLatest(ADD_ADMIN, addAdmin);
}
