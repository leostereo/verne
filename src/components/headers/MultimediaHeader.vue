<template>
  <v-toolbar flat class="header">
    <v-row>
      <v-col cols="3">
        <hour />
      </v-col>
      <v-col cols="6">
        <player v-if="!video_mode"/>
        <little-status v-if="video_mode"/>
      </v-col>
      <v-col cols="3">
        <volumen />
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
import Hour from '../common/Hour.vue';
import Volumen from '../common/Volumen.vue';
import Player from '../common/Player.vue';
import LittleStatus from './LittleStatus.vue';

export default {
  components: {
    Hour,
    Volumen,
    Player,
    LittleStatus,
  },
  props: {
    video_mode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.header{
  background:transparent;
}

</style>
