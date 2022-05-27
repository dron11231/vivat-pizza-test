import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 150,
  freeMode: true,

  breakpoints: {

    900: {
      slidesPerView: 3,
      spaceBetween: 150,
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});
