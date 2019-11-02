<template>
        <div class="align-self-center">
            <button class="round_button font-weight-bold display-1"
            @click="redirect(routes.TRAINING, true)">
                QUICK<br>START
            </button>
          </div>
</template>

<script>
import { ROUTES } from '../../router';

export default {
  data: () => ({
    routes: ROUTES,
  }),
  methods: {
    redirect(path, showCounter) {
      alert('AAALLEER');
      this.$emit('show-counter', { path, showCounter });
    },
  },
  props: {
    icon: {
      type: String,
      required: true,
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
.round_button {
  background-color : transparent;
  background-image: url(../../assets/png/comenzar.svg);
  height: 200px;
  width: 200px;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline:none;
  border: 0;
}
</style>
