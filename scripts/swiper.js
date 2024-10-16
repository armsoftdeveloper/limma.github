document.addEventListener('DOMContentLoaded', function () {
  var swiperWrapper = document.querySelector('.companies-slider-wrapper');
  var slideCount = swiperWrapper.querySelectorAll('.swiper-slide').length;
  var swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 30,
      }
    }
  });
});

var swiper = new Swiper('.swiper-what-people-says-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  watchSlidesVisibility: true,
  speed: 600,
});
