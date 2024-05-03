const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 120,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev'
  },
  
  breakpoints: {
    1440: {
      slidesPerView:3,
    },
    940: {
      slidesPerView:2,
    },
    320: {
      slidesPerView:1,
      centeredSlides: true,
    }
  },
})
//cool