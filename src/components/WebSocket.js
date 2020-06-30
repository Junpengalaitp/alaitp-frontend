import React from 'react';
import SockJsClient from 'react-stomp';
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes"


class WebSocket extends React.Component {

  sendMessage = msg => {
      this.clientRef.sendMessage('/app/keyword', msg);
  };
 
  render() {
    const wsUrl = `http://localhost:8816/keyword-ws`;
    return (
      <div>
        <SockJsClient url={wsUrl} topics={["/topic/keyword", "/user/topic/keyword"]}
            onConnect={() => {
              console.log("websocket connected")
              this.sendMessage("client websocket connected")}
            }
            onDisconnect={() => {
              console.log("websocket disconnected")
            }}
            onMessage={msg => {
              console.log(msg)
              this.props.onReceivedJobKeyword(msg)
            }}
            ref={client => { this.clientRef = client }} />
      </div>
    );
  }
}

const updateOnWsMsg = msg => {
  // job keyword is send one by one
  if (msg.msgType === "jobKeyword") {
    return {
      type: actionTypes.JOB_KEYWORD_UPDATE,
      jobKeyword: msg
    }
  } else { // chart options is send by time interval
    return {
      type: actionTypes.CHART_UPDATE,
      chartOptions: msg,
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onReceivedJobKeyword: msg => dispatch(updateOnWsMsg(msg)),
  }
};

export default connect(null, mapDispatchToProps)(WebSocket);