$('.search-btn').on('click', function() {
	$('.the-search').toggleClass('visible');
});
$('.menu-btn').on('click', function() {
	$('.header .nav').toggleClass('visible-nav');
});
$('.main-slider').slick({
	dots: true,
	draggable: false
});
$('.clients-slider').slick({
	dots: false,
	draggable: false,
	slidesToShow: 5
});