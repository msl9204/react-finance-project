import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

const Root = () => (
    <BrowserRouter>
        <Provider store={createStoreWithMiddleware(Reducer, devTools)}>
            <App />
        </Provider>
    </BrowserRouter>
);

export default Root;
