import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import reducer from "./reducers";
import App from "./components/App";
import middleware from "./middleware";

const store = legacy_createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
