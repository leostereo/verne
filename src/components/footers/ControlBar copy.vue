<template>
  <div>
    <stop-training-modal :show="showConfirmModal" @on-close="handleOnCloseModal" />
    <v-footer absolute flat class="font-weight-medium control_bar justify-center">
      <v-col cols="1">
        <button class="rounded_button app
          font-weight-bold display-1" @click="setCounter()">
        </button>
      </v-col>
      <v-col cols="1">

  <div>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12">
        <input type="text" v-model="set_speed" class="container-rounded" @focus="show"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" class="chip-title text-center">velocidad</v-col>
    </v-row>
  </div>

      </v-col>
      <v-col cols="2" class="text-left">
            <button class="rounded_button disminuir"
                @click="handleOnClickSpeed(false)">
            </button>
            <button class="rounded_button aumentar"
                @click="handleOnClickSpeed(true)">
            </button>
      </v-col>
      <v-col cols="2" class="text-center">
            <button class="rounded_button"
            v-bind:class="{ start: !isruning, pause: isruning }"
                @click="handleOnClickStart()">
                
            </button>
      </v-col>
      <v-col cols="2" class="text-right">
              <button class="rounded_button disminuir"
                @click="handleOnClickInclination(false)">
            </button>
            <button class="rounded_button aumentar"
                @click="handleOnClickInclination(true)">
            </button>
      </v-col>
      <v-col cols="1">
        <indicator title="Inclinación" :value="inclination" />
      </v-col>
      <v-col cols="1">
        <button class="rounded_button stop
           font-weight-bold display-1" @click="handleOnClickStop()">
        </button>
      </v-col>
      <div v-if="visible" class="keypad_frame">
        <vue-touch-keyboard :options="options" v-if="visible" layout="mylayout" 
        :cancel="hide" :accept="accept" 
        :input="input" />
      </div>
     </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Indicator from '../common/Indicator.vue';
import SetPoint from '../common/SetPoint.vue';

import StopTrainingModal from '../modals/StopTrainingModal.vue';
import ControlService from '../../services/ControlService';
import { ROUTES } from '../../router';
import NumKey from '../keyboards/NumKey.vue';
import numeric3 from '../../constants/NumericLayout';

const ICONS = {
  PAUSE: 'mdi-pause',
  PLAY: 'mdi-play',
};

const TREADMILL_STATE = {
  RUNNING: 'running',
  STOPPED: 'stopped',
  ERROR: 'error',
  EMERGENCY: 'emergency',
};

export default {
  beforeMount() {
    this.setIcon(this.state);
  },
  beforeDestroy() {
    this.$store.dispatch('clear_event');
  },
  components: {
    Indicator,
    StopTrainingModal,
    NumKey,
    SetPoint,
  },
  data() {
    return {
      set_speed: '',
      icon: ICONS.PAUSE,
      showConfirmModal: false,
      isruning: true,
      visible: false,
      layout: 'numeric',
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    };
  },
  computed: mapState({
    speed: state => state.treadmill.status.speed,
    inclination: state => state.treadmill.status.inclination,
    state: state => state.treadmill.status.state,
  }),
  methods: {
    accept(text) {
      alert('Input text: ' + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible) {this.visible = true};
    },

    hide() {
      this.visible = false;
    },
    // sold
    setIcon(value) {
      this.icon = value === TREADMILL_STATE.RUNNING ? ICONS.PAUSE : ICONS.PLAY;
      this.isruning = value === TREADMILL_STATE.RUNNING ? true : false;
    },
    handleOnClickStart() {
      const value = this.state;
      if (value === 'running') {
        ControlService.pause();
      } else {
        ControlService.play();
      }
    },
    handleOnClickStop() {
      this.showConfirmModal = true;
    },
    handleOnClickInclination(isIncrease) {
      if (isIncrease) {
        ControlService.increaseInclination();
      } else {
        ControlService.decreaseInclination();
      }
    },
    handleOnClickSpeed(isIncrease) {
      if (isIncrease) {
        ControlService.increaseSpeed();
      } else {
        ControlService.decreaseSpeed();
      }
    },
    handleOnCloseModal(response) {
      this.showConfirmModal = false;
      if (response) {
        ControlService.stop();
        this.$router.push({ path: ROUTES.TRAINING_STATS });
      }
    },
  },
  watch: {
    state(value) {
      this.setIcon(value);
    },
  },
};
</script>
<style scoped>
.control_bar{
background:transparent;
}

.rounded_button{
  color:white;
  background-color : transparent;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline:none;
  border: 0;
}
.app {
  background-image: url(../../assets/png/footer_app.svg);
  height: 100px;
  width: 100px;
}
.aumentar {
  background-image: url(../../assets/png/aumentar.svg);
  height: 70px;
  width: 70px;
}
.disminuir {
  background-image: url(../../assets/png/disminuir.svg);
  height: 70px;
  width: 70px;
}
.start {
  background-image: url(../../assets/png/start.svg);
  height: 90px;
  width: 90px;
}
.pause {
  background-image: url(../../assets/png/pause.svg);
  height: 90px;
  width: 90px;
}
.stop {
  background-image: url(../../assets/png/stop.svg);
  height: 90px;
  width: 90px;
}
.keypad_frame{
  float:left;
  background-color: #3c3e55;
}

</style>
