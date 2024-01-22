import { ADD_ADMIN, ADD_ADMIN_FAIL, ADD_ADMIN_SUCCESS } from "../actions";

type stateType = {
  isAddAdmin: boolean;
  isAddAdminSuccess: boolean;
  isAddAdminFail: boolean;
  addAdminError: string;
};

const initialState: stateType = {
  isAddAdmin: false,
  isAddAdminSuccess: false,
  isAddAdminFail: false,
  addAdminError: "",
};

export const userAddingReducer = (
  state: stateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case ADD_ADMIN:
      return {
        ...state,
        isAddAdmin: true,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        isAddAdmin: false,
        isAddAdminSuccess: true,
      };
    case ADD_ADMIN_FAIL:
      let addAdminError = action.data;
      return {
        ...state,
        isAddAdmin: false,
        isAddAdminFail: true,
        addAdminError: addAdminError,
      };
    default:
      return state;
  }
};
