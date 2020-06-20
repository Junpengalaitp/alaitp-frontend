import React from 'react';
import SockJsClient from 'react-stomp';
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes"
import {serverUrl} from "../config";

class WebSocket extends React.Component {

  sendMessage = msg => {
      this.clientRef.sendMessage('/keyword', msg);
  };
 
  render() {
    const wsUrl = `${serverUrl}/keyword-websocket/keyword-ws`;
    return (
      <div>
        <SockJsClient url={wsUrl} topics={['/topic/keyword']}
            onConnect={() => { console.log("websocket connected") }}
            onDisconnect={() => { console.log("websocket disconnected") }}
            onMessage={msg => {
               this.props.onReceivedJobKeyword(msg)
              }}
            ref={client => { this.clientRef = client }} />
      </div>
    );
  }
}

const updateWsKeywords = msg => {
  // console.log(msg)
  if (msg.msgType === "jobKeyword") {
    return {
      type: actionTypes.JOB_KEYWORD_UPDATE,
      // chartOptions: msg.chartOptions,
      jobKeyword: msg
    }
  } else {
    return {
      type: actionTypes.CHART_UPDATE,
      chartOptions: msg,
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onReceivedJobKeyword: msg => dispatch(updateWsKeywords(msg)),
  }
};

export default connect(null, mapDispatchToProps)(WebSocket);