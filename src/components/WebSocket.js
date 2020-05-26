import React from 'react';
import SockJsClient from 'react-stomp';
 
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
            onMessage={msg => { console.log(msg); }}
            ref={client => { this.clientRef = client }} />
      </div>
    );
  }
}
export default WebSocket;