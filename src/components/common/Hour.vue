<template>
  <div>
    <v-btn icon>
      <img style="height:40px" src="../../assets/png/wifi.svg" alt="">
    </v-btn>
    <span class="white--text">{{ time }} hs</span>
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
