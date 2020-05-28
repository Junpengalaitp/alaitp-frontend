import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './../../shared/utility'

const initialState = {
  programmingLanguage: [],
  otherLanguage: [],
  library: [],
  framework: [],
  division: [],
  position: [],
  dataStorage: [],
  dataTransmission: [],
  server: [],
  platform: [],
  approach: [],
  softwareEngineering: [],
  computerScience: [],
  ai: [],
  os: [],
  architect: [],
  quality: [],
  protocol: [],
  tool: [],
  softwareProduct: [],
  workExperience: [],
  softSkill: [],
  offer: [],
  team: [],
  company: [],
}

const updateKeywords = (state, payload) => {
  const keywordList = payload.jobKeywords.keywordList
  const keywords = []
  for (const keywordObj of keywordList) {
    if (keywordObj.category === "PROGRAMMING_LANGUAGE") {
      keywords.push(keywordObj.keyword)
    }
  }
  return updateObject(state, {
    programmingLanguage: state.programmingLanguage.concat(keywords)
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WS_MESSAGE:
      return updateKeywords(state, action)

    default:
      return state
  }
}

export default reducer