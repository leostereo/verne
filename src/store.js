import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      age: null,
    },
    socket: {
      isConnected: false,
      reconnected: false,
      reconnectError: false,
      response: null,
      error: null,
    },
    treadmill: {
      error: {},
      status: {},
      control: {},
      info_view: {},
      training_view_event: {},
      training_view: {},
      other: {},
      stats: {},
    },
  },
  mutations: {
    reset_data() {
      this.state.treadmill.status = {};
    },
    reset_error() {
      this.state.treadmill.error = {};
    },
    reset_event() {
      this.state.treadmill.training_view_event.action = '';
    },
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
    set_wifi_credentials_response() {
      console.log("red inalambrica configurada")
    },
    ack(_, message) {
      this.state.socket.response = message;
    },
    get_inprogress_chart_response(_, message) {
      this.state.treadmill.info_view = message;
    },
    get_result_screen_info_response(_, message) {
      this.state.treadmill.stats = message;
    },
    training_by_time_finished(_, message) {
      this.state.treadmill.training_view_event = message;
    },
    training_by_distance_finished(_, message) {
      this.state.treadmill.training_view_event = message;
    },
    training_by_distance_close_to_finish(_, message) {
      this.state.treadmill.training_view_event = message;
    },
    training_by_time_close_to_finish(_, message) {
      this.state.treadmill.training_view_event = message;
    },
    get_all_trainings_response(_, message) {
      this.state.treadmill.training_view = message;
    },
    get_training_detail_by_id_response(_, message) {
      this.state.treadmill.training_view = message;
    },
    get_all_virtual_trainings_response(_, message) {
      this.state.treadmill.training_view = message;
    },
    get_virtual_training_detail_by_id_response(_, message) {
      this.state.treadmill.training_view = message;
    },
    reset_training_view_events() {
      this.state.treadmill.training_view_event.action = '';
    },
    start_training_by_time_response(_, message) {
      this.state.socket.response = message;
    },
    start_training_by_distance_response(_, message) {
      this.state.socket.response = message;
    },
    start_training_by_id_response(_, message) {
      this.state.socket.response = message;
    },
    start_virtual_training_by_id_response(_, message) {
      this.state.socket.response = message;
    },
    clear_event(context) {
      context.commit('reset_event');
    },
    increment_age(context) {
      context.commit('increment_age');
    },
  },
});
