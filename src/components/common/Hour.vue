<template>
  <div>
    <v-btn icon>
      <v-icon>mdi-wifi</v-icon>
    </v-btn>
    <span>{{ time }} hs</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    time: null,
    interval: null,
  }),
  beforeMount() {
    this.updateTime();
    this.interval = setInterval(() => this.updateTime(), 60000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    updateTime() {
      this.time = this.$moment().format('ddd HH:mm');
    },
  },
};
</script>
