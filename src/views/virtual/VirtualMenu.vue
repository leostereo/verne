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
              :level="card.level" :training_id="card.training_id"
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

import BackHomeButton from '../../components/common/BackHomeButton.vue';
import VirtualItem from './VirtualItem.vue';
import Counter from '../../components/common/Counter.vue';
import SwiperOptions from '../../constants/SwiperOptions';
import VirtualTrainingCards from '../../constants/VirtualTrainingCards';

export default {
  beforeMount() {},
  components: {
    BackHomeButton,
    VirtualItem,
    Counter,
  },
  data: () => ({
    training_id: '',
    video_path: '',
    showCounter: false,
    training_cards: VirtualTrainingCards,
    render: false,
    swiperOption: SwiperOptions,
  }),
  methods: {
    setCounter({ path, showCounter, id, videoPath }) {
      this.path = path;
      this.training_id = id;
      this.video_path = videoPath;
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
          training_mode: 'virtual',
          training_value: this.training_id,
          training_id: this.training_id,
          video_path: this.video_path,
        },
      });
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
