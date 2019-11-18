<template>
  <div>
    <multimedia-header />
    <v-container fluid>
      <v-row>
        <v-col cols="auto">
          <back-home-button />
        </v-col>
        <v-col>
          <v-row justify="space-around" align="center" class="info-container">
            <v-col offset="1" cols="auto" class="widget-container">
              <v-card class="verneback justify-center">
                <div class="separator_prog"></div>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <img style="height:60px" src="../../assets/icons/entrenamiento.svg" />
                      </v-list-item-icon>
                      <v-list-item-content class="verne_text">
                        <v-list-item-title>Estadisticas</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                <v-divider class="verne_divider"></v-divider>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/tiempo.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="tiempo"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/distancia.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="distancia"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:26px" src="../../assets/icons/velocidad_stats.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="vel_promedio"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:26px" src="../../assets/icons/velocidad_stats.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="vel_maxima"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/corazon.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="pulso_prom"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/corazon.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="pulso_max"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/cardio.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="ritmo_max"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <img style="height:30px" src="../../assets/icons/cardio.svg" />
                    </v-list-item-icon>
                    <v-list-item-content class="verne_text">
                      <v-list-item-title v-text="ritmo_prom"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-card>
            </v-col>
            <v-col>
              <v-row align="center" justify="center">
                <stats-graphic />
              </v-row>
            </v-col>
          </v-row>
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
import BackHomeButton from '../../components/buttons/BackHomeButton.vue';

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
.info-container {
  height: calc(100vh - 112px);
}
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
