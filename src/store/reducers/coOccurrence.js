import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  loading: false,
  searchComplete: false,
  coOccurredWords: {},
  error: false
};

const updateCoCoOccurredWords = (state, payload) => {
  return updateObject(state, {
    coOccurredWords: payload.coOccurredWords,
    loading: false,
    searchComplete: true
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CO_OCCURRENCE_SEARCH_START:
      console.log("co-occurrence search start");
      return {
        ...state,
        loading: true
      };

    case actionTypes.CO_OCCURRENCE_SEARCH_SUCCESS:
        console.log("co-occurrence search complete");
        return updateCoCoOccurredWords(state, action);

    case actionTypes.CO_OCCURRENCE_SEARCH_FAIL:
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
