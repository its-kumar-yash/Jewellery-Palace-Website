// background image  Slider section
function dataBackgroundImage() {
  $("[data-bgimg]").each(function () {
    var bgImgUrl = $(this).data("bgimg");
    $(this).css({
      "background-image": "url(" + bgImgUrl + ")", // concatenation
    });
  });
}

$(window).on("load", function () {
  dataBackgroundImage();
});

//for carousel slider of the slider section
$(".slider_area").owlCarousel({
  animateOut: "fadeOut",
  autoplay: true,
  loop: true,
  nav: false,
  autoplayTimeout: 6000,
  items: 1,
  dots: true,
});
