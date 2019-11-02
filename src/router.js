import Vue from 'vue';
import Router from 'vue-router';

export const ROUTES = {
  DASHBOARD: '/',
  TRAINING: '/training',
  TRAINING_PROGRAMS: '/training-programs',
  TRAINING_PROGRAM_DETAIL: '/training-program-detail',
  TRAINING_SETTINGS: '/training-settings',
  TRAINING_STATS: '/training/stats',
  APPS: '/apps',
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: ROUTES.DASHBOARD,
      name: 'dashboard',
      component: () => import('./views/dashboard_design/Dashboard.vue'),
    },
    {
      path: ROUTES.TRAINING,
      props: true,
      name: '/training',
      component: () => import('./views/training/Training.vue'),
    },
    {
      path: ROUTES.TRAINING_SETTINGS,
      props: true,
      name: '/training-settings',
      component: () => import('./views/training/TrainingSettings.vue'),
    },
    {
      path: ROUTES.TRAINING_PROGRAMS,
      props: true,
      name: '/training-programs',
      component: () => import('./views/programs/ProgramsMenu.vue'),

    },
    {
      path: ROUTES.TRAINING_PROGRAM_DETAIL,
      props: true,
      name: '/training-program-detail',
      component: () => import('./views/programs/TrainingProgramDetail.vue'),
    },
    {
      path: ROUTES.TRAINING_STATS,
      name: 'stats',
      component: () => import('./views/stats/TrainingStats.vue'),
    },
  ],
});
