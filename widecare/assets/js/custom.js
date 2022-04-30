/** @format */
// ----header link active--
$(".header_main_nav_link li").on("click", function () {
  $(".header_main_nav_link li").removeClass("active");
  $(this).addClass("active");
});
// -----mobile responsive header---
$(".menu_icon").on("click", function () {
  $(".header").addClass("offcanvas_header");
});
$(".close_btn").on("click", function () {
  $(".header").removeClass("offcanvas_header");
});
// ===================================how it works==================================
$(".testimonials_slider").owlCarousel({
  loop: true,

  nav: true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: false,
  navText: [
    `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5752 1.09375C8.8877 1.40625 8.85645 1.875 8.5752 2.1875L4.79395 5.75H13.7627C14.2002 5.75 14.5127 6.09375 14.5127 6.5V7.5C14.5127 7.9375 14.2002 8.25 13.7627 8.25H4.79395L8.5752 11.8438C8.85645 12.1562 8.85645 12.625 8.5752 12.9375L7.8877 13.625C7.5752 13.9062 7.10645 13.9062 6.8252 13.625L0.731445 7.53125C0.450195 7.25 0.450195 6.78125 0.731445 6.46875L6.8252 0.40625C7.10645 0.125 7.5752 0.125 7.8877 0.40625L8.5752 1.09375Z" fill="current"/>
</svg>
`,
    `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4502 1.09375C6.1377 1.40625 6.16895 1.875 6.4502 2.1875L10.2314 5.75H1.2627C0.825195 5.75 0.512695 6.09375 0.512695 6.5V7.5C0.512695 7.9375 0.825195 8.25 1.2627 8.25H10.2314L6.4502 11.8438C6.16895 12.1562 6.16895 12.625 6.4502 12.9375L7.1377 13.625C7.4502 13.9062 7.91895 13.9062 8.2002 13.625L14.2939 7.53125C14.5752 7.25 14.5752 6.78125 14.2939 6.46875L8.2002 0.40625C7.91895 0.125 7.4502 0.125 7.1377 0.40625L6.4502 1.09375Z" fill="current"/>
</svg>`,
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
      items: 2,
    },
  },
});
