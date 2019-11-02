import { ROUTES } from '../router';

const TRAINING_MODES_CARDS = [
  {
    id: 1,
    title: 'Inicio rápido',
    src: './img/dashboard/inicio_rapido.jpg',
    route: ROUTES.TRAINING,
    showCounter: true,
  },
  {
    id: 2,
    title: 'Entrenamiento por distancia',
    src: './img/dashboard/programas_entrenamiento.jpg',
    route: ROUTES.TRAINING_BY_DISTANCE_SETTINGS,
    showCounter: false,
  },
  {
    id: 3,
    title: 'Entrenamiento por tiempo',
    src: './img/dashboard/apps_web.jpg',
    route: ROUTES.TRAINING_BY_TIME_SETTINGS,
    showCounter: false,
  },
];

export default TRAINING_MODES_CARDS;
