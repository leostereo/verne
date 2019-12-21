import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import store from '../store';
import { SOCKET } from '../constants/Websocket';

const URL = `${SOCKET.URL}:${SOCKET.PORT}/${SOCKET.PATH}`;

export default Vue.use(VueNativeSock, URL, {
  store,
  format: SOCKET.MESSAGE_FORMAT,
  reconnection: true,
  reconnectionAttempts: SOCKET.RECONNECTION_ATTEMPTS,
  reconnectionDelay: SOCKET.RECONNECTION_DELAY,
  mutations: SOCKET.MUTATIONS,
});
