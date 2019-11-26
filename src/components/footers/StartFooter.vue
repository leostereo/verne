<template>
  <div>
    <v-footer absolute flat class="font-weight-medium start-bar justify-center">
      <div class="background-bar"></div>
      <start-button value="COMENZAR" @show-counter="onClick" />
    </v-footer>
  </div>
</template>

<script>
import StartButton from '../buttons/StartButton.vue';

export default {
  components: { StartButton },
  methods: {
    onClick(path, showCounter, mode) {
      this.$emit('click', { path, showCounter, mode });
    },
  },
};

</script>

<style lang="scss" scoped>
.start-bar {
  background: transparent;
}
.background-bar {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  background-color: $primary-color;
  height: 82px;
  width: 100%;
  top: 80px;
  position: absolute;
  z-index: -1;
}
</style>
