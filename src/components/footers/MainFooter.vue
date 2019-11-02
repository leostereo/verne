<template>
  <v-footer absolute class="font-weight-medium footer">
    <v-col cols="12">
      <strong>{{ getId }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    id: 'SGM2390',
  }),
  computed: {
    getId() {
      return this.id;
    },
  },
};
</script>

<style scoped>
.footer{
background:transparent;
}