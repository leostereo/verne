import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      reconnected: false,
      reconnectError: false,
      response: null,
      error: null,
    },
    treadmill: {
      status: {},
      control: {},
      info_view: {},
      other: {},
    },
  },
  mutations: {
    onOpen(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
    },
    onClose(state) {
      state.socket.isConnected = false;
    },
    onMessage(state, message) {
      const code = message.message_code || 'other';
      state.treadmill[code] = message;
    },
    onError(state, error) {
      state.socket.error = error;
    },
    onReconnect(state) {
      state.socket.reconnected = true;
    },
    onReconnectError(state) {
      state.socket.reconnectError = true;
    },
  },
  actions: {
    get_inprogress_chart_response(_, message) {
      this.state.treadmill.info_view = message;
    },
    ack(_, message) {
      this.state.socket.response = message;
    },
  },
});
