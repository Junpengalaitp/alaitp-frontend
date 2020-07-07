import {updateObject} from "../../util/utility";
import store from "../../store";
import * as actionTypes from "./actionTypes";

export const updateChart = (state, payload) => {
  let chartOptions = {};
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
};

export const updateJobKeyword = (state, payload) => {
  return updateObject(state, {
    ...state,
    keywordIdxByJob: {
      ...state.keywordIdxByJob,
      [payload.jobKeyword.jobId]: payload.jobKeyword.keywordList
    }
  })
};

export const onReceiveJobKeyword = msg => {
  const payload = JSON.parse(msg.body);
  if (payload.msgType === "jobKeyword") {
    store.dispatch({type: actionTypes.JOB_KEYWORD_UPDATE, jobKeyword: payload})
  }
}

export const onReceiveChartOption = msg => {
  if (msg.body === "session end") {
    store.dispatch({type: actionTypes.SOCKETS_DISCONNECT})
    return;
  }
  const payload = JSON.parse(msg.body);
  store.dispatch({type: actionTypes.CHART_UPDATE, chartOptions: payload})
}