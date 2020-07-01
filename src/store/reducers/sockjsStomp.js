import SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'
import * as socketActions from "../actions/socketActions";

const initialState = {

};

let socket;
let stompClient;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOCKETS_CONNECT:
      socket = new SockJS("http://localhost:8816/keyword-ws");
      stompClient = Stomp.over(socket);
      stompClient.connect({}, () => {
        stompClient.subscribe('/topic/keyword', data => {
          console.log(data);
        });
        stompClient.subscribe('/user/topic/keyword', data => {
          console.log(data);
        });
      });
      return state;

    case actionTypes.SOCKETS_MESSAGE_SEND:
      stompClient.send("/app/keyword", {}, "Hello, STOMP");
      return state;
  
    default:
      return state
  }
};

export default reducer