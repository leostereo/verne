<template>
<div>
  <counter :show="showCounter" @on-finish="redirect" />
  <v-container fluid>
    <v-row>
      <back-home-button path="/training-programs"/>
    </v-row>
    <v-row v-if="render" justify="center" align="center" class="full-height">
      <v-col cols="4">
        <train-program-detail
          :creator="card.creator"
          :name="card.name"
          :time="card.total_time"
          :description="card.description"
          @show-counter="setCounter"
        />
      </v-col>
      <v-col cols="3">
          <training-program-graphic
          title="velocidad por tiempo" yaxys="kms/h" source="0"/>
      </v-col>
      <v-col cols="3">
          <training-program-graphic
          title="inclinacion por tiempo" yaxys="grados" source="1"/>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>

<script>
import { mapState } from 'vuex';
import ProgramService from '../../services/ProgramService';
import TrainProgramDetail from './TrainProgramDetail.vue';
import Counter from '../../components/common/Counter.vue';
import TrainingProgramGraphic from './TrainingProgramGraphic.vue';
import BackHomeButton from '../../components/common/BackHomeButton.vue';

export default {
  beforeMount() {
    this.getProgramDetail();
  },
  components: {
    TrainProgramDetail,
    Counter,
    TrainingProgramGraphic,
    BackHomeButton,
  },
  props: {
    training_value: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      mode: 'program',
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
    getProgramDetail() {
      ProgramService.getProgramDetail(this.trainDetail);
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
        params: { training_mode: this.mode, training_value: this.training_value },
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

<style scoped>
.full-height {
  margin-top: -20px;
  height: calc(100vh - 10px);
}
</style>
