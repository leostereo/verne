<template>
  <v-container fluid class="verne_text">
    <counter :show="showCounter" @on-finish="redirect" />
    <v-row>
      <back-home-button/>
    </v-row>
    <v-row class="my-10 title" justify="center">
      {{ title }}
    </v-row>
    <v-row class="my-10 indicator " justify="center">
      <div class="indicator verne_back">{{slider}}<br />{{ units }}</div>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-slider
          v-model="slider"
          :color="ex2.color"
          :label="ex2.label"
          :thumb-color="ex2.color"
          :track-color="ex2.color"
          min="1"
          max="100"
        >
          <template v-slot:prepend>
            <button class="rounded_button dec" @click="decrement"></button>
          </template>
          <template v-slot:append>
            <button class="rounded_button inc" @click="increment"></button>
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <widget-setter :value="age" @set-value="handleAgeSet">
          <img style="height:75px" src="../../assets/png/años.svg" />
        </widget-setter>
      </v-col>
      <v-col cols="3">
        <widget-setter :value="weight" @set-value="handleWeightSet">
          <img style="height:75px" src="../../assets/png/peso.svg" />
        </widget-setter>
      </v-col>
      <v-col cols="3">
        <widget-setter :value="speed" @set-value="handleSpeedSet">
          <img style="height:75px" src="../../assets/png/vel_incial.svg" />
        </widget-setter>
      </v-col>
     </v-row>
     <v-row justify="center">
      <start-button value="COMENZAR" @show-counter="setCounter"/>
     </v-row>
  </v-container>
</template>

<script>
import Counter from '../../components/common/Counter.vue';
import { TRAININGDEF } from '../../constants/TrainingDefaults';
import WidgetSetter from '../../components/common/WidgetSetter.vue';
import BackHomeButton from '../../components/common/BackHomeButton.vue';
import StartButton from '../../components/buttons/StartButton.vue';

export default {
  components: {
    Counter,
    WidgetSetter,
    BackHomeButton,
    StartButton,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    age: TRAININGDEF.AGE,
    speed: TRAININGDEF.INIT_SPEED,
    weight: TRAININGDEF.WEIGHT,
    showCounter: false,
    title: '',
    units: '',
    slider: 35,
    ex2: { label: '', val: 75, color: 'blue lighten-1' },
  }),
  mounted() {
    if (this.mode === 'distance') {
      this.title = 'ENTRENAMIENTO POR DISTANCIA';
      this.units = 'KMs';
    } else if (this.mode === 'time') {
      this.title = 'ENTRENAMIENTO POR TIEMPO';
      this.units = 'Mins';
    }
  },
  methods: {
    handleAgeSet(isMore) {
      if (isMore) {
        if (this.age < TRAININGDEF.MAX_AGE) {
          this.age += 1;
        }
      } else if (this.age > 0) {
        this.age -= 1;
      }
    },
    handleWeightSet(isMore) {
      if (isMore) {
        if (this.weight < TRAININGDEF.MAX_WEIGHT) {
          this.weight += 1;
        }
      } else if (this.weight > 0) {
        this.weight -= 1;
      }
    },
    handleSpeedSet(isMore) {
      if (isMore) {
        if (this.speed < TRAININGDEF.MAX_SPEED) {
          this.speed += 1;
        }
      } else if (this.speed > 0) {
        this.speed -= 1;
      }
    },
    decrement() {
      this.slider -= 1;
    },
    increment() {
      this.slider += 1;
    },
    setCounter() {
      this.showCounter = true;
    },
    redirect() {
      this.showCounter = false;
      this.$router.push({
        name: '/training',
        params: {
          training_mode: this.mode,
          training_value: this.slider,
          user_age: this.age,
          user_weight: this.weight,
          initial_speed: this.speed,
        },
      });
    },
  },

};
</script>

<style>
.indicator {
  margin:auto;
  align-content: center;
  width: 20%;
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 0px !important;
  background: #3c3e55;
}

.rounded_button{
  background-color : transparent;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline:none;
  border: 0;
}
.start_button {
  background-image: url(../../assets/png/comenzar.svg);
  height: 200px;
  width: 200px;
}
.inc {
  background-image: url(../../assets/png/mas.svg);
  height: 40px;
  width: 40px;
}
.dec {
  background-image: url(../../assets/png/menos.svg);
  height: 40px;
  width: 40px;
}
</style>
