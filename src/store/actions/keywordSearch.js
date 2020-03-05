import Axios from "axios"

import * as actionTypes from './actionTypes'
import { serverUrl } from "../../config"

export const setKeywords = keywords => {
  return {
    type: actionTypes.KEYWORD_SEARCH_SUCCESS,
    keywords: keywords
  }
}

export const setKeywordOnCacheFail = () => {
  return {
    type: actionTypes.JOB_SEARCH_CACHE_FAIL,
  }
}


/**
 * job descriptions are cache in redis by requestId after job search success,
 * send the requestId to job-keyword project
 * @param {string} requestId 
 */
export const getJobKeyword = requestId => {
  return dispatch => {
    Axios.get(`${serverUrl}/job-keyword/keywords/${requestId}`)
      .then(response => {
        console.log("getJobKeyword response", response)
        if (response.data.error === true) {
          console.log("requestId cache failed, trying to post jobs", response)
          dispatch(setKeywordOnCacheFail())
        } else {
          dispatch(setKeywords(response.data))
        }
      })
      .catch(error => {
        console.log(`error happened during searching keywords, request id: ${requestId}`, error)
      })
  }
}

/**
 * Post all jobDescription to backend to get job keywords,
 * backup plan if get keywords by requestId fails
 * @param {object} jobDescription 
 */
export const postJobKeyword = jobDescription => {
  if (jobDescription === '' || jobDescription === undefined) jobDescription = {desc: 'description'}
  return dispatch => {
    Axios.post(`${serverUrl}/job-keyword/keywords`, jobDescription)
      .then(response => {
        console.log("postJobKeyword response", response)
        dispatch(setKeywords(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  }
}
