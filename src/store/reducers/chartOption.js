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
      data: ['Python', 'Java', 'JavaScript', 'Ruby', 'C#']
  },
  series: [
      {
          type: 'bar',
          data: []
      }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHART_UPDATE_START:
      return {
        ...state,
        update: true,
        series: [
          {
              type: 'bar',
              data: [1820 + Math.random() * 10, 2348 + Math.random() * 10, 2903 + Math.random() * 10, 10497 + Math.random() * 10, 13174 + Math.random() * 10]
          }
        ],
      }

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