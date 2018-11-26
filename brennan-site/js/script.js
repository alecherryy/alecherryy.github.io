$(document).ready(function() {
  AOS.init();

  var scrollLink = $('.scroll-icon');
    
    // smooth scrolling
    
    scrollLink.click(function(e) {
      e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
    })

    $(function() {
      $.scrollify({
        section : "section",
        sectionName : "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 1500,
        scrollbars: false,
      });
    });

  $(".one h1").addClass("draw--title");
  
  $(window).scroll(function() {    

    var i = 0;

    var inv = setInterval(function() {     
      if(i < 99)
          document.getElementById("ninetyNine").innerHTML = ++i;
      else
          clearInterval(inv);
    }, 3000 / 100);
  });
  
  $(window).scroll(function() {    

    var i = 1;

    var inv = setInterval(function() {     
        if(i < 7)
            document.getElementById("sevenPercent").innerHTML = ++i + '%';
        else
            clearInterval(inv);
    }, 2000 / 100);
  });
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".text-accent");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("draw"); 
  } 
});

win.scroll(function(event) {
  
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("draw"); 
    } 
  });
  
}); 