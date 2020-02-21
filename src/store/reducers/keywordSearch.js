import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'
import {getAllKeywordsByCategory} from "../../service/jobKeywordService";

const initialState = {
  searchComplete: false,
  loading: false,
  searchInput: '',
  keywords: {},
  jobKeywordIndex: null,
  error: false
}

const setKeywords = (state, payload) => {
  // console.log("payload: " + JSON.stringify(payload))
  const allKeywordsByCategory = getAllKeywordsByCategory(payload.keywords)
  // console.log("allKeywordsByCategory: " + JSON.stringify(allKeywordsByCategory))

  return updateObject(state, {
    keywords: {
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
    jobKeywordIndex: payload.keywords,
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