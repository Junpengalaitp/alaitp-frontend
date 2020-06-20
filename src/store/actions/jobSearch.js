import Axios from "axios";

import * as actionTypes from './actionTypes'
import { serverUrl } from "../../config";

export const setJobs = (jobMap, jobSearchId) => {
  return {
    type: actionTypes.JOB_SEARCH_SUCCESS,
    jobMap: jobMap,
    jobSearchId: jobSearchId,
  };
};

export const searchJobs = searchInput => {
  if (searchInput === '') searchInput = 'Software Engineer';
  return dispatch => {
    const uuid = require('uuid/v4');
    const requestId = uuid();
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