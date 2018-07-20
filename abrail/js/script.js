$('.main-slider').slick({
  prevArrow: '<button type="button" class="arrow animStopAr prevAr"><img src="img/prevAr.svg"></button>',
  nextArrow: '<button type="button" class="arrow animStopAr nextAr"><img src="img/next-ar.svg"></button>',
  draggable: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnFocus: false,
  lazyLoad: 'ondemand',
  pauseOnHover: false,
  speed: 500
});

setInterval(function() {
  jQuery(document).ready(function($) {
    var mdb1 = $('.main-down-blocks .mdb1');
    var mdb2 = $('.main-down-blocks .mdb2');
    var mdb3 = $('.main-down-blocks .mdb3');
    var mdb4 = $('.main-down-blocks .mdb4');
    var theLine = $('.down-lines-block .some-line');
    if ($('div.one-slide').hasClass('slick-active')) {
      mdb1.addClass('active');
      mdb2.removeClass('active');
      mdb3.removeClass('active');
      mdb4.removeClass('active');
      theLine.removeClass().addClass('some-line-one some-line');
    } else if ($('div.two-slide').hasClass('slick-active')) {
      mdb1.removeClass('active');
      mdb2.addClass('active');
      mdb3.removeClass('active');
      mdb4.removeClass('active');
      theLine.removeClass().addClass('some-line-two some-line');
    } else if ($('div.three-slide').hasClass('slick-active')) {
      mdb1.removeClass('active');
      mdb2.removeClass('active');
      mdb3.addClass('active');
      mdb4.removeClass('active');
      theLine.removeClass().addClass('some-line-three some-line');
    }  else if ($('div.four-slide').hasClass('slick-active')) {
      mdb1.removeClass('active');
      mdb2.removeClass('active');
      mdb3.removeClass('active');
      mdb4.addClass('active');
      theLine.removeClass().addClass('some-line-four some-line');
    }
  });
}, 1);

$(function(){
  var ViewportHeight = $(window).height();
  $(window).scroll(function() {
    if($(this).scrollTop() >= ViewportHeight) {
      $('div.small-header').addClass('stickytop');
      $('div.small-header').addClass('stickytop');
    } else{
      $('div.small-header').removeClass('stickytop');
    }
  });
});

$('.slick-dots li button').addClass('newbtn');

$('ul.slick-dots').on('click', '.newbtn', function(){
  var el = $('.down-lines-block .some-line').clone().removeClass();
  $('.some-line').remove();
  $('.down-lines-block').append(el);
  el.addClass('some-line');
});

$('.main-slider').on('click', '.animStopAr', function(){
  var el = $('.down-lines-block .some-line').clone().removeClass();
  $('.some-line').remove();
  $('.down-lines-block').append(el);
  el.addClass('some-line');
});

(function($) {
  $(function() {
    $('ul.second-switch-ul').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.small-container').find('div.content-block').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

(function($) {
  $(function() {
    $('ul.third-switch-ul').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.small-cont').find('div.all-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

(function($) {
  $(function() {
    $('ul.card-switch-ul').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.small-cont').find('p.content-p').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

(function($) {
  $(function() {
    $('ul.form-switcher').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.form-center').find('div.form-inside').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

if ($('.content-block.cb2').hasClass('active')) {
  $('.main_second-block').css('background', 'url(img/some-train-pic.jpg)');
};

new WOW().init();

$(function() {
    $('.to-top-btn').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});
$('.call-menu').on('click', function(event) {
  $('.a-call-block').toggleClass('krest-btn');
});
$('.dd-li').on('click', function(event) {
  $(this).toggleClass('active-dd');
});

var GM = {
    init: function () {
        this.initCache();
        this.initMap();
        this.initBannerTopParallax();
    },

    initCache: function() {
        this.$body         = $('body');
        this.$popupContent = $('.js-marker-content');
        this.parallaxImg   = '.js-parallax-img:visible'
    },

    initBannerTopParallax: function () {
        var $parallaxImg  = null;

        this.$body.mousemove(function(e) {
            if($parallaxImg) {
                var $el    = $(e.currentTarget),
                    xPos   = e.pageX - (window.innerWidth / 2),
                    mXPcnt = Math.round(xPos / $el.width() * 100),
                    diffX  = $parallaxImg.width() - $el.width(),
                    myX    = diffX * (mXPcnt / 1500);

                $parallaxImg.animate({left: myX}, 0);
            } else if($(this.parallaxImg).length) {
                $parallaxImg = $(this.parallaxImg);
            }
        }.bind(this));
    },

    initMap: function () {
        var coordinates = {lat: 58.40765536, lng: 80.06952052},
            popupContent = this.$popupContent.html(),
            markerImage = 'img/transparent-marker.png',
            maptype = 'mobile',
            zoom = 4,

            map = new google.maps.Map(document.getElementById('gmap'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: false
            }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });

        var styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
        map.setOptions({styles: styles});


        marker.addListener('click', function () {
            marker.setAnimation(null);
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }
};

$(document).ready(function() {
    GM.init();
});

(function($) {
  $(function() {
    $('div.citys-block').on('click', '.one-city:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active');
        $('div.citis-contacts').find('div.contact-block').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

jQuery(document).ready(function($) {
  var range = document.getElementById('scroll-input').value;
  var scrollBlock = $('.main_reviews-scroll .scroll');
  var minus = -1;
  var leftValue = ( range * 258 * minus );
  scrollBlock.css('left', leftValue);
});
function scrollFun() {
  var range = document.getElementById('scroll-input').value;
  var scrollBlock = $('.main_reviews-scroll .scroll');
  var minus = -1;
  var leftValue = ( range * 258 * minus );
  scrollBlock.css('left', leftValue);
};

var hellopreloader = document.getElementById("loader");
function fadeOutnojquery(el){el.style.opacity = 1;
  var interhellopreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <=0.05){
      clearInterval(interhellopreloader);
      hellopreloader.style.display = "none";
    }
  },16); }window.onload = function(){
    setTimeout(function(){
      fadeOutnojquery(hellopreloader);
    },1000);
  };