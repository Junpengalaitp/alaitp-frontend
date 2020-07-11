import Axios from "axios";

import * as actionTypes from './actionTypes'
import {updateObject} from "../../util/utility";
import {serverUrl} from "../../constant/url";

export const setJobs = (jobMap, jobSearchId) => {
  return {
    type: actionTypes.JOB_SEARCH_SUCCESS,
    jobMap: jobMap,
    jobSearchId: jobSearchId,
  };
};

export const searchJobs = (searchInput, requestId) => {
  if (searchInput === '') searchInput = 'Software Engineer';
  return dispatch => {
    console.log("requestId: " + requestId);
    Axios.get(`${serverUrl}/job-description-api/job-list/${searchInput}/${requestId}`)
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