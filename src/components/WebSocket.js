import React from 'react';
import SockJsClient from 'react-stomp';
 
class WebSocket extends React.Component {

  sendMessage = (msg) => {
        this.clientRef.sendMessage('/hello', msg);
  }
 
  render() {
    return (
      <div>
        <SockJsClient url='http://localhost:8816/endpoint' topics={['/topic/hello']}
            onMessage={(msg) => { console.log(msg); }}
            ref={(client) => { this.clientRef = client }} />
      </div>
    );
  }
}
export default WebSocket;