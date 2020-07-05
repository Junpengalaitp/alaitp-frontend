import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import jobReducer from "./store/reducers/jobSearch";
import jobKeywordReducer from "./store/reducers/jobKeyword";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  jobDescription: jobReducer,
  jobKeyword: jobKeywordReducer,
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store;