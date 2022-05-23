$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 380) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

var $header = jQuery(".arrow");
var appScroll = appScrollForward;
var appScrollPosition = 0;
var scheduledAnimationFrame = false;

function appScrollForward() {
  scheduledAnimationFrame = false;
  if (appScrollPosition < 100) return;
  $header.removeClass("arrow");
  appScroll = appScrollReverse;
}

function appScrollReverse() {
  scheduledAnimationFrame = false;
  if (appScrollPosition > 100) return;
  $header.addClass("arrow");
  appScroll = appScrollForward;
}

function appScrollHandler() {
  appScrollPosition = window.pageYOffset;
  if (scheduledAnimationFrame) return;
  scheduledAnimationFrame = true;
  requestAnimationFrame(appScroll);
}

jQuery(window).scroll(appScrollHandler);
