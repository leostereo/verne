<template>
  <div class="img-container">
    <img :src="src" alt="" height="60">
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    src: {
      type: String,
      default: '0',
      required: true,
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
</style>
