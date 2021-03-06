import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import jobReducer from "./store/reducers/jobSearch";
import jobKeywordReducer from "./store/reducers/jobKeyword";
import globalParamReducer from "./store/reducers/globalParam";
import personalPageReducer from "./store/reducers/personalPage";
import i18nReducer from "./store/reducers/i18n";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  jobDescription: jobReducer,
  jobKeyword: jobKeywordReducer,
  globalParam: globalParamReducer,
  personalPage: personalPageReducer,
  i18n: i18nReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store;