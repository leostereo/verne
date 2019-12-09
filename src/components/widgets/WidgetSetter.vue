<template>
  <div>
    <div class="circle verne-card">
      <slot></slot>
    </div>
    <div class="data verne-card">
      <div class="value-container">
        <p class="verne-number text display-1">{{value}}</p>
      </div>
      <v-divider vertical class="mr-3"></v-divider>
      <v-btn
        v-on:click.prevent="handleOnClickSetting(false)"
        elevation="0"
        color="#3c3e55"
        fab
        x-small
        class="mr-2"
      >
        <img height="30px" src="../../assets/icons/menos.svg" />
      </v-btn>
      <v-btn
        v-on:click.prevent="handleOnClickSetting(true)"
        elevation="0"
        color="#3c3e55"
        fab
        x-small
        class="mr-2"
      >
        <img height="30px" src="../../assets/icons/mas.svg" />
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

.circle {
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
  margin-top: 15px;
  margin-left: -15px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 60px;
  width: 200px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}
.text {
  text-align: center;
  margin-top: 15px;
}
.value-container {
  width: 90px;
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
