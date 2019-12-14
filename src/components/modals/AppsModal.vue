<template>
  <v-row justify="center" align="center">
    <v-dialog persistent v-model="show" width="80%">
      <v-card class="verne-card">
        <swiper class="slider">
          <swiper-slide v-for="card in apps_cards" :key="card.training_id" class="">
            <app-item
              :app_id="card.id"
              :name="card.name"
              :src="card.src"
              :url="card.url"
              @set-url="setUrlApp"
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <button
            class="verne_degrade verne_container_rounded cancel-button"
            @click="toggleModal()"
          >Cancelar</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import APPS_CARDS from '../../constants/AppsCards';
import AppItem from './AppItem.vue';

export default {
  components: {
    AppItem,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: () => ({
    apps_cards: APPS_CARDS,
  }),
  methods: {
    toggleModal() {
      this.$emit('apps-modal-action', { action: 'cancel' });
    },
    setUrlApp(url) {
      this.$emit('apps-modal-action', { action: 'set-url', url });
    },
  },
};
</script>
<style lang="scss" scoped>
.verne-card {
  background-color: $primary-color;
  color: $verne_text-color;
  padding: 35px 10px 10px 10px;
}
.cancel-button {
  padding-top: 0;
  margin-bottom: 0;
}
.slider {
  height: 210px;
}
.swiper-pagination {
  bottom: 0;
}
</style>
