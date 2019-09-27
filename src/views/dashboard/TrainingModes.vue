<template>
  <v-container fluid>
    <v-row align="center" class="full-height" justify="center">
      <v-col cols="4" v-for="card in cards" :key="card.id">
        <v-card @click="redirect(card.route, card.showCounter)">
          <v-img
            :src="card.src"
            class="white--text"
            height="400px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title class="fill-height align-end" v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TRAINING_MODES_CARDS from '../../constants/TrainingModesCards';

export default {
  data: () => ({
    cards: TRAINING_MODES_CARDS,
  }),
  methods: {
    redirect(path, showCounter) {
      this.$emit('show-counter', { path, showCounter });
    },
  },
};
</script>

<style scoped>
.full-height {
  margin-top: -64px;
  height: calc(100vh - 48px);
}
</style>
