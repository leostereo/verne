import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

export default Vue.use(VueAwesomeSwiper, {
  initialSlide: 0,
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  watchOverflow: true,
  breakpoints: {
    1904: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1264: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 150,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 150,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
