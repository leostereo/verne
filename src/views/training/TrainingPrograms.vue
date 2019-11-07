<template>
  <v-container fluid>
    <v-row>
      <back-home-button/>
    </v-row>
    <v-row justify="center" class="full-height" align="center">
      <v-col cols="11">
        <swiper :options="swiperOption" class="slider">
          <swiper-slide v-for="card in training_cards" :key="card.training_id" class="inner">
            <v-card class="program-training-card ml-10 white--text">
              <v-card-title
                class="justify-center fill-height"
                v-text="card.name"
                @click="redirect(card.training_id)"
              >
              </v-card-title>
              <divider></divider>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <img style="height:30px" src="../../assets/png/nivel.svg" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">
                      nivel: {{ card.level }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <img style="height:30px" src="../../assets/png/tiempo.svg" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">
                      tiempo: {{ card.total_time }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <img style="height:30px" src="../../assets/png/creador.svg" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">
                      Creador: {{ card.creator }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
              <v-divider></v-divider>
              <div>
                <start-button-blue />
              </div>
            </v-card>
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
import Divider from '../../components/common/Divider.vue';
import BackHomeButton from '../../components/common/BackHomeButton.vue';
import StartButtonBlue from '../../components/common/StartButtonBlue.vue';

export default {
  beforeMount() {
    this.getProgramsData();
  },
  components: {
    Divider,
    BackHomeButton,
    StartButtonBlue,
  },
  data: () => ({
    training_cards: '',
    render: false,
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    },
  }),
  computed: mapState({
    training_view: state => state.treadmill.training_view,
  }),
  methods: {
    getProgramsData() {
      ProgramService.getProgramsData();
    },
    createProgramCards(cards) {
      this.training_cards = cards;
    },
    redirect(trainingId) {
      this.$router.push({
        name: '/training-program-detail',
        params: {
          training_id: trainingId.toString(),
        },
      });
    },
  },
  watch: {
    training_view(value) {
      this.createProgramCards(value.training_list);
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

.slider {
  background-color: transparent;
}
.inner{
  margin: auto;
  width: 50% ;
  background-color: transparent;
}
</style>
