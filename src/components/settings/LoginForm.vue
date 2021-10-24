<template>
  <v-card class="dashboard-card verne-card justify-center">
    <v-card-title class="justify-center verne-text text-center subtitle-1">
      LOGIN
    </v-card-title>
    <v-card-actions v-show="isAdmin == 'invalid'" class="justify-center red--text text-center ">
      <span>
        La constraseña ingresada no es valida, intente nuevamente
      </span>
    </v-card-actions>
    <v-card-actions ma-10 class="justify-center">
      <v-form ref="form" v-model="params.valid" lazy-validation>
        <v-text-field
          v-model="params.admin_password_value"
          label="contraseña"
          required
          :rules="[rules.notEmpty]"
          color="blue"
          type="password"
          dark
        ></v-text-field>

        <v-row fluid justify="center">
          <v-btn v-on:click="connect()" class="mb-10 mt-5 verne-text" outlined color="indigo"
            ><div class="verne-text">
              ENVIAR
            </div>
          </v-btn>
<!--
          <v-btn to="/global_settings" class="mb-10 mt-5 verne-text" outlined color="indigo"
            ><div class="verne-text">
              IR
            </div>
          </v-btn>
-->
        </v-row>
      </v-form>
    </v-card-actions>
  </v-card>
</template>

<script>
import AdminService from "../../services/AdminService";
import { mapState } from "vuex";

export default {
  name: "LoginForm",
  data: () => ({
    rules:{
     notEmpty: value => value.length > 0  || 'No puede estar vacio',
    },
    params: {
      admin_password_value: ""
    }
  }),
  mounted() {
    this.clearAdmin();
  },
  beforeUnmount() {
    this.clearAdmin();
  },
  methods: {
    connect() {
      console.log("send password " + JSON.stringify(this.params));
      this.clearAdmin();
      AdminService.sendPassword(this.params);
      this.params.admin_password_value = '';
    },
    clearAdmin() {
      this.$store.commit("clear_admin");
    }
  },
  computed: mapState({
    isAdmin: state => state.isAdmin
  }),

  watch: {
    isAdmin(value) {
      if (value == "valid") {
        console.log("is ADMI!!!");
        this.clearAdmin();
        this.$router.push({
          path: "global_settings"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard-card2 {
  height: calc(100vh - 320px);
}
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
}
</style>
