import React from 'react';
import SockJsClient from 'react-stomp';
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes"
 
class WebSocket extends React.Component {

  sendMessage = msg => {
      this.clientRef.sendMessage('/keyword', msg);
  }
 
  render() {
    return (
      <div>
        <SockJsClient url='http://localhost:8816/keyword-ws' topics={['/topic/keyword']}
            onConnect={() => {console.log("websocket connected")}}
            onDisconnect={() => {console.log("websocket disconnected")}}
            onMessage={msg => {
               console.log(msg)
               this.props.onReceivedJobKeyword()
              }}
            ref={client => { this.clientRef = client }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      keywords: state.keyword.orderedKeywordByCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceivedJobKeyword: () => dispatch({ type: actionTypes.WS_MESSAGE }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocket);