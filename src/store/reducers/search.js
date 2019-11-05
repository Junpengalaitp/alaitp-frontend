import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  keywords: null,
  error: false
}


const setKeywords = (state, payload) => {
  return updateObject(state, {
    keywords: {
      programmingLanguage: Object.keys(payload.keywords.PROGRAMMING_LANGUAGE),
      libraryOrFramework: Object.keys(payload.keywords.LIBRARY_OR_FRAMEWORK),
      division: Object.keys(payload.keywords.DIVISION),
      dataStorage: Object.keys(payload.keywords.DATA_STORAGE),
      platform: Object.keys(payload.keywords.PLATFORM),
      approach: Object.keys(payload.keywords.APPROACH)
    },
    loading: false,
    searchComplete: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      console.log("search start")
      return {
        ...state,
        loading: true
      }

    case actionTypes.SEARCH_SUCCESS:
        console.log("search complete")
        return setKeywords(state, action)

    case actionTypes.SEARCH_FAIL:
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