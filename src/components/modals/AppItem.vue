<template>
  <v-card flat class="verne-card">
    <div class="img-container">
      <img :src="src" alt="" height="100" @click="emitUrl(url)" />
    </div>
    <v-card-title class="justify-center verne-text">
      {{name}}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  props: {
    app_id: {
      type: String,
      default: '0',
      required: true,
    },
    name: {
      type: String,
      default: '0',
      required: true,
    },
    src: {
      type: String,
      default: '0',
      required: true,
    },
    url: {
      type: String,
      default: '0',
      required: true,
    },
  },
  methods: {
    emitUrl(url) {
      this.$emit('set-url', url);
    },
  },
};
</script>

<style lang="scss" scoped>
.verne-card {
  background-color: $primary-color;
  color: $verne_text-color;
}
.img-container {
  text-align: center;
}
.verne-text {
  padding-top: 8px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
