$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
 
        if (scroll >= 500) {
            $(".header").addClass('smaller');
        } else {
            $(".header").removeClass("smaller");
        }
    });

    $(document).ready(function() {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).slideDown(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).slideUp(300);
    });

     $('.accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('300');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('300');

    });

   
	$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});


});
});