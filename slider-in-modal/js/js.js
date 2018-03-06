$(function(){                // сработает, когда документ загрузится
  $('.close').delay(11000) // пауза в 3 сек.
  .show(1000); // появление элемента в течении 1 сек.
});
$(function(){                // сработает, когда документ загрузится
  $('.site-header').delay(7000) // пауза в 3 сек.
  .show(1000); // появление элемента в течении 1 сек.
});
var delay_popup = 5000;
	setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);