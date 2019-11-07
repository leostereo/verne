import moment from 'moment';
import Vue from 'vue';
import store from '../store';

export default class WebsocketService {
  constructor() {
    this.socket = Vue.prototype.$socket;
    this.socketState = store.state.socket;
  }

  createMessage(code, action, message) {
    this.token = moment().unix().toString();
    return {
      ...message, message_code: code, action, message_token: this.token,
    };
  }

  createSetPointMessage(code, action, value) {
    this.token = moment().unix().toString();
    return {
      message_code: code, action, value, message_token: this.token,
    };
  }

  sendMessage(message) {
    if (this.socketState.isConnected) {
      this.socket.sendObj(message);
    }
  }
}
