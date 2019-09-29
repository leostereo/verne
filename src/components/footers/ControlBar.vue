<template>
  <div>
    <stop-training-modal :show="showConfirmModal" @on-close="handleOnCloseModal" />
    <v-footer absolute class="font-weight-medium">
      <v-col offset="2" cols="1">
        <indicator title="Velocidad" :value="speed" />
      </v-col>
      <v-col cols="2" class="text-left">
        <v-btn class="mx-2" outlined medium fab color="indigo"
          @click="handleOnClickSpeed(false)">
          <v-icon dark>mdi-arrow-down-bold</v-icon>
        </v-btn>
        <v-btn class="mx-2" outlined medium fab color="indigo"
          @click="handleOnClickSpeed(true)">
          <v-icon dark>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2" class="text-center">
        <v-btn class="mx-2" outlined large fab color="indigo"
          @click="handleOnClickStart()">
          <v-icon x-large dark>{{icon}}</v-icon>
        </v-btn>
        <v-btn class="mx-2" outlined medium fab color="red"
          @click="handleOnClickStop()">
          <v-icon large dark>mdi-stop</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn class="mx-2" outlined medium fab color="indigo"
          @click="handleOnClickInclination(false)">
          <v-icon dark>mdi-arrow-down-bold</v-icon>
        </v-btn>
        <v-btn class="mx-2" outlined medium fab color="indigo"
          @click="handleOnClickInclination(true)">
          <v-icon dark>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <indicator title="Inclinación" :value="inclination" />
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Indicator from '../common/Indicator.vue';
import StopTrainingModal from '../modals/StopTrainingModal.vue';
import ControlService from '../../services/ControlService';
import { ROUTES } from '../../router';

const ICONS = {
  PAUSE: 'mdi-pause',
  PLAY: 'mdi-play',
};

export default {
  beforeMount() {
    this.setIcon(this.start);
  },
  components: {
    Indicator,
    StopTrainingModal,
  },
  data() {
    return {
      icon: null,
      showConfirmModal: false,
    };
  },
  computed: mapState({
    speed: state => state.treadmill.status.speed,
    inclination: state => state.treadmill.status.inclination,
    state: state => state.treadmill.status.state,
  }),
  methods: {
    setIcon(value) {
      this.icon = value ? ICONS.PAUSE : ICONS.PLAY;
    },
    handleOnClickStart() {
      const value = !this.start;
      if (value) {
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
        this.$router.push({ path: ROUTES.TRAINING_RESULTS });
      }
    },
  },
};
</script>
