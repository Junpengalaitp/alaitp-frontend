import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  title: {
    text: 'Programming Language',
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
      type: 'value',
      boundaryGap: [0, 0.05]
  },
  yAxis: {
      type: 'category',
      data: []
  },
  series: [
      {
          type: 'bar',
          data: []
      }
  ]
}

const updateChart = (state, payload) => {
  console.log("payload: ", payload)
  return updateObject(state, {
    yAxis: {
      type: 'category',
      data: payload.keyword
    },
    series: [
        {
            type: 'bar',
            data: payload.count
        }
    ]
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