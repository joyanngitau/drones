(function (KSh) {
    "use strict";  
    
    // Sticky Navbar
    KSh(window).scroll(function () {
        if (KSh(this).scrollTop() > 30) {
            KSh('#nav').addClass('nav-sticky');
        } else {
            KSh('#nav').removeClass('nav-sticky');
        }
    });
    if (KSh(window).scrollTop() > 30) {
        KSh('#nav').addClass('nav-sticky');
    }
    
    
    // Smooth scrolling on the navbar links
    KSh(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            KSh('html, body').animate({
                scrollTop: KSh(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if (KSh(this).parents('.navbar-nav').length) {
                KSh('.navbar-nav .active').removeClass('active');
                KSh(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    KSh(window).scroll(function () {
        if (KSh(this).scrollTop() > 100) {
            KSh('.back-to-top').fadeIn('slow');
        } else {
            KSh('.back-to-top').fadeOut('slow');
        }
    });
    KSh('.back-to-top').click(function () {
        KSh('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 


    // Testimonial Slider
    KSh('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    KSh('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    KSh('#testimonial .slider-nav').css({"position": "relative", "height": "120px"});
    
})(jQuery);

