<template>
  <div>
    <v-btn icon class="btn-icon">
      <img height="40px" src="../../assets/icons/wifi.svg" alt="wifi">
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

<style scoped>
.btn-icon {
  padding-top: 10px;
  margin-right: 10px;
}
</style>
