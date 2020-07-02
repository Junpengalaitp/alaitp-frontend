import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";
import store from "../../store";

const initialState = {
  chartData: {},
  keywordIdxByJob: {}
};

const updateChart = (state, payload) => {
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

const updateJobKeyword = (state, payload) => {
  return updateObject(state, {
    ...state,
    keywordIdxByJob: {
      ...state.keywordIdxByJob,
      [payload.jobKeyword.jobId]: payload.jobKeyword.keywordList
    }
  })
};

let socket;
let stompClient;

const onReceive = msg => {
  const payload = JSON.parse(msg.body);
  if (payload.msgType === "jobKeyword") {
    store.dispatch({ type: actionTypes.JOB_KEYWORD_UPDATE, jobKeyword: payload})
  } else if (payload.msgType === "res") {

  } else {
    store.dispatch({type: actionTypes.CHART_UPDATE, chartOptions: payload})
  }
}

const onReceiveUser = msg => {
  console.log(msg)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOCKETS_CONNECT:
      socket = new SockJS("http://localhost:8816/keyword-ws");
      stompClient = Stomp.over(socket);
      stompClient.connect({}, () => {
        stompClient.subscribe('/topic/keyword', onReceive);
        stompClient.subscribe('/user/topic/keyword', onReceiveUser);
      });
      return state;

    case actionTypes.SOCKETS_MESSAGE_SEND:
      stompClient.send("/app/keyword", {}, "get keywords");
      return state;
    case actionTypes.SOCKETS_MESSAGE_RECEIVE:
      return state;

    case actionTypes.CHART_CLEAR:
      return updateObject(state, {
        chartData: {},
        keywordIdxByJob: {}
      })

    case actionTypes.CHART_UPDATE:
      return updateChart(state, action);

    case actionTypes.JOB_KEYWORD_UPDATE:
      return updateJobKeyword(state, action);

    default:
      return state
  }
};

export default reducer