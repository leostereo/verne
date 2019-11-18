<template>
<v-card class="verne-card" @click="redirect()">
  <v-card-title class="layout justify-center verne-text subtitle-2">
    <v-list-item>
      <v-list-item-icon>
        <img style="height:80px" src="../../assets/icons/virtual_borde.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          Detalle entrenamiento virtual
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card-title>
    <divider></divider>
  <v-list-item-group>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/nivel.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          Nivel: {{ level }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/tiempo.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          tiempo: {{ time }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/distancia.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          distancia: {{ distance }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/objetivos.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          Descripcion:
        </v-list-item-title>
        <div class="verne-text">
          {{ description }}
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/creador.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          Creador: {{ creator }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/icons/ubicacion.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="verne-text">
          lugar: {{ place }}
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
    distance: {
      type: String,
      default: 'nan',
      required: true,
    },
    creator: {
      type: String,
      default: '0',
      required: true,
    },
    level: {
      type: String,
      default: '0',
      required: true,
    },
    description: {
      type: String,
      default: '0',
      required: true,
    },
    place: {
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

<style lang="scss" scoped>
.verne-card {
  background-color: $primary-color;
  color: $verne_text-color;
}
</style>
