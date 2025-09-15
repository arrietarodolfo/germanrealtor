(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        URLhashListener: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                mouseDrag: false,
                touchDrag: false
            },
            768: {
                items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                mouseDrag: false,
                touchDrag: false
            },
            1024: {
                items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                mouseDrag: false,
                touchDrag: false
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: true,
        loop: true,
        nav: false
    });

// Closing Ceremonies Stack Carousel
const carousel = document.querySelector('.closing-stack-carousel');
if (carousel) {
    const S = carousel.style;
    const N = +S.getPropertyValue('--n');
    let k = +S.getPropertyValue('--k');
    let autoPlayInterval;

    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            k = (k + 1) % N;
            S.setProperty('--k', k);
        }, 3000); // Change image every 3 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Manual navigation
    carousel.addEventListener('click', e => {
        let v = +e.target.dataset.inc;
        if(v) {
            k = (k + v + N) % N;
            S.setProperty('--k', k);
            stopAutoPlay(); // Stop auto-play when user interacts
            setTimeout(startAutoPlay, 5000); // Resume auto-play after 5 seconds
        }
    });

    // Start auto-play when page loads
    startAutoPlay();

    // Pause auto-play when hovering over carousel
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}
    
})(jQuery);

