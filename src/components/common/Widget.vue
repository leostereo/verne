<template>
  <div>
    <div class="circle indigo">
      <v-icon size="60" color="white">{{icon}}</v-icon>
    </div>
    <div class="data indigo">
      <p class="text display-1">{{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.circle {
  border-radius: 45px;
  height: 90px;
  width: 90px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.data {
  margin-top: 15px;
  margin-left: -15px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 60px;
  width: calc(100% - 100px);
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
</style>
