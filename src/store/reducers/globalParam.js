import * as actionTypes from '../actions/actionTypes'
import {updateObject} from "../../util/utility";

/**
 * hold global params
 * @type {{moreChart: boolean, jobsPerPage: number}}
 */
const initialState = {
  moreChart: false,
  jobsPerPage: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEE_MORE:
      return updateObject(state, {
        moreChart: true,
        jobsPerPage: 20
      });

    case actionTypes.SEE_LESS:
      return updateObject(state, {
        moreChart: false,
        jobsPerPage: 10
      });

    default:
      return state
  }
};

export default reducer