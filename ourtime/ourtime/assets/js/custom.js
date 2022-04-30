/** @format */

//----- header link active----
$(".custom_navbar ul li.nav-item  ").on("click", function () {
  $(".custom_navbar ul li.nav-item ").removeClass("active");
  $(this).addClass("active");
});
// ---header search box--
$(document).ready(function () {
  $(".search-icon-header").click(function () {
    $(".form-container").toggle();
    $("#searchbox1").focus();
  });
});
// ---header search box--
$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".form-container").toggle();
    $("#searchbox1").focus();
  });
});
// -----responsive menu---
$(".toggler-icon").on("click", function () {
  $("body").removeClass("sidebar-active");
  $("body").addClass("sidebar-active");
});
$(".close-menu").on("click", function () {
  $("body").removeClass("sidebar-active");
});
// ------slider--------
$(".slider").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: false,
  navText: [
    `<span class="material-icons material-icons-outlined">
arrow_back
</span>`,
    `<span class="material-icons material-icons-outlined">
arrow_forward
</span>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
// --------------PORTFOLIO GALLARY---------
// init Isotope
var slickoptions = {
  rows: 1,
  dots: false,
  appendDots: $(".slick-nav"),
  appendArrows: $(".slick-nav"),
  accessibility: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 962,
      settings: {
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToScroll: 1,
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};

$(document).ready(function () {
  $(".slider2").slick(slickoptions);
  var slider = $(".slider2");
  var allSlides = $(".slider2 .slick-slide").clone();
  var trigger = $("js-filter");

  var ClassFilter = function (object, item) {
    this.object = object;
    this.item = item;

    this.filterFunc = function () {
      $(".active").removeClass("active");
      $('.js-filter[data-filter="' + this.item + '"]').addClass("active");
      var filterSlides = allSlides.filter(this.item);

      slider.css({ opacity: "0", left: "50px" });
      setTimeout(function () {
        slider
          .slick("unslick")
          .empty()
          .append(filterSlides)
          .slick(slickoptions)
          .css({ opacity: "100", left: "0px" });
      }, 600);
    };
  };

  jQuery(".js-filter").on("click", function (e) {
    var attr = jQuery(this).attr("data-filter");
    var newFilter = new ClassFilter(this, attr);
    newFilter.filterFunc();
  });
});
// --watches slider--------
$(".watches-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    `<span class="material-icons material-icons-outlined">
arrow_back
</span>`,
    `<span class="material-icons material-icons-outlined">
arrow_forward
</span>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
// ---cusrsor---
// UPDATE: I was able to get this working again... Enjoy!

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
