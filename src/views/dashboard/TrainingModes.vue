<template>
  <v-container fluid>
    <v-row align="center" class="full-height" justify="center">
      <v-col cols="3">
        <v-card class="dashboard-card verne-card justify-center">
          <div class="separator_prog"></div>
          <div class="icon">
            <img height="100px" src="../../assets/icons/entrenamiento.svg" />
          </div>
          <v-card-title class="justify-center verne-text text-center subtitle-1">
            MENU DE ENTRENAMIENTOS
          </v-card-title>
          <v-divider class="verne_divider"></v-divider>
          <v-list-item-group>
            <v-list-item
              v-for="(trainMode, i) in trainMenu"
              :key="i"
              @click="redirect(
                trainMode.route, trainMode.showCounter, trainMode.mode, trainMode.url)">
              <v-list-item-icon>
                <img width="30px" height="30px" :src="trainMode.src" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="verne-text" v-text="trainMode.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="dashboard-card quick-start-card verneback justify-center">
          <div class="align-self-center wrapper">
            <button
              class="simple_button font-weight-bold display-1"
              @click="redirect(routes.TRAINING, true,'quick')"
            >
              QUICK
              <br />START
            </button>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="dashboard-card verne-card justify-center">
          <div class="separator_app"></div>
          <div class="icon">
            <img style="height:100px" src="../../assets/icons/aplicaciones.png" />
          </div>
          <v-card-title class="justify-center text-center verne-text subtitle-1">
            APLICACIONES
          </v-card-title>
          <v-divider class="verne_divider"></v-divider>
          <v-row no-gutters class="items-container">
            <v-col class="item-col" v-for="card in apps_cards" :key="card.training_id" cols="6">
              <button @click="redirect(routes.TRAINING, true, 'app', card.url)" class="item-btn">
                <dashboard-app-item :src="card.src" class="app_icon"/>
              </button>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
     </v-row>
  </v-container>
</template>

<script>
import TRAINING_MODES_MENU from '../../constants/TrainingModesMenu';
import QUICK from '../../constants/QuickTrain';
import { ROUTES } from '../../router';
import APPS_CARDS from '../../constants/AppsCards';
import DashboardAppItem from './DashboardAppItem.vue';

export default {
  components: {
    DashboardAppItem,
  },
  data: () => ({
    trainMenu: TRAINING_MODES_MENU,
    quick: QUICK,
    routes: ROUTES,
    apps_cards: APPS_CARDS,
  }),
  methods: {
    redirect(path, showCounter, mode, url) {
      this.$emit('show-counter', {
        path, showCounter, mode, url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.quick-start-card {
  display: flex !important;
}
.full-height {
  height: calc(100vh - 80px);
}
.verne-card {
  background-color: $primary-color;
  color: $verne_text-color;
}
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
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
.dashboard-card {
  height: calc(100vh - 180px);
}
.simple_button {
  background-color: transparent;
  background-image: url(../../assets/icons/comenzar.svg);
  height: 250px;
  width: 250px;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline: none;
  border: 0;
  color: $verne_text-color;
}
.wrapper {
  outline: none;
  border: 0;
  border: none;
}
.app_icon{
  outline: none;
  border: 0;
}
.items-container {
  padding: 10px;
  height: calc(100vh - 370px);
}
.item-col {
  display: flex;
  justify-content: center;
}
.item-btn {
  width: 100%;
}
</style>
