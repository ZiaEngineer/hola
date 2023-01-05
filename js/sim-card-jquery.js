/*owl carasoul portfolio*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>', '<i class="fas fa-caret-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        responsiveClass: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        startPosition: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            480: {
                items: 1,
                nav: true,
            },
            768: {
                items: 1,
                nav: true,
            },
            992: {
                items: 1,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true,
            }
        }
    })
})