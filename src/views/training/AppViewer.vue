<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="app-container">
        <webview id="foo" src="https://www.youtube.com/" class="app"></webview>
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
