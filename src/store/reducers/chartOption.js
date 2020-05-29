import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  option: {
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
            data: [18203, 23489, 29034, 104970, 131744]
        }
    ]
  },
  updateStart: false,
  updateComplete: false
}

// const updateKeywords = (state, payload) => {
//   const keywordList = payload.jobKeywords.keywordList
//   const keywords = []
//   for (const keywordObj of keywordList) {
//     if (keywordObj.category === "PROGRAMMING_LANGUAGE") {
//       keywords.push(keywordObj.keyword)
//     }
//   }
//   return updateObject(state, {
//     programmingLanguage: state.programmingLanguage.concat(keywords)
//   })
// }

const updateChart = (state, payload) => {

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WS_MESSAGE:
      console.log("reached chartOption reducer")
      return {
        ...state,
        series: [18203 / 2, 23489 / 2, 29034 / 2, 104970 / 2, 131744 / 2]
      }

    default:
      return state
  }
}

export default reducer