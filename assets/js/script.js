/* NAV SCROLL */    

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


            jQuery(document).ready(function() {
                jQuery('.post').addClass("hideme").viewportChecker({
                    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
                    offset: 100    
                   });   
            });            
        
                     