<template>
  <div>
    <div class="setter-circle">
      <slot></slot>
    </div>
    <div class="setter-data">
      <div style="width:25%"></div>
      <p class="verne_number text display-1">{{value}}</p>
      <div style="width:10%"></div>
      <v-divider vertical class="mr-5"></v-divider>
        <v-btn
          v-on:click.prevent="handleOnClickSetting(true)"
          elevation="0"
          color="#3c3e55"
          fab
          x-small
        >
          <img style="height:30px" src="../../assets/png/mas.svg" />
        </v-btn>
        <v-btn
          elevation="0"
          color="#3c3e55"
          fab
          x-small
          v-on:click="handleOnClickSetting(false)"
        >
          <img style="height:30px" src="../../assets/png/menos.svg" />
        </v-btn>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    handleOnClickSetting(isMore) {
      this.$emit('set-value', isMore);
    },
  },
};
</script>


<style lang="scss" scoped>

.setter-circle {
  border-radius: 45px;
  height: 90px;
  width: 90px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color;
}
.setter-data {
  margin-top: 15px;
  margin-left: -10px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 60px;
  width: calc(100% - 100px);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color;
}
.text {
  margin-top: 15px;
  margin-left: -15px;
}
</style>
