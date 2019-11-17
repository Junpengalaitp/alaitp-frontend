import Axios from "axios";

import * as actionTypes from './actionTypes'

export const setJobs = keywords => {
  return {
    type: actionTypes.KEYWORD_SEARCH_SUCCESS,
    keywords: keywords
  };
};

export const searchJobs = (searchInput) => {
  if (searchInput === '') searchInput = 'Software Engineer'
  return dispatch => {
    Axios.get(`http://127.0.0.1:8811/job-list/${searchInput}`)
      .then(response => {
        console.log(response)
        // dispatch(setJobs(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  };
};