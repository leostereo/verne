<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="400">
      <v-card class="verneback">
          <div class="text-center pt-10">
            <img style="height:100px" src="@/assets/png/finalizar.svg"/>
          </div>
        <v-card-title class="headline verne_text text-center">
          ¿Está seguro que desea finalizar con el entrenamiento?
        </v-card-title>
          <div class="flex-grow-1 "></div>
          <div class="button-frame">
            <button class="verne_degrade verne_container_rounded"
              @click="toggleModal(false)">
                CANCELAR
              </button>
            <button class="verne_degrade verne_container_rounded"
              @click="toggleModal(true)">
                ACEPTAR
              </button>
          </div>
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
.button-frame{
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>>

</style>