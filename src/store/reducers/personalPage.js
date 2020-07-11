import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../util/utility'

const initialState = {
  current: "Project Initiative"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDE_NAV_CLICK:
      console.log("SIDE_NAV_CLICK");
      return updateObject(state, {
        current: action.payload
      });

    default:
      return state
  }
};

export default reducer