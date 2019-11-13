<template>
  <div>
    <finish-training-modal :show="showTrainingFinishModal" @on-close="handleOnCloseModal" />
    <multimedia-header :video_mode="video_mode"/>
    <v-container fluid v-if="!video_mode">
      <v-row justify="center" no-gutters>
         <v-col cols="2">
          <widget-circ2 :myvalue="speedPorc" :real="speed"
          unit="KM/Hs"/>
        </v-col>
        <v-col cols="2">
          <widget-circ2 :myvalue="inclinationPorc" :real="inclination"
          unit="inclination"/>
        </v-col>
        <v-col cols="2">
          <widget-circ
            :value="kms"
            unit="KMs"
            v-bind:class="{ blink: distanceCloseToFinish }"
          />
        </v-col>
        <v-col cols="2">
          <widget-circ
            :value="training_time"
            unit="tiempo"
            v-bind:class="{ blink: timeCloseToFinish }"
          />
        </v-col>
      </v-row>
      <v-row class="justify-space-around" no-gutters="" align="center">
        <v-col cols="8">
          <v-row justify="center">
            <v-col cols="3" class="justify-center">
              <widget-img  :value="heartbeat" unit="PPS">
                <img style="height:65px" src="../../assets/png/corazon_borde.svg" />
              </widget-img>
            </v-col>
            <v-col cols="3">
              <widget-img  :value="rhythm" unit="min/km">
                <img style="height:65px" src="../../assets/png/cardio_borde.svg" />
              </widget-img>
            </v-col>
            <v-col cols="3">
              <div class="frame">
                <widget-img  :value="calories" unit="kcal">
                  <img style="height:65px" src="../../assets/png/calorias_borde.svg" />
                </widget-img>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row justify="center">
            <v-col  class="pl-0 pb-5">
              <training-graphic />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="video_mode">
      <v-container fluid>
        <v-row justify="center">
          <video ref="myvideo" 
            @ended="videoEnds"
            src="../../assets/videos/bata.mp4"
            height="450px"
          ></video>
        </v-row>
      </v-container>
    </div>
    <control-bar @playerEvent="controlPlayer"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ControlBar from '../../components/footers/ControlBar.vue';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import TrainingGraphic from './TrainingGraphic.vue';
import WidgetCirc from '../../components/common/WidgetCirc.vue';
import WidgetCirc2 from '../../components/common/WidgetCirc2.vue';
import ControlService from '../../services/ControlService';
import WidgetImg from '../../components/common/WidgetImg.vue';
import FinishTrainingModal from '../../components/modals/FinishTrainingModal.vue';
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
    WidgetCirc2,
    FinishTrainingModal,
  },
  props: {
    training_mode: String,
    video_path: String,
    training_value: String,
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
    rhythm: state => state.treadmill.status.rhythm,
    heartbeat: state => state.treadmill.status.heartbeat,
    calories: state => state.treadmill.status.calories,
    isFinished: state => state.treadmill.training_view_event.action,
  }),
  data() {
    return {
      video_mode: true,
      video_path2: '../../assets/videos/bata.mp4',
      trainParams: {
        training_mode: this.training_mode,
        training_value: this.training_value,
        user_age: this.user_age.toString(),
        user_weight: this.user_weight.toString(),
        initial_speed: this.initial_speed.toString(),
      },
      showTrainingFinishModal: false,
      distanceCloseToFinish: false,
      timeCloseToFinish: false,
      speedPorc: 0,
      inclinationPorc: 0,
    };
  },
  methods: {
    controlPlayer(event) {
      if (event === 'running') {
        this.$refs.myvideo.play();
      } else if (event === 'stopped') {
        this.$refs.myvideo.pause();
      }
    },
    setScreen() {
      if (this.training_mode === 'virtual') {
        this.video_mode = true;
        // this.$refs.myvideo.src = this.video_path;
      } else {
        this.video_mode = false;
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
      this.speedPorc = parseInt(value, 10) * 100 / TRAININGDEF.MAX_SPEED;
    },
    inclination(value) {
      this.inclinationPorc = parseInt(value, 10) * 100 / TRAININGDEF.MAX_INC;
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
