<template>
  <v-row justify="center">
    <v-overlay :absolute="true" :opacity="0.8" :value="show" :z-index="5">
      <v-progress-circular :size="200" :width="10" color="light-blue" indeterminate>
        <span class="display-4">
          <strong>{{ counter }}</strong>
        </span>
      </v-progress-circular>
    </v-overlay>
  </v-row>
</template>

<script>
export default {
  beforeDestroy() {
    clearInterval(this.interval);
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    start: {
      type: Number,
      default: 3,
      required: false,
    },
  },
  data() {
    return {
      interval: null,
      counter: this.start,
    };
  },
  methods: {
    countDown() {
      this.counter -= 1;
    },
    onFinish() {
      clearInterval(this.interval);
      this.$emit('on-finish');
    },
  },
  watch: {
    show(value) {
      if (value) {
        this.counter = this.start;
        this.interval = setInterval(() => this.countDown(), 1000);
      }
    },
    counter(value) {
      if (!value) {
        this.onFinish();
      }
    },
  },
};
</script>
