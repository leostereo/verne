<template>
  <div>
    <finish-training-modal :show="showTrainingFinishModal" @on-close="handleOnCloseModal" />
    <apps-modal :show="showAppsModal" @apps-modal-action="handleAppsModal" />
    <multimedia-header :video_mode="mini_status" />
    <v-container class="training-container" fluid v-if="!mini_status">
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="3">
          <widget-circ :myvalue="speedPorc" :real="speed" unit="Km/h" />
        </v-col>
        <v-col cols="3">
          <widget-circ :myvalue="inclinationPorc" :real="inclination" unit="grados"/>
        </v-col>
        <v-col cols="3">
          <widget-circ
            :myvalue="distancePorc"
            :real="kms"
            v-bind:class="{ blink: distanceCloseToFinish }"
            unit="Km"
          />
        </v-col>
        <v-col cols="2">
          <widget-circ
            :myvalue="timePorc"
            :real="training_time"
            unit="mm:ss"
            v-bind:class="{ blink: timeCloseToFinish }"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="end" class="widget-row">
        <v-col cols="9">
          <v-row justify="start">
            <v-col cols="4">
              <widget-img :value="heartbeat" unit="PPM">
                <img height="85px" src="../../assets/icons/corazon_borde.svg" />
              </widget-img>
            </v-col>
            <v-col cols="4">
              <widget-img :value="rhythm" unit="min/km">
                <img height="85px" src="../../assets/icons/cardio_borde.svg" />
              </widget-img>
            </v-col>
            <v-col cols="4">
              <div class="frame">
                <widget-img :value="calories" unit="kcal">
                  <img height="85px" src="../../assets/icons/calorias_borde.svg" />
                </widget-img>
              </div>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
        <v-row justify="center" class="graph-row mb-5">
        <v-col cols="8">
          <training-graphic />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="training_mode === 'virtual'">
      <v-container fluid>
        <v-row justify="center" class="video-row">
          <video
            ref="myvideo"
            @ended="handleTriningFinish('virtual')"
            :src="video_path"
          ></video>
        </v-row>
      </v-container>
    </div>
    <div v-if="showApps">
      <app-viewer :url="this.appUrl" @apps-modal-action="handleAppsModal"/>
    </div>
    <control-bar @playerEvent="controlPlayer" @apps-modal-action="handleAppsModal"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ControlBar from '../../components/footers/ControlBar.vue';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import TrainingGraphic from './TrainingGraphic.vue';
import AppViewer from './AppViewer.vue';
import WidgetCirc from '../../components/widgets/WidgetCirc.vue';
import ControlService from '../../services/ControlService';
import WidgetImg from '../../components/widgets/WidgetImg.vue';
import FinishTrainingModal from '../../components/modals/FinishTrainingModal.vue';
import AppsModal from '../../components/modals/AppsModal.vue';
import { ROUTES } from '../../router';
import { TRAININGDEF } from '../../constants/TrainingDefaults';
import GraphService from '../../services/GraphService';

