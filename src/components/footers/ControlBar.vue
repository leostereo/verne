<template>
  <div>
    <stop-training-modal :show="showConfirmModal" @on-close="handleOnCloseModal" />
    <v-footer absolute flat class="font-weight-medium control_bar justify-center">
      <div class="background-bar"></div>
      <v-col cols="1">
        <button class="rounded_button app
          font-weight-bold display-1" @click="toggleModal()">
        </button>
      </v-col>
      <v-col cols="1">
        <div>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12">
              <div class="text-center">
                <v-menu top offset-y
                  v-model="showSpeedKeyboard"
                  content-class="keyboard-menu"
                  :close-on-click="false"
                  :close-on-content-click="false"
                >
                  <template v-slot:activator="{ on }">
                    <input
                      type="text"
                      maxlength="4"
                      v-model="speedSetPoint"
                      class="verne-indicator"
                      v-bind:class="{'blink': speedOutOfRange}"
                      @click="speedControl"
                      v-on="on"
                    />
                  </template>
                  <v-card class="keyboard-card">
                    <vue-touch-keyboard
                      class="keyboard"
                      :options="options"
                      :layout="keyboard"
                      :cancel="hide"
                      :accept="speedAccept"
                      :input="inputSpeed"
                    />
                  </v-card>
                </v-menu>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12" class="verne_text text-center">Velocidad</v-col>
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
              <div class="text-center">
                <v-menu top offset-y
                  v-model="showInclinationKeyboard"
                  content-class="keyboard-menu"
                  :close-on-click="false"
                  :close-on-content-click="false"
                >
                  <template v-slot:activator="{ on }">
                    <input
                      type="text"
                      maxlength="4"
                      v-model="inclinationSetPoint"
                      class="verne-indicator"
                      v-bind:class="{'blink': inclinationOutOfRange}"
                      @click="inclinationControl"
                      v-on="on"
                    />
                  </template>
                  <v-card class="keyboard-card">
                    <vue-touch-keyboard
                      class="keyboard"
                      :options="options"
                      :layout="keyboard"
                      :cancel="hide"
                      :accept="inclinationAccept"
                      :input="inputInclination"
                    />
                  </v-card>
                </v-menu>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="12" class="verne_text text-center">Inclinacion</v-col>
          </v-row>
        </div>
    </v-col>
    <v-col cols="1">
      <button class="rounded_button stop
        font-weight-bold display-1" @click="handleOnClickStop()">
      </button>
    </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StopTrainingModal from '../modals/StopTrainingModal.vue';
import ControlService from '../../services/ControlService';
import { ROUTES } from '../../router';
import NUMERIC_KEYBOARD from '../../constants/NumericKeyboard';
import { TRAININGDEF } from '../../constants/TrainingDefaults';

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
  },
  data() {
    return {
      shown: false,
      speedSetPoint: '',
      inclinationSetPoint: '',
      speedOutOfRange: false,
      inclinationOutOfRange: false,
      showSpeedKeyboard: false,
      showInclinationKeyboard: false,
      icon: ICONS.PAUSE,
      showConfirmModal: false,
      isruning: true,
      layout: 'numeric',
      inputSpeed: null,
      inputInclination: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false,
      },
      keyboard: NUMERIC_KEYBOARD,
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
      this.showSpeedKeyboard = false;
    },
    inclinationAccept() {
      if (this.inclinationSetPoint <= TRAININGDEF.MAX_INC) {
        if (this.inclinationSetPoint > 0) {
          ControlService.SetPoint('inclination', this.inclinationSetPoint);
        }
      } else if (this.inclinationSetPoint > TRAININGDEF.MAX_INC) {
        this.inclinationSetPoint = '';
      }
      this.showInclinationKeyboard = false;
    },
    speedControl(e) {
      this.speedSetPoint = '';
      this.inputSpeed = e.target;
      this.layout = e.target.dataset.layout;
      if (!this.showSpeedKeyboard) this.showSpeedKeyboard = true;
    },
    inclinationControl(e) {
      this.inclinationSetPoint = '';
      this.inputInclination = e.target;
      this.layout = e.target.dataset.layout;
      if (!this.showInclinationKeyboard) this.showInclinationKeyboard = true;
    },
    hide() {
      this.visible = false;
    },
    setIcon(value) {
      this.icon = value === TREADMILL_STATE.RUNNING ? ICONS.PAUSE : ICONS.PLAY;
      this.isruning = value === TREADMILL_STATE.RUNNING;
    },
    emitPlayerEvent(value) {
      this.$emit('playerEvent', value);
    },
    toggleModal() {
      this.$emit('apps-modal-action', { action: 'open' });
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
      this.emitPlayerEvent(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.keyboard {
  background-color: $primary-color;
  padding: 10px;
}
.keyboard-card {
  background-color: $primary-color;
}
.keyboard-menu {
  border-color: $primary-color;
  background: $primary-color;
  width: 220px;
  margin-left: -45px;
}
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
  background-image: url(../../assets/icons/footer_app.svg);
  height: 100px;
  width: 100px;
}
.aumentar {
  background-image: url(../../assets/icons/aumentar.svg);
  height: 70px;
  width: 70px;
}
.disminuir {
  background-image: url(../../assets/icons/disminuir.svg);
  height: 70px;
  width: 70px;
}
.start {
  background-image: url(../../assets/icons/start.svg);
  height: 90px;
  width: 90px;
}
.pause {
  background-image: url(../../assets/icons/pause.svg);
  height: 90px;
  width: 90px;
}
.stop {
  background-image: url(../../assets/icons/stop.svg);
  height: 90px;
  width: 90px;
}
.verne-indicator {
  border-radius: 25px;
  border-width: 7px;
  border-style: solid;
  border-color: #3c3e55;
  background: linear-gradient(to right, rgba(132,87,255,1) 0%, rgba(108,108,254,1) 27%,
    rgba(48,164,253,1) 71%, rgba(0,210,252,1) 100%);
  width: 100%;
  height: 50px;
  padding-top:1px;
  text-align: center;
  color: #dbddf3;
  font-family: Open Sans, sans-serif;
}
</style>
