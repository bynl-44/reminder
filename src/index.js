import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
