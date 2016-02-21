$(function() {
	$(window).scroll(function() {
		var topOfWindow = $(window).scrollTop();
		console.log(topOfWindow);
		if (topOfWindow >= 400) $('.scrollup').fadeIn('fast'); else $('.scrollup').fadeOut('fast');
		$('#about, #knowledges, #expirience, #portfolio, #contacts').each(function(){
		  var imagePos = $(this).offset().top-$(window).height();
		  if ((imagePos > topOfWindow-50) && (imagePos < topOfWindow)) $(this).css('opacity', '0');
		  if (imagePos < topOfWindow-50) {
		  	$(this).animate({'opacity': '1'}, 600);
		  }
		});
	});

	$('.scrollup').on('click', function() {
		$('html, body').animate({'scrollTop':'0'}, 500);
	})

	// navbar
	$('.navbar-button').on('click', function() {
		$('nav').slideToggle();
	});

	$(window).resize(function() {
		if (($(window).width() >= 768) && ($('nav').attr('style') != '' ) ) 
			$('nav').removeAttr('style');
	})

	$('nav').on("click","a", function (event) {
		try {
			event.preventDefault();
		} catch (e) {
			event.returnValue = false;
		}
		var id  = $(this).attr('href'), top = $(id).offset().top;
		$('nav a.active').removeClass('active');
		$(this).addClass('active');
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// portfolio
	$('.container li:first-child a').on('click', function(event) {
		try {
			event.preventDefault();
		} catch (e) {
			event.returnValue = false;
		}
		$('.scrollup').trigger('click');
	});

	// years
	$('.years').on('click', function() {
		$('.work-place-description:visible').slideToggle();
		$(this).siblings('.work-place-description:hidden').slideToggle();
	})

})