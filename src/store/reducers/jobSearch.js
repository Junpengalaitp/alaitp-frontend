import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../util/utility'
import {setJobMap} from "../actions/jobSearch";

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  jobSearchId: null,
  jobMap: {},
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOB_SEARCH_START:
      console.log("job search start");
      return updateObject(state, {
        loading: true,
        jobMap: {}
      });

    case actionTypes.JOB_SEARCH_SUCCESS:
        console.log("job search complete");
        return setJobMap(state, action);

    case actionTypes.JOB_SEARCH_FAIL:
        return {
          ...state,
          loading: false,
          searchComplete: true
        };
  
    default:
      return state
  }
};

export default reducer