<template>
  <v-container fluid>
    <v-row>
      <button class="round_button ml-10" @click="closeApps()">
        <img src="../../assets/icons/go_back.svg" height="70" >
      </button>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="app-container">
        <webview id="app-iframe" :src="url" class="app"></webview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeApps() {
      this.$emit('apps-modal-action', { action: 'close' });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  margin-left: 100px;
  margin-right: 100px;
}
.app {
  display: inline-flex;
  width: 100%;
  height: calc(100vh - 320px);
  background: white;
  border-radius: 3px;
}
</style>
