import * as actionTypes from '../actions/actionTypes'
import {updateObject} from "../../util/utility";

const initialState = {
  language: "en"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_LANGUAGE:
      const switchTo = state.language === "en" ? "cn" : "en";
      return updateObject(state, {
        language: switchTo
      });

    default:
      return state
  }
};

export default reducer