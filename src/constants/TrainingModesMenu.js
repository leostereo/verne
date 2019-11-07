import { ROUTES } from '../router';

const TRAINING_MODES_MENU = [
  {
    id: 1,
    name: 'Programa de distancia',
    src: './img/train_modes/distancia.svg',
    route: ROUTES.TRAINING_SETTINGS,
    showCounter: false,
    mode: 'distance',
  },
  {
    id: 2,
    name: 'Programa de tiempo',
    src: './img/train_modes/tiempo.svg',
    route: ROUTES.TRAINING_SETTINGS,
    showCounter: false,
    mode: 'time',
  },
  {
    id: 3,
    name: 'Entrenamiento programado',
    src: './img/train_modes/cardio.svg',
    route: ROUTES.TRAINING_PROGRAMS,
    showCounter: false,
    mode: 'program',
  },
];

export default TRAINING_MODES_MENU;
