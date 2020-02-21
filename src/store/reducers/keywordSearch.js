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
      otherLanguage: payload.keywords.keywordByLabel.OTHER_LANGUAGE,
      library: payload.keywords.keywordByLabel.LIBRARY,
      framework: payload.keywords.keywordByLabel.FRAMEWORK,
      division: payload.keywords.keywordByLabel.DIVISION,
      position: payload.keywords.keywordByLabel.POSITION,
      dataStorage: payload.keywords.keywordByLabel.DATA_STORAGE,
      dataTransmission: payload.keywords.keywordByLabel.DATA_TRANSMISSION,
      server: payload.keywords.keywordByLabel.SERVER,
      platform: payload.keywords.keywordByLabel.PLATFORM,
      approach: payload.keywords.keywordByLabel.APPROACH,
      softwareEngineering: payload.keywords.keywordByLabel.SOFTWARE_ENGINEERING,
      computerScience: payload.keywords.keywordByLabel.COMPUTER_SCIENCE,
      ai: payload.keywords.keywordByLabel.AI,
      os: payload.keywords.keywordByLabel.OS,
      architect: payload.keywords.keywordByLabel.ARCHITECT,
      quality: payload.keywords.keywordByLabel.QUALITY,
      protocol: payload.keywords.keywordByLabel.PROTOCOL,
      tool: payload.keywords.keywordByLabel.TOOL,
      softwareProduct: payload.keywords.keywordByLabel.SOFTWARE_PRODUCT,
      workExperience: payload.keywords.keywordByLabel.WORK_EXPERIENCE,
      softSkill: payload.keywords.keywordByLabel.SOFT_SKILL,
      offer: payload.keywords.keywordByLabel.OFFER,
      team: payload.keywords.keywordByLabel.TEAM,
      company: payload.keywords.keywordByLabel.COMPANY,
    },
    jobKeywordIndex: payload.keywords.keywordByJob,
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