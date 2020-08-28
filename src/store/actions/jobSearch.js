import Axios from "axios";

import * as actionTypes from './actionTypes'
import {updateObject} from "../../util/utility";
import {jobDescriptionApiUrl} from "../../constant/url";

export const setJobs = (jobMap, jobSearchId) => {
  return {
    type: actionTypes.JOB_SEARCH_SUCCESS,
    jobMap: jobMap,
    jobSearchId: jobSearchId,
  };
};

export const searchJobs = (searchInput, amount, requestId) => {
  if (searchInput === '') {
    searchInput = 'Software Engineer';
  }
  searchInput = searchInput.replace('#', '%23')
  return dispatch => {
    console.log("requestId: " + requestId);
    Axios.get(`${jobDescriptionApiUrl}/${searchInput}/${amount}/${requestId}`)
      .then(response => {
        dispatch(setJobs(response.data, requestId))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  };
};
export const setJobMap = (state, payload) => {
  return updateObject(state, {
    jobMap: payload.jobMap,
    jobSearchId: payload.jobSearchId,
    loading: false,
    searchComplete: true
  })
};