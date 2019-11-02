<template>
         <v-card class="program-train-card"
            @click="redirect()">
          <v-card-title class="layout justify-center 
           white--text subtitle-2">
           <v-list-item>
                <v-list-item-icon>
                  <img style="height:80px" src="../../assets/png/entrenamiento.svg" />
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
                  <img style="height:30px" src="../../assets/png/tiempo.svg" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="white--text">
                    tiempo: {{ time }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img style="height:30px" src="../../assets/png/objetivos.svg" />
                </v-list-item-icon>
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
                  <img style="height:30px" src="../../assets/png/creador.svg" />
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
import Divider from '../../components/common/Divider';

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
}
</style>
