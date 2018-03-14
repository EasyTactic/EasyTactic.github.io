$(document).ready(function() {
	$('.mfp-galary').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,
		},
		gallery: {
			enabled : true
		}
	});
});
$(document).ready(function() {
	  $('.main-slider').slick({
	 		lazyLoad: 'ondemand',
    	slidesToShow: 1,
	  	slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 7000,
		  infinite: true, 
		  dots: true,
      speed: 800,
      fade: true,
      draggable: false,
      pauseOnHover: false
  });
});
$(document).ready(function() {
	$('.gallery-other').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,
		},
		gallery: {
			enabled : true
		}
	});
});
$(document).ready(function() {
	$('.gallery-other-2').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,
		},
		gallery: {
			enabled : true
		}
	});
});
$(document).ready(function() {
	$('.gallery-other-3').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,
		},
		gallery: {
			enabled : true
		}
	});
});
$(document).ready(function() {
		    $('.news-slider').slick({
		    	prevArrow: '<button class="btn-sl prev-btn"></button>',
		    	nextArrow: '<button class="btn-sl next-btn"></button>',
					slidesToShow: 3,
				  slidesToScroll: 1,
				  infinite: false
			  });
			});