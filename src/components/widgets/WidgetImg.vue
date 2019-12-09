<template>
  <div class="main_frame">
    <div class="circle">
      <slot></slot>
    </div>
    <div class="data white--text">
      <span class="text">{{value}} {{unit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '0',
      required: true,
    },
    unit: {
      type: String,
      default: '0',
      required: true,
    },
  },
};
</script>

<style>
.circle {
  background: #3c3e55;
  border-radius: 45px;
  height: 90px;
  width: 90px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.data {
  padding-left: 0px;
  background: #3c3e55;
  margin-top: 15px;
  z-index: -1;
  margin-left: -10px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 60px;
  width: calc(100% - 80px);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 25px;
  color: white;
}
.litle {
  height: 70px;
}
</style>
