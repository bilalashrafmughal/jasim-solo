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
$("#team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

});
});
/*
============================================
                 Progress Bar 
============================================
*/
$(function() {

    $("#progress-Elements").waypoint(function() {
        $(".progress-bar").each(function(){
            $(this).animate({
     width:$(this).attr("aria-valuenow")+"%"
     }, 2000);
        });
        this.destroy();
    },{
        offset:'bottom-in-view'
    });

   /**/

});
/*
============================================
                 Responsive Tabs 
============================================
*/
$(function()
{
$("#services-tabs").responsiveTabs({
Animation:'slide'
}); 
});