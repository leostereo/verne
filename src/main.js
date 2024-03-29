import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import moment from './plugins/moment';
import socket from './plugins/socket';
import vuetify from './plugins/vuetify';
import swiper from './plugins/swiper';
import keyboard from './plugins/keyboard';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import './assets/styles/verne.css';
import './assets/styles/vendor/swiper.min.css';
import './assets/styles/vendor/vue-touch-keyboard.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  socket,
  swiper,
  keyboard,
  vuetify,
  moment,
  render: h => h(App),
}).$mount('#app');
