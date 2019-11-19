import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  jobList: [],
  error: false
}

const setJobList = (state, payload) => {
  return updateObject(state, {
    jobList: payload.jobList,
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
        return setJobList(state, action)

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