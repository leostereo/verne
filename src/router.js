import Vue from 'vue';
import Router from 'vue-router';

export const ROUTES = {
  DASHBOARD: '/',
  TRAINING: '/training',
  TRAINING_PROGRAMS: '/training-programs',
  TRAINING_RESULTS: '/training/results',
  APPS: '/apps',
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: ROUTES.DASHBOARD,
      name: 'dashboard',
      component: () => import('./views/dashboard/Dashboard.vue'),
    },
    {
      path: ROUTES.TRAINING,
      name: 'training',
      component: () => import('./views/training/Training.vue'),
    },
    {
      path: ROUTES.TRAINING_RESULTS,
      name: 'results',
      component: () => import('./views/dashboard/Dashboard.vue'),
    },
  ],
});
