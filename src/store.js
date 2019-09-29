import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      reconnectError: false,
    },
    treadmill: {
      status: {},
      control: {},
      view: {},
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
    onReconnectError(state) {
      state.socket.reconnectError = true;
    },
  },
  actions: {

  },
});
