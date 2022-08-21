"use strict";

$(document).ready(function () {
  // 手機選單
  $("#nav-box").click(function (e) {
    $("#nav-phone").toggle();
  });
}); //index-swiper 
// var swiper = new Swiper(".index-Swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   centeredSlides: true,
//   breakpoints:{
//     375:{
//       slidesPerView: 2.5,
//       spaceBetween: 20,
//     },
//     576:{
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     767:{
//       slidesPerView: 8,
//       spaceBetween: 24,
//     },
//     992:{
//       slidesPerView: 9,
//       spaceBetween: 24,
//     }
//   }
//   // 換頁按鈕
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   clickable: true,
//   // },
// });

var swiper = new Swiper(".index-Swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    375: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
