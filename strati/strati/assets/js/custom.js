new WOW({
  offset: 200,
}).init();
//----- header link active----
$(".header ul li").on("click", function () {
  $(".header ul li").removeClass("active");
  $(this).addClass("active");
});
// ----sticky header--------
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
// ---text animation codepn---
// var spanText = function spanText(text) {
//   var string = text.innerText;
//   var spaned = "";
//   for (var i = 0; i < string.length; i++) {
//     if (string.substring(i, i + 1) === " ")
//       spaned += string.substring(i, i + 1);
//     else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
//   }
//   text.innerHTML = spaned;
// };

// var headline = document.querySelector("h1");

// spanText(headline);

// let animations = document.querySelectorAll(".animation");

// animations.forEach((animation) => {
//   let letters = animation.querySelectorAll("span");
//   letters.forEach((letter, i) => {
//     letter.style.animationDelay = i * 0.1 + "s";
//   });
// });

// ===================================testimonisal slider==================================
$(".client_slider").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: false,

  navText: [
    `<svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9832 15.4231L19.4916 24.7963L17.8417 26.6139L7.68341 15.4231L17.8417 4.23218L19.4916 6.04981L10.9832 15.4231Z" fill="current" />
</svg>

`,
    `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6245 15.4231L8.81226 6.04981L10.5211 4.23218L21.0422 15.4231L10.5211 26.6139L8.81226 24.7963L17.6245 15.4231Z" fill="current"/>
</svg>

`,
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
    1400: {
      items: 3,
    },
  },
});
/***********
Making placeholder star specifically red 
****************/

$(".palceholder").click(function () {
  $(this).siblings("input").focus();
});
$(".form-control").focus(function () {
  $(this).siblings(".palceholder").hide();
});
$(".form-control").blur(function () {
  var $this = $(this);
  if ($this.val().length == 0) $(this).siblings(".palceholder").show();
});
$(".form-control").blur();
// ---offcanvas header----
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
