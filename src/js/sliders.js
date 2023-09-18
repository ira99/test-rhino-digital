D.addEventListener("DOMContentLoaded", function() {

    const projectSwiper = new Swiper('.js-project-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      speed: 500,
      simulateTouch: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.js-project-slider-next',
        prevEl: '.js-project-slider-prev',
      }, 
      breakpoints: {
        769: {
          spaceBetween: 10
        }
      },
    });

});