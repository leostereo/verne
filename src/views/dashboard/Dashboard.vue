<template>
  <div>
    <counter :show="showCounter" @on-finish="redirect" />
    <main-header />
    <v-container fluid>
      <v-row align="center" class="mx-12" justify="center">
        <training-modes @show-counter="setCounter" />
      </v-row>
    </v-container>
    <main-footer />
  </div>
</template>

<script>
import TrainingModes from './TrainingModes.vue';
import MainHeader from '../../components/headers/MainHeader.vue';
import MainFooter from '../../components/footers/MainFooter.vue';
import Counter from '../../components/common/Counter.vue';

export default {
  components: {
    TrainingModes,
    MainHeader,
    MainFooter,
    Counter,
  },
  data: () => ({
    path: null,
    showCounter: false,
  }),
  methods: {
    setCounter({ path, showCounter }) {
      this.path = path;
      this.showCounter = showCounter;
      if (!showCounter) {
        this.redirect();
      }
    },
    redirect() {
      this.showCounter = false;
      this.$router.push(this.path);
    },
  },
};
</script>
