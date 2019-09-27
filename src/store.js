import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INCLINATION = {
  MAX: 1,
  MIN: 0,
};

const SPEED = {
  MAX: 10,
  MIN: 1,
};

export default new Vuex.Store({
  state: {
    start: false,
    speed: 1,
    inclination: 0,
  },
  mutations: {
    setStart(state, value) {
      state.start = value;
    },
    increaseInclination(state) {
      if (state.inclination < INCLINATION.MAX) {
        const value = (state.inclination + 0.1).toFixed(1);
        state.inclination = parseFloat(value);
      }
    },
    decreaseInclination(state) {
      if (state.inclination > INCLINATION.MIN) {
        const value = (state.inclination - 0.1).toFixed(1);
        state.inclination = parseFloat(value);
      }
    },
    increaseSpeed(state) {
      if (state.speed < SPEED.MAX) {
        state.speed += 1;
      }
    },
    decreaseSpeed(state) {
      if (state.speed > SPEED.MIN) {
        state.speed -= 1;
      }
    },
  },
  actions: {

  },
});
