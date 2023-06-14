/*
============================================
                 preloader
============================================
*/
$(window).on('load', function(){
    $('#status').delay(500).fadeOut(); 
    $('#preloader').delay(500).fadeOut(); 
});
/*
============================================
                 Team 
============================================
*/
$(function()
{
$("#team-member").owlCarousel({
    item:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

});
});
