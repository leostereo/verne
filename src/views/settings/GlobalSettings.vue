<template>
  <v-container fluid class="verne_text">
    <v-row>
      <back-home-button />
    </v-row>

    <v-row align="center" class="full-height" justify="center">
      <v-col cols="3">
        <wifi />
      </v-col>
      <v-col cols="3">
        <getout />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BackHomeButton from "../../components/buttons/BackHomeButton.vue";
import Wifi from "../../components/settings/Wifi.vue";
import Getout from "../../components/settings/Getout.vue";

export default {
  components: {
    BackHomeButton,
    Wifi,
    Getout
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
