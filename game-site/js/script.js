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