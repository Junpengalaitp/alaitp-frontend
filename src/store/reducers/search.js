import * as actionTypes from '../actions/actions'
import { updateObject } from './../../shared/utility';
import { searchKeywords } from '../actions/search';

const initialState = {
  searching: false,
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
    searching: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return {
        ...state,
        searching: true
      }

    case actionTypes.SEARCH_SUCCESS:
        console.log("search complete")
        return setKeywords(state, action)

    case actionTypes.SEARCH_END:
        return {
          ...state,
          loading: false
        }
  
    default:
      return state
  }
}

export default reducer