<template>
  <v-container fluid>
    <counter :show="showCounter" @on-finish="redirect" />
    <v-row justify="end">
      <v-btn to="/global-settings" class="mr-10 verne-text" outlined color="indigo"
        ><div class="verne-text">
          Configuraciones
          <v-icon dark right color="white">
            mdi-wrench
          </v-icon>
        </div>
      </v-btn>
    </v-row>
    <v-row align="center" class="mx-12" justify="center">
      <training-modes @show-counter="setCounter" />
    </v-row>
  </v-container>
</template>

<script>
import TrainingModes from "./TrainingModes.vue";
import Counter from "../../components/common/Counter.vue";

export default {
  components: {
    TrainingModes,
    Counter
  },
  data: () => ({
    path: null,
    url: null,
    mode: null,
    showCounter: false
  }),
  methods: {
    setCounter({ path, showCounter, mode, url }) {
      this.path = path;
      this.url = url;
      this.mode = mode;
      this.showCounter = showCounter;
      if (!showCounter) {
        this.redirect();
      }
    },
    redirect() {
      this.showCounter = false;
      this.$router.push({
        name: this.path,
        params: { training_mode: this.mode, url: this.url }
      });
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
