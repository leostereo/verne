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
    title: 'Programas de entrenamiento',
    src: './img/dashboard/programas_entrenamiento.jpg',
    route: ROUTES.TRAINING_PROGRAMS,
    showCounter: false,
  },
  {
    id: 3,
    title: 'Aplicaciones web',
    src: './img/dashboard/apps_web.jpg',
    route: ROUTES.APPS,
    showCounter: false,
  },
];

export default TRAINING_MODES_CARDS;
