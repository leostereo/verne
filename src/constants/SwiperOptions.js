
const SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 1,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};

export default SwiperOptions;
