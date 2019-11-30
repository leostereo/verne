<template>
<div>
  <counter :show="showCounter" @on-finish="redirect" />
  <v-container fluid>
    <div class="background-bar"></div>
    <v-row>
      <back-home-button path="/training-virtual"/>
    </v-row>
    <v-row v-if="render" justify="center" align="center">
      <v-col cols="3">
        <train-virtual-detail
          :creator="card.creator"
          :name="card.name"
          :time="card.total_time"
          :description="card.description"
          :level="card.level"
          :place="card.place"
          :distance="card.distance"
        />
      </v-col>
      <v-col cols="8">
        <v-row justify="center">
          <v-col cols="10">
            <v-card>
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item,i) in card.images"
                  :key="i"
                  :src="item"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="virtual-graphs">
          <v-col cols="6">
            <training-virtual-graphic :options="speedGraph" :source="0"/>
          </v-col>
          <v-col cols="6">
            <training-virtual-graphic :options="inclinationGraph" :source="1"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <start-footer @click="setCounter" v-if="render"></start-footer>
  </v-container>
</div>

</template>

<script>
import { mapState } from 'vuex';
import ProgramService from '../../services/ProgramService';
import TrainVirtualDetail from './TrainVirtualDetail.vue';
import Counter from '../../components/common/Counter.vue';
import TrainingVirtualGraphic from './TrainingVirtualGraphic.vue';
import BackHomeButton from '../../components/buttons/BackHomeButton.vue';
import StartFooter from '../../components/footers/StartFooter.vue';
import TRAINING_VIRTUAL_SPEED_GRAPH from '../../constants/TrainingVirtualGraphSpeed';
import TRAINING_VIRTUAL_INCLINATION_GRAPH from '../../constants/TrainingVirtualGraphInclination';

export default {
  beforeMount() {
    this.getVirtualDetail();
  },
  components: {
    TrainVirtualDetail,
    Counter,
    TrainingVirtualGraphic,
    BackHomeButton,
    StartFooter,
  },
  props: {
    training_value: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      mode: 'virtual',
      trainDetail: {
        training_id: this.training_value,
      },
      card: {},
      render: false,
      showCounter: false,
      speedGraph: TRAINING_VIRTUAL_SPEED_GRAPH,
      inclinationGraph: TRAINING_VIRTUAL_INCLINATION_GRAPH,
    };
  },
  computed: mapState({
    training_view: state => state.treadmill.training_view,
  }),
  methods: {
    getVirtualDetail() {
      ProgramService.getVirtualDetail(this.trainDetail);
    },
    createTrainDetailCard(card) {
      this.card = card;
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
          training_value: this.training_value,
          video_path: this.card.video_path,
        },
      });
    },
  },
  watch: {
    training_view(value) {
      this.createTrainDetailCard(value.training_element);
      this.render = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.virtual-graphs {
  height: calc(100vh - 550px);
}
</style>
