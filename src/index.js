import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./components/app";
import history from "./history";
import store from "./store/model";

const Wrapper = () => (
  <StoreProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreProvider>
);

const render = () => {
  ReactDOM.render(<Wrapper />, document.querySelector("#brewcat"));
};

render();
