// ------------sticky header---
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// ----sticky header-------
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 
// --------------popup video------
$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
jQuery(document).ready(function ($) {
    $('.video1').magnificPopup({
       items: {
          src: '<iframe width="760" height="515" src="https://www.youtube.com/embed/YWXJCHhaNXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          type: 'inline'
      }
    });
});
// ---------------------------------------
$('.cardio-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay:true,
    navText: [ `<svg width="8" height="14" viewBox="0 0 8 14" fill="current" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.6129 1.28699C8.12903 1.78471 8.12903 2.53129 7.6129 3.02902L3.09678 7.38409L7.6129 11.7392C8.12903 12.2369 8.12903 12.9835 7.6129 13.4812C7.09677 13.9789 6.32258 13.9789 5.80645 13.4812L0.387098 8.25511C0.129033 8.00625 7.44569e-07 7.75739 7.60961e-07 7.38409C7.77353e-07 7.0108 0.129033 6.76194 0.387098 6.51308L5.80645 1.28699C6.32258 0.789266 7.09677 0.789266 7.6129 1.28699Z" fill="current"/>
        </svg>`,
        `<svg width="8" height="14" viewBox="0 0 8 14" fill="current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.387096 1.28699C-0.129033 1.78471 -0.129033 2.53129 0.387096 3.02902L4.90322 7.38409L0.387097 11.7392C-0.129032 12.2369 -0.129032 12.9835 0.387097 13.4812C0.903226 13.9789 1.67742 13.9789 2.19355 13.4812L7.6129 8.25511C7.87097 8.00625 8 7.75739 8 7.38409C8 7.0108 7.87097 6.76194 7.6129 6.51308L2.19355 1.28699C1.67742 0.789266 0.903225 0.789266 0.387096 1.28699Z" fill="current"/>
        </svg>`],
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:2,
         
        },
        900: {
           items:2, 
        },
        1200:{
            items:2,
           
        },
        1450:{
            items:4,
           
        }
    }
})
$('.yoga-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay:true,
    navText: [ `<svg width="8" height="14" viewBox="0 0 8 14" fill="current" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6129 1.28699C8.12903 1.78471 8.12903 2.53129 7.6129 3.02902L3.09678 7.38409L7.6129 11.7392C8.12903 12.2369 8.12903 12.9835 7.6129 13.4812C7.09677 13.9789 6.32258 13.9789 5.80645 13.4812L0.387098 8.25511C0.129033 8.00625 7.44569e-07 7.75739 7.60961e-07 7.38409C7.77353e-07 7.0108 0.129033 6.76194 0.387098 6.51308L5.80645 1.28699C6.32258 0.789266 7.09677 0.789266 7.6129 1.28699Z" fill="current"/>
</svg>`,
  `<svg width="8" height="14" viewBox="0 0 8 14" fill="current" xmlns="http://www.w3.org/2000/svg">
<path d="M0.387096 1.28699C-0.129033 1.78471 -0.129033 2.53129 0.387096 3.02902L4.90322 7.38409L0.387097 11.7392C-0.129032 12.2369 -0.129032 12.9835 0.387097 13.4812C0.903226 13.9789 1.67742 13.9789 2.19355 13.4812L7.6129 8.25511C7.87097 8.00625 8 7.75739 8 7.38409C8 7.0108 7.87097 6.76194 7.6129 6.51308L2.19355 1.28699C1.67742 0.789266 0.903225 0.789266 0.387096 1.28699Z" fill="current"/>
</svg>`],
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:1,
         
        },
        900: {
           items:1, 
        },
        1200:{
            items:1,
           
        },
        1450:{
            items:2,
           
        }
    }
})
// -----------------------page num up down input---
$(document).ready(function(){
  
// Increment value in quantity input

$('.qty-plus').each(function(index) {
  $(this).click(function(e) {
    e.preventDefault();
    var current = $(this).siblings("input.quantity").val();
    var currentVal = parseInt($(this).siblings("input.quantity").val());
    if (!isNaN(currentVal)) {
      $(this).siblings("input.quantity").val(currentVal + 1);
    } else {
      $(this).siblings("input.quantity").val(1);
      console.log("Failed!")
    }
  });
});

// Decrement value in quantity input

$(".qty-minus").each(function(index) {
  $(this).click(function(e) {
    e.preventDefault();
    var currentVal = parseInt($(this).siblings("input.quantity").val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $(this).siblings("input.quantity").val(currentVal - 1);
    } else {
      $(this).siblings("input.quantity").val(1);
    }
  });
});
  
  
});