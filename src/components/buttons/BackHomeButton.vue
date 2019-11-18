<template>
  <button class="round_button ml-10" @click="redirect()">
    <img src="../../assets/icons/go_back.svg" height="70" >
  </button>
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
