import Axios from "axios";

import * as actionTypes from './actionTypes'

export const setKeywords = keywords => {
  return {
    type: actionTypes.KEYWORD_SEARCH_SUCCESS,
    keywords: keywords
  };
};

export const searchKeywords = (jobDescription) => {
  if (jobDescription === '' || jobDescription === undefined) jobDescription = {desc: 'description'}
  return dispatch => {
    Axios.post(`http://localhost:5000/keywords`, jobDescription)
      .then(response => {
        console.log(response)
        dispatch(setKeywords(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  };
};