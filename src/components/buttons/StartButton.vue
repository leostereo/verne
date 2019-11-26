<template>
  <div class="align-self-center verne_text">
    <button class="start-button" @click="redirect('',true,'')">
      {{ value }}
    </button>
  </div>
</template>

<script>

export default {
  data: () => ({
    showCounter: true,
  }),
  methods: {
    redirect(path, showCounter, mode) {
      this.$emit('show-counter', { path, showCounter, mode });
    },
  },
  props: {
    value: {
      type: String,
      default: '0',
      required: true,
    },
  },
};
</script>

<style>
.start-button {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: normal;
  font-size: 18px;
  font-weight: 600;
  background-image: url(../../assets/icons/comenzar.svg);
  height: 150px;
  width: 150px;
}
</style>
