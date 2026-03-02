export default function initWelcomeSlider() {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    speed: 800,

    // If we need pagination
    pagination: {
      el: '.welcome__slider-dots',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.welcome__right-arrow',
      prevEl: '.welcome__left-arrow',
    },
  });
  const welcome_slider_number = document.querySelector('.welcome__slider-number');
  swiper.on('slideChange', () => {
    const currentSlide = swiper.realIndex;
    welcome_slider_number.innerHTML = `0${currentSlide + 1}`;
  });
}
