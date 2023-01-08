var swiper = new Swiper(".portada", {
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
var swiper2 = new Swiper(".habitaciones", {
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 40,
      direction: "vertical",
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
      direction: "horizontal",
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: "horizontal",
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    },
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});
console.log(new Date(Date.now()).toLocaleDateString())