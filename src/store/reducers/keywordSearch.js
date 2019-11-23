import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  keywords: {},
  error: false
}

const setKeywords = (state, payload) => {

  return updateObject(state, {
    keywords: {
      programmingLanguage: payload.keywords.PROGRAMMING_LANGUAGE,
      libraryOrFramework: payload.keywords.LIBRARY_OR_FRAMEWORK,
      division: payload.keywords.DIVISION,
      dataStorage: payload.keywords.DATA_STORAGE,
      platform: payload.keywords.PLATFORM,
      approach: payload.keywords.APPROACH
    },
    jobList: payload.jobList,
    loading: false,
    searchComplete: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.KEYWORD_SEARCH_START:
      console.log("keyword search start")
      return {
        ...state,
        loading: true
      }

    case actionTypes.KEYWORD_SEARCH_SUCCESS:
        console.log("keyword search complete")
        return setKeywords(state, action)

    case actionTypes.KEYWORD_SEARCH_FAIL:
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