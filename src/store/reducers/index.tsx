import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

//need to add action wise reducers
const rootreducer = combineReducers({
  loginreducer: loginReducer,
});

const reducer = () => {
  return rootreducer;
};

export default reducer;
