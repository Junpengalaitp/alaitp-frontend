import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../util/utility'
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";
import {onReceiveChartOption, onReceiveJobKeyword, updateChart, updateJobKeyword} from "../actions/jobKeyword";
import {wsUrl} from "../../constant/url";

const initialState = {
  chartData: {},
  keywordIdxByJob: {}
};

const userKeywordTopic = "/user/queue/keyword";
const userChartTopic = "/user/queue/chart";
const sendingTopic = "/app/keyword";

let socket;
let stompClient;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOCKETS_CONNECT_AND_SEND:
      if (stompClient !== undefined && stompClient.connected) {
        stompClient.send(sendingTopic, {}, action.requestId);
        return state;
      }
      socket = new SockJS(wsUrl);
      stompClient = Stomp.over(socket);
      stompClient.debug = () => {
      };
      stompClient.connect({}, () => {
        console.log("ws connected")
        stompClient.send(sendingTopic, {}, action.requestId);
        stompClient.subscribe(userKeywordTopic, onReceiveJobKeyword);
        console.log(userKeywordTopic + "subscribed")
        stompClient.subscribe(userChartTopic, onReceiveChartOption)
        console.log(userChartTopic + "subscribed")
      });
      return state;

    case actionTypes.SOCKETS_DISCONNECT:
      stompClient.disconnect()
      console.log("web socket disconnected")
      return state

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