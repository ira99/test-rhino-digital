//mobile menu
const mobileMenu = () => {
  const nav = D.querySelector('.js-menu'),
        burger = D.querySelector('.js-burger');

  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
}


//fixed header
const fixedHeader = () => {
  const header = D.querySelector('.js-header'),
        scrollBarPosition = W.pageYOffset | D.body.scrollTop;

  if( scrollBarPosition  > 200) {
    header.classList.add("is-fixed")
  } else {
    header.classList.remove("is-fixed")
  }
}


D.addEventListener("DOMContentLoaded", function() {

    D.querySelector('.js-burger').addEventListener('click', mobileMenu);
		W.addEventListener("scroll", fixedHeader);

});

