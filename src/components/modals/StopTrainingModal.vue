<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="400">
      <v-card>
        <v-card-title class="headline">Confirmar</v-card-title>
        <v-card-text>
          ¿Está seguro que desea finalizar con el entrenamiento?
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="indigo darken-1" text @click="toggleModal(false)">No</v-btn>
          <v-btn color="indigo darken-1" text @click="toggleModal(true)">Si</v-btn>
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
