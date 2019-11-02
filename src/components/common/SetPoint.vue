<template>
        <input type="text" class="chip" />
</template>

<style>
.chip {
  width: 80px;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  line-height: 1;
  margin-bottom: 0px !important;
  background-image: linear-gradient(#3c3e55, #3c3e55),
  radial-gradient(circle at top left, #00d1fc, #8457ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.chip-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  color: white;
}
</style>

<script>
export default {
  props: {},
};
</script>
