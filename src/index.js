import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store";
import { Provider } from "react-redux";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
