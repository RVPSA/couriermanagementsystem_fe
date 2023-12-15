import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./saga";
import { configureStore } from "@reduxjs/toolkit";

const reducers = reducer();
const sagaMiddleware = createSagaMiddleware();

//store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
  devTools: true,
});

export default store;
