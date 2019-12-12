<template>
  <v-app>
    <v-content class="back">
      <v-alert type="error" v-if="!isConnected">
        Por favor verifique la conexion con el backend
      </v-alert>
      <v-alert type="error" v-if="arduino_conn_fail">
        Por favor verifique la conexion con la placa de control
      </v-alert>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    arduino_conn_fail: false,
    //
  }),
  computed: mapState({
    isConnected: state => state.socket.isConnected,
    error_code: state => state.treadmill.error.error_code,
    state: state => state.treadmill.status.state,
  }),
  watch: {
    error_code(value) {
      if (value === '001') {
        this.arduino_conn_fail = true;
      }
    },
    state(value) {
      if (value) {
        this.arduino_conn_fail = false;
        this.$store.commit('reset_error');
      }
    },
  },
};
</script>
<style>
.back {
  margin-top: -1px;
  background-image: url("assets/images/fondo2.png");
  background-size: cover;
}
</style>
