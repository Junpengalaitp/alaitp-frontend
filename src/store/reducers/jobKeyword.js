import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  chartData: {},
  keywordIdxByJob: {}
}

const updateChart = (state, payload) => {
  const chartOptions = {}
  for (const chartOption of payload.chartOptions) {
    chartOptions[chartOption.category] = {
      yAxisData: chartOption.keyword,
      xAxisData: chartOption.count
    }
  }
  return updateObject(state, {
    ...state,
    chartData: {
      ...state.chartData,
      ...chartOptions
    },
    keywordIdxByJob: {
      ...state.keywordIdxByJob,
      [payload.jobKeyword.jobId]: payload.jobKeyword.keywordList
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