import Axios from 'axios'

import * as actionTypes from './actionTypes'
import { serverUrl } from '../../config'

export const setCoCoOccurredWords = coOccurredWords => {
  return {
    type: actionTypes.COOCCURRENCE_SEARCH_SUCCESS,
    coOccurredWords: coOccurredWords.words,
  }
}

export const searchCoCoOccurrence = (word, categories='all', count=20) => {
  word = word.replace('#', '%23')
  return dispatch => {
    console.log(`get ${count} co-occurred words for word: ${word} in categories: ${categories}`)
    Axios.get(`${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${count}/${categories}`)
      .then(response => {
        console.log(response.data)
        dispatch(setCoCoOccurredWords(response.data))
      })
      .catch(error => {
        console.log('error happened during searching keywords' + error)
      })
  }
}