var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {// настройки для разных разрешений
    768: {
      slidesPerView: 'auto',
      spaceBetween: 8
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1192: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

