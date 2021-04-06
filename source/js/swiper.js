import Swiper, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

Swiper.use([Autoplay, Pagination]);

const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,

    renderBullet: function (index, className) {
      return `<li class="carusel__dots-item ${className}">
          <button class="carusel__dot sr-only" type="button">${index + 1}</button>
        </li>`;
    },
  },

  autoplay: true,
});
