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

const overlay = document.querySelector('.overlay');
const products = document.querySelectorAll('.product');
const productCard = document.querySelector('.product-card');
const closeBtn = document.querySelector('.product-card__btn-close');

products.forEach((product) => {
  const productsCount = product.querySelector('.product__amount');

  product.addEventListener('click', (e) => {
    if (e.target.classList.contains('product__btn-inc')) {
      productsCount.innerHTML++;
    }
    if (e.target.classList.contains('product__btn-dec')) {
      if (productsCount.innerHTML > 1) {
        productsCount.innerHTML--;
      }
    } else if (e.target !== productsCount && !e.target.classList.contains('product__btn')) {
      productCard.classList.add('product-card--visible');
      overlay.classList.add('overlay--visible');
    }
  });
});
closeBtn.addEventListener('click', () => {
  productCard.classList.remove('product-card--visible');
  overlay.classList.remove('overlay--visible');
});

const modalBtnGroups = productCard.querySelectorAll('.product-card__btns');
const modalOneBtnGroup = modalBtnGroups[0].querySelectorAll('.product-card__btn');
const modalTwoBtnGroup = modalBtnGroups[1].querySelectorAll('.product-card__btn');

modalOneBtnGroup.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalOneBtnGroup.forEach((el) => el.classList.remove('product-card__btn--active'));
    btn.classList.add('product-card__btn--active');
  });
});

modalTwoBtnGroup.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalTwoBtnGroup.forEach((el) => el.classList.remove('product-card__btn--active'));
    btn.classList.add('product-card__btn--active');
  });
});

const ingredients = productCard.querySelector('.ingredients');

ingredients.addEventListener('click', (e) => {
  if (e.target.classList.contains('ingredients__add-btn')) {
    e.target.classList.toggle('ingredients__add-btn--active');
  }
});
