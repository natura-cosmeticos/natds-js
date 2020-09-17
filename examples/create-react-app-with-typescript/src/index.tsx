import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "@naturacosmeticos/natds-web";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
