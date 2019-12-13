<template>
  <div class="img-container">
    <img :src="src" alt=""
    height="60"
    @click="emitUrl(url)"
    >
  </div>


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
.img-container{
  margin-top: 10%;
  text-align: center;
}

</style>
