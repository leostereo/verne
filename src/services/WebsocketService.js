import moment from 'moment';
import Vue from 'vue';
import { merge } from 'highcharts';
import store from '../store';

export default class WebsocketService {
  constructor() {
    this.socket = Vue.prototype.$socket;
    this.socketState = store.state.socket;
  }

  createMessage(code, action, extra) {
    this.token = moment().unix().toString();
    if (extra) {
      if (extra.training_mode === 'time') {
        extra.training_time = extra.training_value;
      } else if (extra.training_mode === 'distance') {
        extra.training_distance = extra.training_value;
      } else if (extra.training_mode === 'program') {
        extra.training_id = extra.training_value;
      } else if (extra.training_id) {
        extra.training_id = extra.training_id;
      }
      return merge({ message_code: code, action, message_token: this.token }, extra);
    }
    return { message_code: code, action, message_token: this.token };
  }

  createSetPointMessage(code, action, value) {
    this.token = moment().unix().toString();
    return {
      message_code: code, action, value, message_token: this.token };
  }

  sendMessage(message) {
    if (this.socketState.isConnected) {
      this.socket.sendObj(message);
    }
  }
}
