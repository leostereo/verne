<template>
  <div class="align-self-center verne_text">
      <button class="start_button font-weighthis.pat-bold headline" @click="redirect('',true,'')">
        {{ value}}
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
    mode: {
      type: String,
      default: '',
      required: false,
    },
    path: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: String,
      default: '0',
      required: true,
    },
  },
};
</script>

<style>
.start_button {
  background-image: url(../../assets/icons/comenzar.svg);
  height: 200px;
  width: 200px;
}
</style>
