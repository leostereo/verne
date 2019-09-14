<template>
  <div>
    <v-toolbar>
      <v-btn icon>
        <v-icon>mdi-wifi</v-icon>
      </v-btn>
      <span>{{ time }} hs</span>
      <div class="flex-grow-1"></div>
      <template>
        <div class="my-2">
          <v-btn text>
            Mantenimiento
            <v-icon right>mdi-settings</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn text>
            Profesor
            <v-icon right>mdi-account-circle</v-icon>
          </v-btn>
        </div>
      </template>
    </v-toolbar>
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
