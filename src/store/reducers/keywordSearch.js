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
  // console.log('payload is ' + JSON.stringify(payload))
  const keywordsByLabel = {
    programmingLanguage: [],
    libraryOrFramework: [],
    division: [],
    dataStorage: [],
    platform: [],
    approach: []
  }

  const jobKeywords = Object.values(payload.keywords)
  for (const jobKeyword of jobKeywords) {
    if (jobKeyword.PROGRAMMING_LANGUAGE !== null && jobKeyword.PROGRAMMING_LANGUAGE !== undefined) {
      keywordsByLabel.programmingLanguage.push(...Object.values(jobKeyword.PROGRAMMING_LANGUAGE))
    }
    if (jobKeyword.LIBRARY_OR_FRAMEWORK !== null && jobKeyword.LIBRARY_OR_FRAMEWORK !== undefined) {
      keywordsByLabel.libraryOrFramework.push(...Object.values(jobKeyword.LIBRARY_OR_FRAMEWORK))
    }
    if (jobKeyword.DIVISION !== null && jobKeyword.DIVISION !== undefined) {
      keywordsByLabel.division.push(...Object.values(jobKeyword.DIVISION))
    }
    if (jobKeyword.PLATFORM !== null && jobKeyword.PLATFORM !== undefined) {
      keywordsByLabel.platform.push(...Object.values(jobKeyword.PLATFORM))
    }
    if (jobKeyword.APPROACH !== null && jobKeyword.APPROACH !== undefined) {
      keywordsByLabel.approach.push(...Object.values(jobKeyword.APPROACH))
    }
    if (jobKeyword.DATA_STORAGE !== null && jobKeyword.DATA_STORAGE !== undefined) {
      keywordsByLabel.dataStorage.push(...Object.values(jobKeyword.DATA_STORAGE))
    }
  }

  return updateObject(state, {
    keywords: {
      programmingLanguage: keywordsByLabel.programmingLanguage,
      libraryOrFramework: keywordsByLabel.libraryOrFramework,
      division: keywordsByLabel.division,
      dataStorage: keywordsByLabel.dataStorage,
      platform: keywordsByLabel.platform,
      approach: keywordsByLabel.approach
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