<template>
  <v-app>
    <v-content class="back">
      <v-row class="error_alert red pl-10 text--white" fluid align="center" v-if="!isConnected">
        <v-col>
          <span>
            <v-icon color="white">
              mdi-alert
            </v-icon>
          </span>
          <span>
            Por favor verifique la conexion con el backend
          </span>
        </v-col>
      </v-row>
      <v-alert type="error" v-if="arduino_conn_fail">
        {{ hard_message }}
      </v-alert>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data: () => ({
    arduino_conn_fail: false,
    hard_message: "",
    code_detail: "",
    myTimer: null
    //
  }),
  computed: mapState({
    isConnected: state => state.socket.isConnected,
    error_code: state => state.treadmill.error.error_code,
    state: state => state.treadmill.status.state
  }),
  methods: {
    setAlarmMessage(message) {
      console.log(message);
      this.hard_message = message;
      this.arduino_conn_fail = true;

      setTimeout(() => {
        this.arduino_conn_fail = false;
        this.$store.commit("reset_error");
      }, 9000);
    }

  },
  watch: {
    error_code(value) {

      if (value === "001") {
        this.setAlarmMessage("Por favor verifique la conexion con la placa de control");
      } else if (value === "004") {
        this.setAlarmMessage("No hay comunicacion con variador de velocidad");
      } else if (value === "005") {
        this.code_detail = this.$store.state.treadmill.error.error_code_detail;
        this.setAlarmMessage("Error interno de variador de velocidad, código #" + this.code_detail);
      }
    },
    state(value) {
      if (value) {
        this.arduino_conn_fail = false;
        this.$store.commit("reset_error");
      }
    }
  }
};
</script>
<style>
.back {
  margin-top: -1px;
  background-image: url("assets/images/fondo2.png");
  background-size: cover;
}

.error_alert {
  color: white;
  height: 3.5rem;
  width: 110%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 10;
}
</style>
