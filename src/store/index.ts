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
sagaMiddleware.run(rootSaga);
export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state
