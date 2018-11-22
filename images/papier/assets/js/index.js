// Header
jQuery(document).ready(function($) {  

$(window).click(function(){
	$('#intro-msg').delay('500').slideUp('slow',function(){$(this).remove();});
});

});

// Sticky Navbar
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 45;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1500);
    event.preventDefault();
});

// Animate viewport

$(window).scroll(function() {
		$('.module').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1000) {
				$(this).addClass("slideUp");
			}
		});
	});