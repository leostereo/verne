<template>
<v-card class="program-train-card" @click="redirect()">
  <v-card-title class="layout justify-center white--text subtitle-2">
    <v-list-item>
      <v-list-item-icon>
        <img height="80px" src="../../assets/icons/entrenamiento.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          Detalle de entrenamiento
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card-title>
    <divider></divider>
  <v-list-item-group>
    <v-list-item>
      <v-list-item-icon>
        <img height="30px" src="../../assets/icons/tiempo.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          Tiempo: {{ time }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <div class="center-icon">
        <v-list-item-icon>
          <img height="30px" src="../../assets/icons/objetivos.svg" />
        </v-list-item-icon>
      </div>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          Descripcion:
        </v-list-item-title>
        <div class="white--text">
          {{ description }}
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img height="30px" src="../../assets/icons/creador.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          Creador: {{ creator }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</v-card>
</template>

<script>
import Divider from '../../components/common/Divider.vue';

export default {
  components: {
    Divider,
  },
  props: {
    name: {
      type: String,
      default: '0',
      required: true,
    },
    time: {
      type: String,
      default: '0',
      required: true,
    },
    creator: {
      type: String,
      default: '0',
      required: true,
    },
    description: {
      type: String,
      default: '0',
      required: true,
    },
  },
  methods: {
    redirect() {
      this.$emit('show-counter');
    },
  },
};
</script>

<style scoped>
.program-train-card {
  background-color: #3c3e55;
  max-width: 400px;
}
.center-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
