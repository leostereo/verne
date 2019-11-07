<template>
  <div class="main_frame">
    <div class="circle ">
    <slot></slot>
    </div>
    <div class="data white--text">
      <span class="display-1">{{value}}</span><br><span>{{unit}}</span>
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
}
.data {
  padding-left: 20px;
  background: #3c3e55;
  margin-top: 20px;
  margin-left: -20px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 50px;
  width: calc(100% - 70px);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  margin-top: 15px;
  margin-left: -15px;
  color: white;
}
.litle {
  height: 70px;
}
</style>
