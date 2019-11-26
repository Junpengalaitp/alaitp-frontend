import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  keywords: {},
  jobKeywordIndex: null,
  error: false
}

const setKeywords = (state, payload) => {

  return updateObject(state, {
    keywords: {
      programmingLanguage: payload.keywords.keywordByLabel.PROGRAMMING_LANGUAGE,
      libraryOrFramework: payload.keywords.keywordByLabel.LIBRARY_OR_FRAMEWORK,
      division: payload.keywords.keywordByLabel.DIVISION,
      dataStorage: payload.keywords.keywordByLabel.DATA_STORAGE,
      platform: payload.keywords.keywordByLabel.PLATFORM,
      approach: payload.keywords.keywordByLabel.APPROACH,
      computerScience: payload.keywords.keywordByLabel.COMPUTER_SCIENCE,
      os: payload.keywords.keywordByLabel.OS,
      protocol: payload.keywords.keywordByLabel.PROTOCOL,
      workExperience: payload.keywords.keywordByLabel.WORK_EXPERIENCE,
    },
    jobKeywordIndex: payload.keywords.keywordByJob,
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
        searchComplete: false,
        loading: true
      }

    case actionTypes.KEYWORD_SEARCH_SUCCESS:
        console.log("keyword search complete")
        return setKeywords(state, action)

    case actionTypes.KEYWORD_SEARCH_FAIL:
        return {
          ...state,
          loading: false,
          searchComplete: false
        }
  
    default:
      return state
  }
}

export default reducer