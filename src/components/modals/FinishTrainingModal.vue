<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="400">
      <v-card class="verneback verne_text">
        <v-card-title class="headline verne_text">Felicitaciones!!</v-card-title>
        <v-card-text class="headline white--text">
          Ha terminado el entrenamiento.
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <button class="verne_degrade verne_container_rounded"
              @click="toggleModal(true)">
              Ver estadísticas
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    toggleModal(response) {
      this.$emit('on-close', response);
    },
  },
};
</script>
<style scoped>
.verne_back{
  background-color:
}
</style>
