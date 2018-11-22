$(document).ready(function() {
  AOS.init();

  $('.menu__icon').click(function() {
    $('.menu--mobile .menu__wrapper').slideDown();
  });
  
  $('.menu__icon--close').click(function() {
    $('.menu--mobile .menu__wrapper').slideUp();
  });

  $('.menu--mobile .menu__link').click(function() {
    $('.menu--mobile .menu__wrapper').slideUp();
  });

  var pageScrolled = false;
  $(window).scroll(function() {
    var theheight = $('.l-header').css('height');
    if ($(this).scrollTop() > 150) {
      if (pageScrolled == false) {
        $('.l-header').stop().animate({top:'-'+theheight}, 400, function(){
          $('.l-header').addClass('is-sticky');
          $('.l-header__wrapper').height("56px");
          $('.l-header').stop().animate({top: '0'}, 400);
        });
        pageScrolled = true;
      }
    } else if ($(this).scrollTop() <= 150) {
      if (pageScrolled == true) {
        $('.l-header').stop().animate({top:'-'+theheight}, 400, function(){
          $('.l-header').removeClass('is-sticky');
          $('.l-header__wrapper').height("auto");
        });
        pageScrolled = false;
      }
    }
  });
});