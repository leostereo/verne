<template>
  <div>
    <div class="circle">
      <v-icon size="60" color="white">{{icon}}</v-icon>
    </div>
    <div class="data">
      <p class="text display-1">{{user_age}}</p>
      <div style="width:25%"></div>
      <v-btn fab small dark color="blue" v-on:click.prevent="increment">+</v-btn>
      <v-btn fab small dark color="blue" v-on:click.prevent="decrement">-</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    user_age: 1,
  }),
  computed: mapState({
    state: state => state.treadmill.status.state,
    age: state => state.user.age,
  }),
  methods: {
    increment() {
      if (this.user_age < 100) {
        this.$store.dispatch('increment_age');
      }
    },
    decrement() {
      if (this.value > 0) {
        this.value--;
      }
    },
    watch: {
      age() {
        alert('chann');
        this.user_age = value;
      },
    },
  },
};
</script>

<style>
.circle {
  background-color: #3c3e55;
  border-radius: 45px;
  height: 90px;
  width: 90px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.data {
  background: #3c3e55;
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
