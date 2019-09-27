<template>
  <v-row justify="center">
    <v-btn icon>
      <v-icon>mdi-skip-previous</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-play-circle</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-skip-next</v-icon>
    </v-btn>
    <v-chip class="ma-2" color="indigo" text-color="white" v-if="true">
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
