"use strict";

$(document).ready(function () {
  // 手機選單
  $("#nav-box").click(function (e) {
    $("#nav-phone").toggle();
  });
}); //index-swiper 

var swiper = new Swiper(".index-Swiper", {
  slidesPerView: 3,
  spaceBetween: 8,
  centeredSlides: true // 換頁按鈕
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

});
//# sourceMappingURL=all.js.map
