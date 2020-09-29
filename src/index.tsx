import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "components/Hello";
import { App } from "app";
import { StoreWrapper } from "store";
import "./index.scss";

const Root = () => {
  return (
    <StoreWrapper>
      <Hello />
      <App />
    </StoreWrapper>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
