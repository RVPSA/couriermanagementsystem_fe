import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userAddingReducer } from "./userAddingReducer";

//need to add action wise reducers
const rootreducer = combineReducers({
  loginreducer: loginReducer,
  userReducer: userAddingReducer,
});

const reducer = () => {
  return rootreducer;
};

export default reducer;
