<template>
  <v-container fluid>
    <v-row align="center" class="full-height" justify="center">
      <v-col cols="3">
        <v-card height="500px" class="verneback justify-center">
          <div class="separator_prog"></div>
          <div class="icon">
            <img style="height:100px" src="../../assets/png/entrenamiento.svg" />
          </div>
          <v-card-title class="layout justify-center text-center subtitle-2 verne_text">
            MENU DE<br />ENTRENAMIENTOS
          </v-card-title>
          <v-divider class="verne_divider"></v-divider>
          <v-list-item-group class="verne_text">
            <v-list-item>
              <v-list-item-icon>
                <img style="height:30px" src="../../assets/png/distancia.svg" />
              </v-list-item-icon>
              <v-list-item-content
                @click="redirect(routes.TRAINING_SETTINGS, false,'distance')"
              >
                <v-list-item-title class="verne_text">
                  Programa de distancia
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <img style="height:30px" src="../../assets/png/tiempo.svg" />
              </v-list-item-icon>
              <v-list-item-content
                @click="redirect(routes.TRAINING_SETTINGS, false,'time')"
              >
                <v-list-item-title class="verne_text">
                  Programa de tiempo
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <img style="height:30px" src="../../assets/png/cardio.svg" />
              </v-list-item-icon>
              <v-list-item-content
                @click="redirect(routes.TRAINING_PROGRAMS, false,'time')"
              >
                <v-list-item-title class="verne_text">
                  Entrenamiento programado
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="500px" class="verne_back layout justify-center">
          <div class="separator_quick"></div>
          <div class="align-self-center">
            <button
              class="simple_button font-weight-bold display-1"
              @click="redirect(routes.TRAINING, true,'quick')"
            >
              QUICK<br>START
            </button>
          </div>
         </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="500px" class="verneback card justify-center">
          <div class="separator_app"></div>
          <div class="icon">
            <img style="height:100px" src="../../assets/png/aplicaciones.png" />
          </div>
          <v-card-title class="layout justify-center verne_text">
            Aplicaciones
          </v-card-title>
          <v-divider class="verne_divider"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TRAINING_MODES_MENU from '../../constants/TrainingModesMenu';
import QUICK from '../../constants/QuickTrain';
import { ROUTES } from '../../router';

export default {
  components: {
  },
  data: () => ({
    trainMenu: TRAINING_MODES_MENU,
    quick: QUICK,
    routes: ROUTES,
  }),

  methods: {
    redirect(path, showCounter, mode) {
      this.$emit('show-counter', { path, showCounter, mode });
    },
  },
};
</script>

<style scoped>
.full-height {
  margin-top: -64px;
  height: calc(100vh - 48px);
}

.separator_prog {
  height: 30px;
}

.separator_app {
  height: 30px;
}
.icon {
  text-align: center;
}
.simple_button {
  background-color : transparent;
  background-image: url(../../assets/png/comenzar.svg);
  height: 200px;
  width: 200px;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline:none;
  border: 0;
}
</style>
