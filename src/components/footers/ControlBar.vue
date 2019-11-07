<template>
  <div>
    <stop-training-modal :show="showConfirmModal" @on-close="handleOnCloseModal" />
    <v-footer absolute flat class="font-weight-medium control_bar justify-center">
      <div class="background-bar"></div>
      <v-col cols="1">
        <button class="rounded_button app
          font-weight-bold display-1" @click="setCounter()">
        </button>
      </v-col>
      <v-col cols="1">
        <div>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12">
              <input type="text" maxlength="4" v-model="speedSetPoint"
                class="verne_container_rounded_deg"
                v-bind:class="{'blink': speedOutOfRange}"
                @focus="speedControl"
              />
            </v-col>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12" class="verne_text text-center">velocidad</v-col>
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
        <div>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12">
              <input type="text" maxlength="4" v-model="inclinationSetPoint"
                class="verne_container_rounded_deg"
                v-bind:class="{'blink': inclinationOutOfRange}"
                @focus="inclinationControl"
              />
            </v-col>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12" class="verne_text text-center">inclinacion</v-col>
          </v-row>
        </div>
    </v-col>
    <v-col cols="1">
      <button class="rounded_button stop
        font-weight-bold display-1" @click="handleOnClickStop()">
      </button>
    </v-col>
    </v-footer>
    <div class="text-center overall verne_back" v-if="SpeedVisible">
      <vue-touch-keyboard :options="options" :layout="myLayout"
        :cancel="hide" :accept="speedAccept"
        :input="input" />
    </div>
    <div class="text-center overall verne_back" v-if="InclinationVisible">
      <vue-touch-keyboard :options="options" :layout="myLayout"
        :cancel="hide" :accept="inclinationAccept"
        :input="input" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StopTrainingModal from '../modals/StopTrainingModal.vue';
import ControlService from '../../services/ControlService';
import { ROUTES } from '../../router';
import numeric3 from '../../constants/NumericLayout';
import { TRAININGDEF } from '../../constants/TrainingDefaults';
import NumKey from '../keyboards/NumKey.vue';


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
    StopTrainingModal,
    NumKey,
  },
  data() {
    return {
      shown: false,
      speedSetPoint: '',
      inclinationSetPoint: '',
      speedOutOfRange: false,
      inclinationOutOfRange: false,
      SpeedVisible: false,
      InclinationVisible: false,
      icon: ICONS.PAUSE,
      showConfirmModal: false,
      isruning: true,
      layout: 'numeric',
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false,
      },
      myLayout: numeric3,
    };
  },
  computed: mapState({
    speed: state => state.treadmill.status.speed,
    inclination: state => state.treadmill.status.inclination,
    state: state => state.treadmill.status.state,
  }),
  methods: {
    speedAccept() {
      if (this.speedSetPoint <= TRAININGDEF.MAX_SPEED) {
        if (this.speedSetPoint > 0) {
          ControlService.SetPoint('speed', this.speedSetPoint);
        }
      } else if (this.speedSetPoint > TRAININGDEF.MAX_SPEED) {
        this.speedSetPoint = '';
      }
      this.SpeedVisible = false;
    },
    inclinationAccept() {
      if (this.inclinationSetPoint <= TRAININGDEF.MAX_INC) {
        if (this.inclinationSetPoint > 0) {
          ControlService.SetPoint('inclination', this.inclinationSetPoint);
        }
      } else if (this.inclinationSetPoint > TRAININGDEF.MAX_INC) {
        this.inclinationSetPoint = '';
      }
      this.InclinationVisible = false;
    },
    speedControl(e) {
      this.InclinationVisible = false;
      this.speedSetPoint = '';
      this.input = e.target;
      this.layout = e.target.dataset.layout;
      if (!this.SpeedVisible && !this.InclinationVisible) {
        this.SpeedVisible = true;
      }
    },
    inclinationControl(e) {
      this.SpeedVisible = false;
      this.inclinationSetPoint = '';
      this.input = e.target;
      this.layout = e.target.dataset.layout;
      if (!this.InclinationVisible && !this.SpeedVisible) {
        this.InclinationVisible = true;
      }
    },

    hide() {
      this.visible = false;
    },
    setIcon(value) {
      this.icon = value === TREADMILL_STATE.RUNNING ? ICONS.PAUSE : ICONS.PLAY;
      this.isruning = value === TREADMILL_STATE.RUNNING;
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
    speedSetPoint(value) {
      this.speedOutOfRange = (value > TRAININGDEF.MAX_SPEED);
    },
    inclinationSetPoint(value) {
      this.inclinationOutOfRange = (value > TRAININGDEF.MAX_INC);
    },
    state(value) {
      this.setIcon(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.control_bar {
  background: transparent;
}
.background-bar {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  background-color: $primary-color;
  height: 78px;
  width: 100%;
  top: 65px;
  position: absolute;
  z-index: -1;
}
.overall {
  top:0;
  margin-top: 450px;
  margin-left:580px;
  display: block;
  width: 170px;
  z-index: 3;
  position: absolute;
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
</style>
