import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  orderedKeywordByCategory: {},
  keywordIndexByJob: null,
  cacheError: false,
  error: false
}

const setKeywords = (state, payload) => {
  const allKeywordsByCategory = payload.keywords.orderedKeywordByCategory

  return updateObject(state, {
    orderedKeywordByCategory: {
      programmingLanguage: allKeywordsByCategory.PROGRAMMING_LANGUAGE,
      otherLanguage: allKeywordsByCategory.OTHER_LANGUAGE,
      library: allKeywordsByCategory.LIBRARY,
      framework: allKeywordsByCategory.FRAMEWORK,
      division: allKeywordsByCategory.DIVISION,
      position: allKeywordsByCategory.POSITION,
      dataStorage: allKeywordsByCategory.DATA_STORAGE,
      dataTransmission: allKeywordsByCategory.DATA_TRANSMISSION,
      server: allKeywordsByCategory.SERVER,
      platform: allKeywordsByCategory.PLATFORM,
      approach: allKeywordsByCategory.APPROACH,
      softwareEngineering: allKeywordsByCategory.SOFTWARE_ENGINEERING,
      computerScience: allKeywordsByCategory.COMPUTER_SCIENCE,
      ai: allKeywordsByCategory.AI,
      os: allKeywordsByCategory.OS,
      architect: allKeywordsByCategory.ARCHITECT,
      quality: allKeywordsByCategory.QUALITY,
      protocol: allKeywordsByCategory.PROTOCOL,
      tool: allKeywordsByCategory.TOOL,
      softwareProduct: allKeywordsByCategory.SOFTWARE_PRODUCT,
      workExperience: allKeywordsByCategory.WORK_EXPERIENCE,
      softSkill: allKeywordsByCategory.SOFT_SKILL,
      offer: allKeywordsByCategory.OFFER,
      team: allKeywordsByCategory.TEAM,
      company: allKeywordsByCategory.COMPANY,
    },
    keywordIndexByJob: payload.keywords.keywordIndexByJob,
    jobMap: payload.jobMap,
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
        
    case actionTypes.JOB_SEARCH_CACHE_FAIL:
        console.log("job cache fail, trying post job description")
        return {
          ...state,
          cacheError: true,
          searchComplete: false
        }

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