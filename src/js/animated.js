const animateScroll = () => {
  const sectionsAnim = document.querySelectorAll('.js-anim');

  window.onscroll = () => {
      if (!document.querySelectorAll('.js-anim:not(.visible)')) return;

      for (const section of sectionsAnim) {
          if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
              section.classList.add('visible');
          }
      }
  }
}

D.addEventListener("DOMContentLoaded", function() {
  animateScroll();
})