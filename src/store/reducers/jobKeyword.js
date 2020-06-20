import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  chartData: {},
  keywordIdxByJob: {}
}

const updateChart = (state, payload) => {
  let chartOptions = {}
  if (payload.chartOptions.length === 0) {
    chartOptions = state.chartData.chartOptions
  } else {
    for (const chartOption of payload.chartOptions) {
      if (chartOption === null) {
        // chartOption null meaning the category has less than 10 keywords, do not update that category chart
        continue
      }
      chartOptions[chartOption.category] = {
        yAxisData: chartOption.keyword,
        xAxisData: chartOption.count
      }
    }
  }

  return updateObject(state, {
    ...state,
    chartData: {
      ...state.chartData,
      ...chartOptions
    },
  })
}

const updateJobKeyword = (state, payload) => {
  return updateObject(state, {
    ...state,
    keywordIdxByJob: {
      ...state.keywordIdxByJob,
      [payload.jobKeyword.jobId]: payload.jobKeyword.keywordList
    }
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHART_UPDATE:
      return updateChart(state, action)

    case actionTypes.JOB_KEYWORD_UPDATE:
      return updateJobKeyword(state, action)

    default:
      return state
  }
}

export default reducer