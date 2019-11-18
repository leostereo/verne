<template>
<div>
  <counter :show="showCounter" @on-finish="redirect" />
  <v-container fluid>
    <div class="background-bar"></div>
    <v-row>
      <back-home-button path="/training-programs"/>
    </v-row>
    <v-row v-if="render" justify="center" align="center" class="full-height">
      <v-col cols="4">
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
      <v-col cols="7">
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
        <v-row>
          <v-col cols="6">
            <training-virtual-graphic
            title="velocidad por tiempo" yaxys="kms/h" source="0"/>
          </v-col>
          <v-col cols="6">
            <training-virtual-graphic
            title="inclinacion por tiempo" yaxys="grados" source="1"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="separator"></div>
    <v-footer absolute flat class="font-weight-medium control_bar justify-center">
      <div class="background-bar"></div>
      <start-button value="COMENZAR"
      @show-counter="setCounter" v-if="render"/>
    </v-footer>
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
import StartButton from '../../components/buttons/StartButton.vue';

export default {
  beforeMount() {
    this.getVirtualDetail();
  },
  components: {
    TrainVirtualDetail,
    Counter,
    TrainingVirtualGraphic,
    BackHomeButton,
    StartButton,
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

<style  lang="scss" scoped>
.full-height {
  margin-top: -20px;
  height: calc(100vh - 10px);
}.control_bar {
  background: transparent;
}
.separator{
  height: 260px;
}
.background-bar {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  background-color: $primary-color;
  height: 78px;
  width: 100%;
  top: 175px;
  position: absolute;
  z-index: -1;
}
</style>
