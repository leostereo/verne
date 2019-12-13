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
  components: {
  },
  data: () => ({
  }),
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
  margin-left: 50px;
  margin-right: 50px;
}
.app {
  display: inline-flex;
  width: 100%;
  height: calc(100vh - 225px);
  background: white;
}
</style>
