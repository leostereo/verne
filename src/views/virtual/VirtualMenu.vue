<template>
  <v-container fluid>
  <counter :show="showCounter" @on-finish="redirect" />
    <v-row>
      <back-home-button/>
    </v-row>
   <v-row justify="center" class="full-height" align="center">
     <v-col cols="11">
        <swiper :options="swiperOption" class="slider">
          <swiper-slide v-for="card in training_cards" :key="card.training_id" class="inner">
            <virtual-item
              :creator="card.creator"
              :name="card.name" :time="card.time"
              :level="card.level" :training_id="card.id"
              :place="card.place" :src="card.src"
              :video_path="card.video_path"
              @show-counter="setCounter"
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import ProgramService from '../../services/ProgramService';
import BackHomeButton from '../../components/common/BackHomeButton.vue';
import VirtualItem from './VirtualItem.vue';
import Counter from '../../components/common/Counter.vue';
import SwiperOptions from '../../constants/SwiperOptions';

export default {
  beforeMount() {
    this.getVirtualData();
  },
  components: {
    BackHomeButton,
    VirtualItem,
    Counter,
  },
  data: () => ({
    training_id: '',
    showCounter: false,
    training_cards: '',
    render: false,
    swiperOption: SwiperOptions,
  }),
  computed: mapState({
    training_view: state => state.treadmill.training_view,
  }),
  methods: {
    getVirtualData() {
      ProgramService.getVirtualData();
    },
    createVirtualCards(cards) {
      this.training_cards = cards;
    },
    setCounter({ path, showCounter, id }) {
      this.path = path;
      this.training_id = id;
      this.showCounter = showCounter;
      if (!showCounter) {
        this.redirect();
      }
    },
    redirect() {
      this.showCounter = false;
      this.$router.push({
        name: this.path,
        params: {
          training_mode: 'program',
          training_value: this.training_id,
          training_id: this.training_id,
        },
      });
    },
  },
  watch: {
    training_view(value) {
      this.createVirtualCards(value.training_list);
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
