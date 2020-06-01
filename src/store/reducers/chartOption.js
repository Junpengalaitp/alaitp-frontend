import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  PROGRAMMING_LANGUAGE: {}
  // yAxis: {
  //     type: 'category',
  //     data: []
  // },
  // series: [
  //     {
  //       type: 'bar',
  //       data: []
  //     }
  // ]
}

const updateChart = (state, payload) => {
  console.log("payload: ", payload.category, payload.keyword, payload.count)
  return updateObject(state, {
    ...state,
    [payload.category]: {
      yAxisData: payload.keyword,
      xAxisData: payload.count
    }
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHART_UPDATE_START:
      return updateChart(state, action)

    case actionTypes.CHART_UPDATE_SUCCESS:
      console.log("reducer: CHART_UPDATE_SUCCESS")
      return {
        ...state,
        update: false
      }

    default:
      return state
  }
}

export default reducer