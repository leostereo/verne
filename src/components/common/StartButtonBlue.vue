<template>
<div class="frame">
  <button class="button_example">
    COMENZAR
  </button>
</div>
</template>

<style>
.frame{
  margin-left:40px;
  margin-top:10px;
  margin-bottom:10px;
}
.button_example{
  border: 1px solid #7eb9d0;
  border-radius: 24px;
  font-size:12px;
  font-family:arial, helvetica, sans-serif;
  padding: 10px 25px 10px 25px;
  text-decoration:none;
  display:inline-block;
  text-shadow: -1px -1px 0 rgba(0,0,0,0.3);
  font-weight:bold;
  color: #FFFFFF;
  background-color: #a7cfdf;
  background-image: linear-gradient(to bottom, #a7cfdf, #23538a);
}
</style>

<script>
import { ROUTES } from '../../router';

export default {
  components: {
  },
  data: () => ({
    routes: ROUTES,
  }),

  methods: {
    redirect(id) {
      this.$emit('gototrain', { id });
    },
  },
};
</script>
