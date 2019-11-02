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
              <input type="text" maxlength="2" v-model="speedSetPoint"
                class="verne_container_rounded_deg"
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
        <div class="text-center">
          <v-menu offset-y
          :close-on-content-click="false"
          offset-x
          min-width="200"
          >
            <template v-slot:activator="{ on }">
              <input type="text" maxlength="2" v-model="inclinationSetPoint"
              class="verne_container_rounded_deg" v-on="on"
              @focus="inclinationControl"
            />
            </template>
            <vue-touch-keyboard :options="options" :layout="myLayout"
              :cancel="hide" :accept="inclinationAccpet"
              :input="input"
            />
          </v-menu>
        </div>
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="12" class="verne_text text-center">inclinacion</v-col>
      </v-row>
    </v-col>
    <v-col cols="1">
      <button class="rounded_button stop
        font-weight-bold display-1" @click="handleOnClickStop()">
      </button>
    </v-col>
    </v-footer>
              <div class="text-center overall verne_back" v-if="visible">
                <vue-touch-keyboard :options="options" :layout="myLayout"
                  :cancel="hide" :accept="speedAccept"
                  :input="input" />
              </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
    StopTrainingModal,
    NumKey,
  },
  data() {
    return {
      shown: false,
      speedSetPoint: '',
      inclinationSetPoint: '',
      icon: ICONS.PAUSE,
      showConfirmModal: false,
      isruning: true,
      visible: false,
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
    speedAccept(text) {
      ControlService.SetPoint('speed', this.speedSetPoint);
      this.visible = false;
    },
    inclinationAccpet(text) {
      ControlService.SetPoint('inclination', this.inclinationSetPoint);
    },
    speedControl(e) {
      this.speedSetPoint = '';
      this.input = e.target;
      this.layout = e.target.dataset.layout;
      if (!this.visible) { this.visible = true }
    },
    inclinationControl(e) {
      this.inclinationSetPoint = '';
      this.input = e.target;
      this.layout = e.target.dataset.layout;
    },

    hide() {
      this.visible = false;
    },
    // sold
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

.overall {
    top:0;
    margin-top:450px;
    margin-left:580px;
    display: block;
    width: 170px;
    z-index: 3;
    position:absolute;
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
