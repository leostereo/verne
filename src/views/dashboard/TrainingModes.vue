<template>
  <v-container fluid>
    <v-row align="center" class='full-height' justify="center">
      <v-col cols="4">
        <v-card class="mx-auto" height="100%">
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Clicked</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto">
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Clicked</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto">
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Clicked</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.full-height {
  margin-top: -64px;
  height: calc(100vh - 48px);
}
</style>
