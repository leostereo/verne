<template>
  <v-row justify="center" class="align-center">
    <v-btn icon small class="mx-3">
      <img style="height:30px" src="../../assets/png/atras.svg" alt="">
    </v-btn>
    <v-btn icon small class="mx-3">
      <img style="height:30px" src="../../assets/png/play.svg" alt="">
    </v-btn>
    <v-btn icon small class="mx-3">
      <img style="height:30px" src="../../assets/png/adelante.svg" alt="">
    </v-btn>
    <v-chip class="ma-2" color="#3c3e55" text-color="white" v-if="true">
      <span class="display text-center"></span>
    </v-chip>
  </v-row>
</template>

<style>
.display {
  margin: 0px 15px;
  font-weight: bold;
  font-size: 12px;
  width: 250px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
</style>
