<template>
  <div>
    <multimedia-header />
    <v-container fluid>
      <v-row>
        <back-home-button />
      </v-row>
      <v-row justify="center" class="mt-3">
        <v-col cols="3" class="widget-container">
          <v-card height="500px" class="verneback pl-3 justify-center">
            <div class="separator_prog"></div>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <img style="height:60px" src="../../assets/png/entrenamiento.svg" />
                  </v-list-item-icon>
                  <v-list-item-content class="verne_text">
                    <v-list-item-title>Estadisticas</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            <v-divider class="mb-5 verne_divider"></v-divider>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/tiempo.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="tiempo"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/distancia.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="distancia"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:26px" src="../../assets/png/velocidad_stats.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="vel_promedio"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:26px" src="../../assets/png/velocidad_stats.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="vel_maxima"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/corazon.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="pulso_prom"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/corazon.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="pulso_max"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/cardio.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="ritmo_max"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="my-0">
                  <img style="height:30px" src="../../assets/png/cardio.svg" />
                </v-list-item-icon>
                <v-list-item-content class="verne_text">
                  <v-list-item-title v-text="ritmo_prom"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card height="100%" flat class="graph_card">
            <stats-graphic />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MultimediaHeader from '../../components/headers/MultimediaHeader.vue';
import VERTICAL_WIDGETS from '../../constants/StatsWidgets';
import StatsGraphic from './StatsGraphic.vue';
import BackHomeButton from '../../components/common/BackHomeButton.vue';

export default {
  components: {
    MultimediaHeader,
    StatsGraphic,
    BackHomeButton,
  },
  methods: {
  },
  computed: mapState({
    stats: state => state.treadmill.stats,
  }),
  data: () => ({
    tiempo: 'Tiempo total',
    distancia: 'Distancia recorrida',
    vel_promedio: 'Velocidad promedio',
    vel_maxima: 'Velocidad maxima',
    ritmo_prom: 'Ritmo promedio',
    ritmo_max: 'Ritmo maximo',
    pulso_prom: 'Pulsaciones promedio',
    pulso_max: 'Pulsaciones máximas',
    max_heartbeat: '',
    vertical_widgets: VERTICAL_WIDGETS,
  }),
  watch: {
    stats(value) {
      this.tiempo = `Tiempo total : ${value.training_time}`;
      this.distancia = `Distancia recorrida : ${value.distance} kms`;
      this.vel_promedio = `Velocidad promedio: ${value.average_speed} km/h`;
      this.vel_maxima = `Velocidad maxima : ${value.max_speed}`;
      this.ritmo_prom = `Ritmo promedio : ${value.average_rhythm}`;
      this.ritmo_max = `Ritmo maximo : ${value.max_rhythm}`;
      this.pulso_prom = `Pulso promedio : ${value.average_heartbeat}`;
      this.pulso_max = `Pulso maximo : ${value.max_heartbeat}`;
    },
  },
};
</script>

<style scoped>
.widget-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.graph_card {
  color: white;
  background: transparent;
  }

.item {
  padding :0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
