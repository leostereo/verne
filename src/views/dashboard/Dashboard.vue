<template>
  <div>
    <main-header />
    <v-container fluid>
      <v-row align="center" class="mx-12" justify="center">
        <training-modes />
      </v-row>
    </v-container>
    <main-footer />
  </div>
</template>

<script>
import TrainingModes from './TrainingModes.vue';
import MainHeader from '../../components/headers/MainHeader.vue';
import MainFooter from '../../components/footers/MainFooter.vue';

export default {
  components: {
    TrainingModes,
    MainHeader,
    MainFooter,
  },
};
</script>
