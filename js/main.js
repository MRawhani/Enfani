/* global $ */
/* global  */
$(window).on("load", function () { //make sure whole site laoded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

})
jQuery(document).ready(function () {
    "use strict"
    $('.slider').ripples({
        //the slider is for the element that has a backgroud image and need to be rippled
        dropRadius: 13,
        perturbance: 0.01,

    });

    $(".text").typed({
        strings: ["<strong>في أشياء وخدمات ضرورية في حياتنا </strong><strong class='primary'>صح؟</strong>", "<strong class='primary'>بس  </strong><strong>ماعندناش الوقت أو الإهتمام انو نعملها! </strong>", "<strong class='primary'> طيب ولاتقلق! </strong><strong> عشان كذا احنا</strong><strong class='primary'> موجودين^^ </strong>", "<strong> ماعليك الا </strong><strong class='primary'> تطلب </strong><strong> خدمتك الآن؛ واحنا </strong><strong class='primary'>  حننفعك!.. </strong>"],
        typespeed: 0,
        loop: true



    });




});


/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo with the attr jquery method
            $(".navbar-brand img").attr("src", "img/logo/logo-dark1.png");
             $(".navbar").attr("margin-top", "-20px");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");
            $(".navbar").attr("margin", "20px");
            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logo1.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});


/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/* =========================================
               Responsive Tabs
============================================ */
$(function () {
    //the nwthod should be from the plugin
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
       rtl:true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>']
    });
});




/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});



/* =========================================
               Cleints
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
       rtl:true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
         responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/* 
========================================== 
               ANIMATION
========================================== 
*/
$(function(){
  
    new WOW().init();
  });

//animation when page fully load
$(window).on('load',function(){
    $(".slider .icons").addClass("animated fadeInDown");
    $(".text").addClass("fadeInDown");
   
    $(".cta-div").addClass("animated fadeInLeft");
    $(".slider .social-list").addClass("animated fadeInUp");
     $("#arrow-down i").addClass("animated fadeInDown infinite");
    
});






























