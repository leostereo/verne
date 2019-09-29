<template>
  <div>
    <multimedia-header />
    <v-container fluid>
      <v-row>
        <v-col cols="9">
          <v-row no-gutters align="center" justify="space-around">
            <v-col cols="4">
              <widget icon="mdi-speedometer" :value="speed" />
            </v-col>
            <v-col cols="4">
              <widget icon="mdi-angle-acute" :value="inclination" />
            </v-col>
            <v-col cols="4">
              <widget icon="mdi-map-marker-distance" :value="kms" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <training-graphic />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="widget-container">
          <v-row no-gutters>
            <v-col>
              <widget icon="mdi-timer" :value="training_time" />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <widget icon="mdi-heart" :value="heartbeat" />
            </v-col>
          </v-row>
           <v-row no-gutters>
            <v-col>
              <widget icon="mdi-pulse" :value="rhythm" />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <widget icon="mdi-fire" :value="calories" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <control-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ControlBar from '../../components/footers/ControlBar.vue';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import TrainingGraphic from './TrainingGraphic.vue';
import Widget from '../../components/common/Widget.vue';
import ControlService from '../../services/ControlService';

export default {
  components: {
    ControlBar,
    MultimediaHeader,
    TrainingGraphic,
    Widget,
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
  }),
  mounted() {
    if (this.isConnected) {
      ControlService.startPolling();
    }
  },
  watch: {
    isConnected(value) {
      if (value) {
        ControlService.startPolling();
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
</style>
