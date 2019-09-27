<template>
  <div>
    <multimedia-header />
    <v-container fluid>
      <v-row>
        <v-col cols="9">
          <v-row no-gutters align="center" justify="space-around">
            <v-col cols="4" v-for="w in horizontal_widgets" :key="w.id">
              <widget :icon="w.icon" :value="w.text" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <training-graphic />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="widget-container">
          <v-row v-for="w in vertical_widgets" :key="w.id" no-gutters>
            <v-col>
              <widget :icon="w.icon" :value="w.text" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <control-bar />
  </div>
</template>

<script>
import ControlBar from '../../components/footers/ControlBar.vue';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import TrainingGraphic from './TrainingGraphic.vue';
import Widget from '../../components/common/Widget.vue';
import { HORIZONTAL_WIDGETS, VERTICAL_WIDGETS } from '../../constants/TrainingWidgets';

export default {
  components: {
    ControlBar,
    MultimediaHeader,
    TrainingGraphic,
    Widget,
  },
  data: () => ({
    horizontal_widgets: HORIZONTAL_WIDGETS,
    vertical_widgets: VERTICAL_WIDGETS,
  }),
};
</script>

<style>
.widget-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
