import Axios from "axios";

import * as actionTypes from './actionTypes'

export const setJobs = jobList => {
  return {
    type: actionTypes.JOB_SEARCH_SUCCESS,
    jobList: jobList
  };
};

export const searchJobs = (searchInput) => {
  if (searchInput === '') searchInput = 'Software Engineer'
  return dispatch => {
    Axios.get(`http://127.0.0.1:8811/job-list/${searchInput}`)
      .then(response => {
        console.log(response.data)
        console.log("job search success")
        dispatch(setJobs(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  };
};