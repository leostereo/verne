import moment from 'moment';
import Vue from 'vue';

export default class WebsocketService {
  constructor() {
    this.socket = Vue.prototype.$socket;
    this.token = null;
  }

  createMessage(code, action) {
    this.token = moment().unix().toString();
    return { message_code: code, action, message_token: this.token };
  }

  sendMessage(message) {
    this.socket.sendObj(message);
  }
}
