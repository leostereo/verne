<template>
  <v-card class="dashboard-card verne-card justify-center">
    <v-card-title class="justify-center verne-text text-center subtitle-1">
      RED INALAMBRICA
    </v-card-title>

    <v-card-actions ma-10 class="justify-center">
      <v-form ref="form" v-model="params.valid" lazy-validation>
        <v-text-field
          v-model="params.ssid"
          :counter="10"
          label="ssid"
          required
          color="blue"
          dark
        ></v-text-field>

        <v-text-field
          v-model="params.pass"
          label="contraseña"
          required
          color="blue"
          dark
        ></v-text-field>

        <v-row fluid justify="center">
          <v-btn v-on:click="connect()" class="my-10 verne-text" outlined color="indigo"
            ><div class="verne-text">
              CONECTAR
            </div>
          </v-btn>
        </v-row>
      </v-form>
    </v-card-actions>
  </v-card>
</template>

<script>
import AdminService from "../../services/AdminService";

export default {
  name: "wifi",
  data: () => ({
    params: {
      ssid: "",
      pass: ""
    }
  }),
  methods: {
    connect() {
      console.log("connecting");
      AdminService.connectWifi(this.params);
    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard-card {
  height: calc(100vh - 320px);
}
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
}
</style>
