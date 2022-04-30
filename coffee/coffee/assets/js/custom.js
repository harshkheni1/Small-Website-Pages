/** @format */
// --------

Splitting();
ScrollOut({
  targets: "[data-splitting]",
});

// ----header link active---
$(".header .navbar-nav li").on("click", function () {
  $(".header .navbar-nav li").removeClass("active");
  $(this).addClass("active");
});
// ---sticky header----
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// ------offcanvas header---------
$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr("data-trigger");
  $(trigger_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
});

// close button
$(".btn-close").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});
// ------slider---
var $slider = $(".slider");

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html(
      `<span>0${currentSlide} /</span>  <span>0${slidesCount}</span>`
    );
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}
// ---------client SLIDER---------
var $slider = $(".client_slider");

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html(
      `<span>0${currentSlide} /</span>  <span>0${slidesCount}</span>`
    );
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}
// -------banner text---
$(document).ready(function () {
  $(".has-animation").each(function (index) {
    $(this)
      .delay($(this).data("delay"))
      .queue(function () {
        $(this).addClass("animate-in");
      });
  });
});
// ----------ANIMATION JS-----

new WOW().init();

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
// ------CURSOR---
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
//back to top btn
var toggleHeight = $(window).outerHeight() * 1;

$(window).scroll(function () {
  if ($(window).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $(".m-backtotop").addClass("active");

    //Just some cool text changes
    $("h1 span").text("TA-DA! Now hover it and hit dat!");
  } else {
    //Removes active class to make button visible
    $(".m-backtotop").removeClass("active");

    //Just some cool text changes
    $("h1 span").text("(start scrolling)");
  }
});

//Scrolls the user to the top of the page again
$(".m-backtotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
