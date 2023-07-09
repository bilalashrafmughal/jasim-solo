/*
============================================
                 preloader
============================================
*/
$(window).on("load", function () {
  $("#status").delay(500).fadeOut();
  $("#preloader").delay(500).fadeOut();
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
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
/*
============================================
                Progress Bar                
============================================
*/
$(function () {
  $("#progress-Elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
/*
============================================
                 Responsive Tabs
============================================
*/
$(function () {
  $("#services-tabs").responsiveTabs({
    Animation: "slide",
  });
});
/*
============================================
                 Portfolio
============================================
*/
$(window).on("load", function () {
  //initialize isotope
  $("#isotope-container").isotope({});
  //filters item on button clicks
  $("#isotope-filters").on("click", "button", function () {
    //get filter value
    var filtervalue = $(this).attr("data-filter");
    //filter portfolio
    $("#isotope-container").isotope({
      filter: filtervalue,
    });
    //avtive button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
/*
============================================
                 Magnifier
============================================
*/
$(function () {
  $("#Portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
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
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
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
    time: 2000,
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
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
/*
============================================
                 google-map 
============================================
*/
$(window).on("load", function () {
  //map-vairables
  var addressString = "230 Broadway, NY, NewYork 10007, USA";
  var myLating = {
    lat: 40.712685,
    lng: -74.00592,
  };
  //render-map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLating,
  });
  //2. Add Marker
  var marker = new google.maps.Marker({
    position: myLating,
    map: map,
    title: "click to see",
  });
  //2. Add infowindow
  var infowindow = new google.maps.infowindow({
    content: addressString,
  });
  //show inforwindow when user clicks marker
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
});
/*
============================================
                 google-map 
============================================
*/
/*show and hide navigation */
$(function () {
  //show/hide nav on page load
  //showHideNav();
  $(window).scroll(function () {
    //show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      //show white nav
      $("nav").addClass("white-nav-top");
      //show dark logo
      $(".navbar-brand img").attr("src", "/images/logo/logo-dark.png");
    } else {
      //hide white nav
      $("nav").removeClass("white-nav-top");
      //show logo
      $(".navbar-brand img").attr("src", "/images/logo/logo.png");
    }
  }
});
/* smooth Scrolling */
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get section ID like #about, #services, #work, #team and #etc
    var section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
