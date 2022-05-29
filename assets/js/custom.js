$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 380) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

$(".arrow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("section").next().offset().top,
    },
    1000
  );
});

$(document).ready(function () {
  var scrollPos = 0;
  $(".arrow").removeClass("hidden");
  $(document).scroll(function () {
    scrollPos = $(this).scrollTop();
    if (scrollPos <= 110) {
      $(".arrow").removeClass("hidden");
    } else {
      $(".arrow").addClass("hidden");
    }
  });
});
