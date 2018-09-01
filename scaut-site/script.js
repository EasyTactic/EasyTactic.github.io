$('.fourth-block').click(function() {
	$('.popup').css('transition', '.4s');
	$('.popup').addClass('popup-active');
});
$('.popup-overflow').click(function() {
	$('.popup').removeClass('popup-active');
});
$('.popup-close').click(function() {
	$('.popup').removeClass('popup-active');
});
$('.mobile-menu').click(function() {
	$('.mobile-menu').toggleClass('active-menu');
	$('.header-mobile-menu').css('transition', '.6s');
	$('.header-mobile-menu').toggleClass('active-mobile-menu');
});
jQuery(document).ready(function($) {
	new WOW().init();
});