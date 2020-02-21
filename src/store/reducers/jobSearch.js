import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  jobMap: {},
  error: false
}

const setJobMap = (state, payload) => {
  return updateObject(state, {
    jobMap: payload.jobMap,
    loading: false,
    searchComplete: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOB_SEARCH_START:
      console.log("job search start")
      return {
        ...state,
        loading: true
      }

    case actionTypes.JOB_SEARCH_SUCCESS:
        console.log("job search complete")
        return setJobMap(state, action)

    case actionTypes.JOB_SEARCH_FAIL:
        return {
          ...state,
          loading: false,
          searchComplete: true
        }
  
    default:
      return state
  }
}

export default reducer