export default {
  components: {
    ControlBar,
    MultimediaHeader,
    TrainingGraphic,
    WidgetImg,
    WidgetCirc,
    FinishTrainingModal,
    AppsModal,
    AppViewer,
  },
  props: {
    training_mode: String,
    video_path: String,
    training_value: String,
    url: String,
    user_age: {
      type: Number,
      default: TRAININGDEF.AGE,
    },
    user_weight: {
      type: Number,
      default: TRAININGDEF.WEIGHT,
    },
    initial_speed: {
      type: Number,
      default: TRAININGDEF.INIT_SPEED,
    },
  },
  computed: mapState({
    isConnected: state => state.socket.isConnected,
    speed: state => state.treadmill.status.speed,
    inclination: state => state.treadmill.status.inclination,
    kms: state => state.treadmill.status.kms,
    training_time: state => state.treadmill.status.training_time,
    time_percentage: state => state.treadmill.status.time_percentage,
    distance_percentage: state => state.treadmill.status.distance_percentage,
    rhythm: state => state.treadmill.status.rhythm,
    heartbeat: state => state.treadmill.status.heartbeat,
    calories: state => state.treadmill.status.calories,
    isFinished: state => state.treadmill.training_view_event.action,
  }),
  data() {
    return {
      mini_status: true,
      showApps: false,
      appUrl: '',
      trainParams: {
        training_mode: this.training_mode,
        training_value: this.training_value,
        user_age: this.user_age.toString(),
        user_weight: this.user_weight.toString(),
        initial_speed: this.initial_speed.toString(),
      },
      showTrainingFinishModal: false,
      showAppsModal: false,
      distanceCloseToFinish: false,
      timeCloseToFinish: false,
      speedPorc: 0,
      inclinationPorc: 0,
      distancePorc: 0,
      timePorc: 0,
    };
  },
  methods: {
    controlPlayer(event) {
      if (event === 'running') {
        this.$refs.myvideo.play();
      } else if (event === 'stopped' || event === 'pause') {
        this.$refs.myvideo.pause();
      }
    },
    setScreen() {
      if (this.training_mode === 'virtual' || this.training_mode === 'app') {
        this.mini_status = true;
        if (this.training_mode === 'app') {
          this.appUrl = this.url;
          this.showApps = true;
        }
      } else {
        this.mini_status = false;
      }
    },
    handleTriningFinish(event) {
      switch (event) {
        case 'training_by_distance_close_to_finish':
          this.distanceCloseToFinish = true;
          break;
        case 'training_by_time_close_to_finish':
          this.timeCloseToFinish = true;
          break;
        case 'training_by_distance_finished':
          this.timeCloseToFinish = false;
          this.distanceCloseToFinish = false;
          this.showTrainingFinishModal = true;
          break;
        case 'training_by_time_finished':
          this.timeCloseToFinish = false;
          this.distanceCloseToFinish = false;
          this.showTrainingFinishModal = true;
          break;
        case 'virtual':
          this.showTrainingFinishModal = true;
          break;
        default:
          break;
      }
    },
    handleOnCloseModal(response) {
      this.showTrainingFinishModal = false;
      this.timeCloseToFinish = false;
      this.distanceCloseToFinish = false;
      if (response) {
        this.$router.push({ path: ROUTES.TRAINING_STATS });
      }
    },
    handleAppsModal(event) {
      switch (event.action) {
        case 'open':
          this.showAppsModal = true;
          break;
        case 'cancel':
          this.showAppsModal = false;
          break;
        case 'close':
          this.showAppsModal = false;
          this.showApps = false;
          this.mini_status = false;
          break;
        case 'set-url':
          this.showAppsModal = false;
          this.mini_status = true;
          this.appUrl = event.url;
          this.showApps = true;
          break;
        default:
          break;
      }
    },
    subscribeInProgresChartData() {
      GraphService.subscribeInProgresChartData();
    },
  },
  mounted() {
    this.$store.commit('reset_data');
    this.setScreen();
    ControlService.startTraining(this.trainParams);
    this.subscribeInProgresChartData();
  },
  watch: {
    speed(value) {
      this.speedPorc = (parseInt(value, 10) * 100) / TRAININGDEF.MAX_SPEED;
    },
    inclination(value) {
      this.inclinationPorc = (parseInt(value, 10) * 100) / TRAININGDEF.MAX_INC;
    },
    time_percentage(value) {
      if (this.training_mode === 'time') {
        this.timePorc = (100 - Number(value));
      } else {
        this.timePorc = 0;
      }
    },
    distance_percentage(value) {
      if (this.training_mode === 'distance') {
        this.distancePorc = Number(value);
      } else {
        this.distancePorc = 0;
      }
    },
    isConnected(value) {
      if (value) {
        ControlService.startPolling();
      }
    },
    isFinished(value) {
      if (value) {
        this.handleTriningFinish(value);
      }
    },
  },
};
</script>

<style>
video {
  width: 100% !important;
  height: calc(100vh - 220px) !important;
}
.graph-ro {
  height: calc(100vh - 800px);
}
.training-container {
  padding: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
}
.widget-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.blink {
  animation: blinker 1.5s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
