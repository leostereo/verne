<template>
  <div>
    <v-toolbar class="">
      <hour />
      <div class="flex-grow-1"></div>
      <template>
        <div class="my-2">
          <v-btn text>
            Mantenimiento
            <v-icon right>mdi-settings</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn text>
            Profesor
            <v-icon right>mdi-account-circle</v-icon>
          </v-btn>
        </div>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import Hour from '../common/Hour.vue';

export default {
  components: {
    Hour,
  },
};
</script>
<style lang="stylus" scoped>

</style>
