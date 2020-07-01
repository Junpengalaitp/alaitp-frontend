import * as socketActions from './actions/socketActions';
import * as actionTypes from './actions/actionTypes';

import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';

export const SOCKETS_CONNECTING = 'SOCKETS_CONNECTING';
export const SOCKETS_CONNECT = 'SOCKETS_CONNECT';
export const SOCKETS_CONNECTED = 'SOCKETS_CONNECTED';
export const SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING';
export const SOCKETS_DISCONNECT = 'SOCKETS_DISCONNECT';
export const SOCKETS_DISCONNECTED = 'SOCKETS_DISCONNECTED';
export const SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING';
export const SOCKETS_MESSAGE_SEND = 'SOCKETS_MESSAGE_SEND';
export const SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING';
export const SOCKETS_MESSAGE_RECEIVE = 'SOCKETS_MESSAGE_RECEIVE';
export const SOCKETS_MESSAGE_SUBSCRIBE = 'SOCKETS_MESSAGE_SUBSCRIBE';

let socket = null;
let stompClient = null;
let subscription = null;

const JWT_TOKEN = 'exr_token';

const ROLE_ADMIN = 'ROLE_ADMIN';

const wsMiddleware = store => next => action => {
  const onSingleMessage = (message) => {
    // Parse the JSON message received on the websocket
    store.dispatch(socketActions.socketsMessageReceiving(message.body));
    //Can parse the incoming message and dispatch to the appropriate destination at this point
    store.dispatch({type: actionTypes.SOCKETS_MESSAGE_RECEIVE, payload: message.body});

    subscription.unsubscribe();
    subscription = null;
  };

  const onSubscribeMessage = (message) => {
    // Parse the JSON message received on the websocket
    store.dispatch(socketActions.socketsMessageReceiving(message.body));
  };

  switch (action.type) {

    case actionTypes.SOCKETS_CONNECT:
      console.log("connecting to stomp websocket")
      if (socket !== null) {
        store.dispatch(socketActions.socketsDisconnecting());
        socket.close();
        store.dispatch(socketActions.socketsDisconnected());
      }
      store.dispatch(socketActions.socketsConnecting);
      socket = new SockJS("http://localhost:8816/keyword-ws");
      stompClient = Stomp.over(socket);
      stompClient.connect({}, function (frame) {
        store.dispatch(socketActions.socketsConnected());
      });
      break;

    case actionTypes.SOCKETS_DISCONNECT:
      if (stompClient !== null) {
        stompClient.disconnect();
      }
      stompClient = null;
      store.dispatch(socketActions.socketsDisconnected());
      break;

    case actionTypes.SOCKETS_MESSAGE_SEND:
      subscription = stompClient.subscribe(action.payload.subscribe, onSingleMessage);

      stompClient.send(action.payload.api, {}, action.payload.data);
      store.dispatch(socketActions.socketsMessageSending(action.payload.data));
      break;
    case actionTypes.SOCKETS_MESSAGE_SUBSCRIBE:
      if (stompClient) {
        subscription = stompClient.subscribe(action.payload.subscribe, onSubscribeMessage);
      }
      break;
    default:
      return next(action);
  }
};

export default wsMiddleware;
