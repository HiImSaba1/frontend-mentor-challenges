import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./js/App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./js/StateProvider";
import reducer, { initialState } from "./js/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();