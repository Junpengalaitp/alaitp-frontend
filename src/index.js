import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import keywordReducer from './store/reducers/keywordSearch'
import jobReducer from './store/reducers/jobSearch'
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  keyword: keywordReducer,
  jobDescription: jobReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
