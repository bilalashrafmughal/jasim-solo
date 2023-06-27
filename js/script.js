/*
============================================
                 preloader
============================================
*/
$(window).on('load', function () {
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(500).fadeOut();
});
/*
============================================
                 Team 
============================================
*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});
/*
============================================
                Progress Bar                
============================================
*/
$(function () {

    $("#progress-Elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/*
============================================
                 Responsive Tabs
============================================
*/
$(function () {
    $("#services-tabs").responsiveTabs({
        Animation: 'slide'
    });
});
/*
============================================
                 Portfolio
============================================
*/
$(window).on('load', function () {
    //initialize isotope
    $("#isotope-container").isotope({});
    //filters item on button clicks
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filtervalue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter: filtervalue
        });
        //avtive button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*
============================================
                 Magnifier
============================================
*/
$(function () {
    $("#Portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*
============================================
                 Testimonial 
============================================
*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});
/*
============================================
                 stats 
============================================
*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*
============================================
                 clint 
============================================
*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});