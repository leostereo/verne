<template>
  <v-container fluid>
    <counter :show="showCounter" @on-finish="redirect" />
      <v-row align="center" class="mx-12" justify="center">
        <training-modes @show-counter="setCounter" />
      </v-row>
    </v-container>
</template>

<script>
import TrainingModes from './TrainingModes.vue';
import Counter from '../../components/common/Counter.vue';

export default {
  components: {
    TrainingModes,
    Counter,
  },
  data: () => ({
    path: null,
    showCounter: false,
  }),
  methods: {
    setCounter({ path, showCounter, mode }) {
      this.path = path;
      this.showCounter = showCounter;
      if (!showCounter) {
        this.redirect(mode);
      }
    },
    redirect(mode) {
      this.showCounter = false;
      this.$router.push({
        name: this.path,
        params: { mode },
      });
    },
  },
};
</script>

<style scoped>
.full-height {
  height: calc(100vh - 24px);
}
</style>
