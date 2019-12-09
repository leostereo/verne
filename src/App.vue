<template>
  <v-app>
    <v-content class="back">
      <v-alert type="error" v-if="!isConnected">
        Por favor verifique la conexion con el backend
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
    //
  }),
  computed: mapState({
    isConnected: state => state.socket.isConnected,
  }),
};
</script>
<style>
.back {
  margin-top: -1px;
  background-image: url("assets/images/fondo2.png");
  background-size: cover;
}
</style>
