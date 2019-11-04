import * as actionTypes from '../actions/actions'

const initialState = {
  searching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return {
        ...state,
        searching: !state.searching
      }
  
    default:
      return state
  }
}

export default reducer