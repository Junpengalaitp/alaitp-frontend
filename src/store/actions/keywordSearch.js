import Axios from "axios";

import * as actionTypes from './actionTypes'

export const setKeywords = keywords => {
  return {
    type: actionTypes.KEYWORD_SEARCH_SUCCESS,
    keywords: keywords
  };
};

export const searchKeywords = (searchInput) => {
  if (searchInput === '') searchInput = 'remotive'
  return dispatch => {
    Axios.get(`http://127.0.0.1:5000/keywords/${searchInput}`)
      .then(response => {
        console.log(response)
        dispatch(setKeywords(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  };
};