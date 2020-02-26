import Axios from 'axios'

import * as actionTypes from './actionTypes'

export const setCoCoOccurredWords = coOccurredWords => {
  return {
    type: actionTypes.COOCCURRENCE_SEARCH_SUCCESS,
    coOccurredWords: coOccurredWords.words,
  }
}

export const searchCoCoOccurrence = (word, categories='all', count=10) => {
  return dispatch => {
    console.log(`get ${count} co-occurred words for word: ${word} in categories: ${categories}`)
    Axios.get(`http://127.0.0.1:8888/co_occurrence_matrix/most-correlated-words/${word}/${count}/${categories}`)
      .then(response => {
        console.log(response.data)
        dispatch(setCoCoOccurredWords(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  }
}