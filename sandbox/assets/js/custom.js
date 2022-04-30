// -------------Tooltip--

// $('.tooltipLink').hover(function () {
//      var title = $(this).attr('data-tooltip');
//      $(this).data('tipText', title);
//      if(title == ''){}
//      else{
//         $('<p class="tooltip"></p>').fadeIn(200).text(title).appendTo('body');
//      }
//  }, function () {
//      $(this).attr('data-tooltip', $(this).data('tipText'));
//      $('.tooltip').fadeOut(200);
//  }).mousemove(function (e) {
//      var mousex = e.pageX;
//      var mousey = e.pageY;
//      $('.tooltip').css({
//          top: mousey,
//          left: mousex
//      })
//  });
// ----project more show---
$(".addListData").on("click", function () {
  $(this).css({ "display": "none" });
  $(".Project").css({ "display": "block" });
  
});
// ----offcanvas header---
$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr('data-trigger');
  $(trigger_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
});
// ==============Mgnific gallery-------
$(document).ready(function () {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },

    zoom: {
      enabled: true,

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      opener: function (openerElement) {

        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

});
// close button 
$(".btn-close").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});
// -----Pricing js--
$(".custom-switch").each(function (i) {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");

  $(this).wrap('<div class="custom-switch" id="' + name + '"></div>');
  $(this).after('<label for="custom-switch-' + i + '"></label>');
  $(this).attr("id", "custom-switch-" + i);
  $(this).attr("name", name);
});
$(".custom-switch input").change(function () {
  $(".pricing-tables").toggleClass("plans--annually");
});
// --sticky header---
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// --About Page Basic Slider---
$('.Slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,

    },
    600: {
      items: 1,

    },
    1000: {
      items: 1,

    }
  }
})
// --About Page Team Slider---
$('.TeamSlider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,

    },
    767: {
      items: 1,
    },
    768: {
      items: 2,

    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,

    }
  }
})

// --Counter js--
var counted = 0;
$(window).scroll(function () {

  var oTop = $('.Counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
  var a = 0;
  var oTop = $('.BgLightYellow').offset().top - window.innerHeight;
  console.log($('.BgLightYellow').offset().top);
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
// --Light Bpx Vidoe js--
/*! mediabox v0.0.2 | (c) 2016 Pedro Rogerio | https://github.com/pinceladasdaweb/mediabox */
(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.MediaBox = factory();
  }
}(this, function () {
  "use strict";

  var MediaBox = function (element) {
    if (!this || !(this instanceof MediaBox)) {
      return new MediaBox(element);
    }

    this.selector = document.querySelectorAll(element);
    this.root = document.querySelector('body');
    this.run();
  };

  MediaBox.prototype = {
    run: function () {
      Array.prototype.forEach.call(this.selector, function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          var link = this.parseUrl(el.getAttribute('href'));
          this.render(link);
          this.close();
        }.bind(this), false);
      }.bind(this));
    },
    template: function (s, d) {
      var p;

      for (p in d) {
        if (d.hasOwnProperty(p)) {
          s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
        }
      }
      return s;
    },
    parseUrl: function (url) {
      var service = {},
        matches;

      if (matches = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) {
        service.provider = "youtube";
        service.id = matches[2];
      } else if (matches = url.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/)) {
        service.provider = "vimeo";
        service.id = matches[3];
      } else {
        service.provider = "Unknown";
        service.id = '';
      }

      return service;
    },
    render: function (service) {
      var embedLink,
        lightbox;

      if (service.provider === 'youtube') {
        embedLink = 'https://www.youtube.com/embed/' + service.id;
      } else if (service.provider === 'vimeo') {
        embedLink = 'https://player.vimeo.com/video/' + service.id;
      } else {
        throw new Error("Invalid video URL");
      }

      lightbox = this.template(
        '<div class="mediabox-wrap"><div class="mediabox-content"><span class="mediabox-close"></span><iframe src="{embed}?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>', {
        embed: embedLink
      });

      this.root.insertAdjacentHTML('beforeend', lightbox);
    },
    close: function () {
      var wrapper = document.querySelector('.mediabox-wrap');

      wrapper.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'SPAN' && e.target.className === 'mediabox-close') {
          wrapper.classList.add('mediabox-hide');
          setTimeout(function () {
            this.root.removeChild(wrapper);
          }.bind(this), 500);
        }
      }.bind(this), false);
    }
  };

  return MediaBox;
}));


//Initialize the MediaBox.

MediaBox('.mediabox');
