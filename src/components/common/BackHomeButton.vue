<template>
  <img src="../../assets/png/go_back.svg" class="ml-10" height="70" @click="redirect()">
</template>

<script>

export default {
  name: 'back',
  data: () => ({
  }),
  methods: {
    redirect() {
      this.$router.push(this.path);
    },
  },
  props: {
    path: {
      type: String,
      default: '/',
    },
  },
};
</script>
