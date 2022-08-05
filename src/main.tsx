import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./assets/css-bundles/index.css";
import "./assets/css-bundles/dark-theme.css";
import "./assets/css-bundles/light-theme.css";
import "./assets/css-bundles/layout.css";

import "./styles/index.less";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
