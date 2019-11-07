<template>
  <div>
    <finish-training-modal :show="showTrainingFinishModal" @on-close="handleOnCloseModal" />
    <multimedia-header />
    <v-container fluid>
      <v-row justify="center" no-gutters>
        <v-col cols="2">
          <widget-circ :value="speed" unit="KM/Hs"/>
        </v-col>
        <v-col cols="2">
          <widget-circ :value="inclination" unit="inclination"/>
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
    <control-bar/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ControlBar from '../../components/footers/ControlBar.vue';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import TrainingGraphic from './TrainingGraphic.vue';
import WidgetCirc from '../../components/common/WidgetCirc.vue';
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
    FinishTrainingModal,
  },
  props: {
    training_mode: String,
    training_value: String,
    user_age: {
      type: String,
      default: TRAININGDEF.AGE,
    },
    user_weight: {
      type: String,
      default: TRAININGDEF.WEIGHT,
    },
    initial_speed: {
      type: String,
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
      trainParams: {
        training_mode: this.training_mode,
        training_value: this.training_value,
        user_age: this.user_age,
        user_weight: this.user_weight,
        initial_speed: this.initial_speed,
      },
      showTrainingFinishModal: false,
      distanceCloseToFinish: false,
      timeCloseToFinish: false,
    };
  },
  methods: {
    handleTriningFinish(event) {
      if (event === 'training_by_distance_close_to_finish') {
        this.distanceCloseToFinish = true;
      } else if (event === 'training_by_time_close_to_finish') {
        this.timeCloseToFinish = true;
      } else if (event === 'training_by_distance_finished') {
        this.timeCloseToFinish = false;
        this.distanceCloseToFinish = false;
        this.showTrainingFinishModal = true;
      } else if (event === 'training_by_time_finished') {
        this.timeCloseToFinish = false;
        this.distanceCloseToFinish = false;
        this.showTrainingFinishModal = true;
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
    ControlService.startTraining(this.trainParams);
    this.subscribeInProgresChartData();
  },
  watch: {
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
.frame {
  background-color: red;
}
.my_row {
  background-color: red;
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
