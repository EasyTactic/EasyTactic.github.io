$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
});
$(document).ready(function() {
        $('.main-features-slider').slick({
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true
              }
            }
          ]
        });
    });
$(document).ready(function() {
        $('.sec-sl').slick({
          responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                infinite: true
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                infinite: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            }
            
          ]
        });
    });

$(document).ready(function() {
        $('.fifth-slider').slick({
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true
              }
            }
          ]
        });
    });
    $(document).ready(function() {
        $('.portfolio-itself').slick({
          slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true
              }
            }
          ]
        });
    });