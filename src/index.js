import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import ErrorBoundary from "./ErrorBoundary";

Bugsnag.start({
  apiKey: "490338892dc4691e4b834d0f18d89266",
  plugins: [new BugsnagPluginReact()],
  releaseStage: process.env.REACT_APP_ENVIRONMENT,
  // autoDetectErrors: false,
});

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
