<template>
  <v-container fluid class="verne_text">
    <v-row>
      <back-home-button />
    </v-row>
    <v-row align="center" class="full-height" justify="center">
      <v-col cols="3">
        <login-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BackHomeButton from "../../components/buttons/BackHomeButton.vue";
import LoginForm from "../../components/settings/LoginForm.vue";

export default {
  name: "AdminLogin",
  components: {
    BackHomeButton,
    LoginForm
  },
  data: () => ({}),
  methods: {
    connect() {
      console.log("connecting");
    }
  }
};
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 24px);
}
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
}
</style>
