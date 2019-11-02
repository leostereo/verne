<template>
  <v-toolbar flat class="header">
    <v-row>
      <v-col cols="3">
        <hour />
      </v-col>
      <v-col cols="6">
        <player />
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

export default {
  components: {
    Hour,
    Volumen,
    Player,
  },
};
</script>
<style scoped>
.header{
background:transparent;
}

</style>
