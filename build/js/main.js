!function(){"use strict";const e=()=>{const e=D.querySelector(".js-menu"),t=D.querySelector(".js-burger");e.classList.toggle("is-active"),t.classList.toggle("is-active")},t=()=>{const e=D.querySelector(".js-header");(W.pageYOffset|D.body.scrollTop)>200?e.classList.add("is-fixed"):e.classList.remove("is-fixed")};D.addEventListener("DOMContentLoaded",function(){D.querySelector(".js-burger").addEventListener("click",e),W.addEventListener("scroll",t)});D.addEventListener("DOMContentLoaded",function(){(()=>{const e=document.querySelectorAll(".js-anim");window.onscroll=(()=>{if(document.querySelectorAll(".js-anim:not(.visible)"))for(const t of e)t.getBoundingClientRect().top<=.75*window.innerHeight&&t.getBoundingClientRect().top>0&&t.classList.add("visible")})})()}),D.addEventListener("DOMContentLoaded",function(){new Swiper(".js-project-slider",{slidesPerView:1,spaceBetween:30,loop:!1,speed:500,simulateTouch:!0,watchSlidesProgress:!0,navigation:{nextEl:".js-project-slider-next",prevEl:".js-project-slider-prev"},breakpoints:{769:{spaceBetween:10}}})})}();
//# sourceMappingURL=main.js.map
