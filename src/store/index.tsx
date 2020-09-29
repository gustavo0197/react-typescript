import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { counterStore } from "./counter/counter.store";

const reducers = combineReducers({
  counterStore,
});

const store = createStore(reducers);

export const StoreWrapper = (props: JSX.ElementChildrenAttribute) => {
  return <Provider store={store}>{props.children}</Provider>;
};
