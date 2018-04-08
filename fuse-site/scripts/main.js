$(document).ready(function(){
	// Header scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 5){
			$(".header").addClass("active");
		} 
		else {
			$(".header").removeClass("active");
		} 
	});

	// Header menu
	$(".header-menu__switcher").click(function(){
		$(this).toggleClass("active");
		$(".header-menu ul").slideToggle(200);
	});

	// Переход по секциям
	$("a.scrollto").click(function () {
		$(".header-menu__switcher").removeClass("active");
		$(".header-menu ul").slideUp(200);
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top - 60;
	    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	    return false;
	});
	$(window).scroll(function() { 
		if($(this).scrollTop()<50){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section1"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#section2').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section2"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#ind-sect').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#ind-sect"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#section3').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section3"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#feat-sect').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#feat-sect"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#tok-sect').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#tok-sect"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#mis-sect').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#mis-sect"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#section5').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section5"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#section6').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section6"]').addClass('active');
		}
		if($(this).scrollTop()+200>$('#section7').offset().top){
			$('.header-menu ul li a').removeClass('active');
			$('.header-menu ul li').find('a[href="#section7"]').addClass('active');
		}
	});

	// Slider
	$('.main-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2701
	});

	// Стилизация селекта
	$('.callback-form__select select').styler({
		selectSearchLimit:12,
		selectSearch: true,
		selectSmartPositioning: false
	});

	// Placeholder IE
	$('input, textarea').placeholder();
});

if ($("#mce-EMAIL").val('')) {
	
}
$('#mc-embedded-subscribe').click(function() {
	$('.thenks').css('display', 'flex');
	$('.subscribe-form').css('display', 'none');
});