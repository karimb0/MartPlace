$(function () {
  // var mixer = mixitup(".products__inner-box");
  $(".bottom-stars").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
  });

  $(".products-slider__inner").slick({
    nextArrow:
      '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
  });
});
