/*owl carasoul portfolio*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay: false,
        responsiveClass: true,
        mouseDrag: false,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
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
                items: 1,
                nav: true,
            }
        }
    })


    // menu fixed js code
    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.navbar').addClass('animated fadeInDown');
        } else {
            $('.navbar').removeClass('animated fadeInDown');
        }
    });

    // toTop query here
    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll_To_Top').fadeIn();
            } else {
                $('.scroll_To_Top').fadeOut();
            }
        });


        $('.scroll_To_Top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 700);
            return false;
        });

    });

    // Menu scroll to element here
    $('html, body').hide();

    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 95
            }, 800)
        }, 0);
    } else {
        $('html, body').show();
    }
    var headerHeight = $('.custom-navbar').outerHeight(); // Target your header navigation here

    $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 85
        }, 800);

        e.preventDefault();
    });


});

/*query for mac and pc */

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
} else {
    $("body").addClass("pc");
}



/* animation start*/
// Start AOS Animation call function
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});









$(document).ready(function() {
    $("#pkg-click-btn").click(function() {
        //Stuff to do when btn is in the read more state
        $('#wiki').addClass('myclass1');
        $('#wiki').removeClass('myclass2');
    });
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()




$(document).ready(function() {
    $('.toggle li').click(function() {
        $('div.panel').hide();

        var text = $(this).children('div.panel');

        if (text.is(':hidden')) {
            text.show();
            $(".hide").css("display", "block"); //more efficient
            $(".after-click-border").css("border", "1px solid #d0d0d0"); //more efficient
            $(".after-click-border a#pkg-click-btn").css("border", "1px solid #d0d0d0"); //more efficient
            $(".after-click-border a#pkg-click-btn").css("border-bottom", "0.5px solid #d0d0d0"); //more efficient
            function checkOffset() {
                if ($('.section-pkg-detail-bar').offset().top + $('.section-pkg-detail-bar').height() >=
                    $('#footer').offset().top - 10)
                    $('.section-pkg-detail-bar').css('position', 'absolute');
                if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
                    $('.section-pkg-detail-bar').css('position', 'fixed'); // restore when you scroll up

            }
            $(document).scroll(function() {
                checkOffset();
            });
        } else {
            text.hide();
        }

    });

});



//password hide
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
    $("#show_hide_repassword a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_repassword input').attr("type") == "text") {
            $('#show_hide_repassword input').attr('type', 'password');
            $('#show_hide_repassword i').addClass("fa-eye-slash");
            $('#show_hide_repassword i').removeClass("fa-eye");
        } else if ($('#show_hide_repassword input').attr("type") == "password") {
            $('#show_hide_repassword input').attr('type', 'text');
            $('#show_hide_repassword i').removeClass("fa-eye-slash");
            $('#show_hide_repassword i').addClass("fa-eye");
        }
    });
    $("#show_hide_prepassword a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_prepassword input').attr("type") == "text") {
            $('#show_hide_prepassword input').attr('type', 'password');
            $('#show_hide_prepassword i').addClass("fa-eye-slash");
            $('#show_hide_prepassword i').removeClass("fa-eye");
        } else if ($('#show_hide_prepassword input').attr("type") == "password") {
            $('#show_hide_prepassword input').attr('type', 'text');
            $('#show_hide_prepassword i').removeClass("fa-eye-slash");
            $('#show_hide_prepassword i').addClass("fa-eye");
        }
    });
});


// Check if passwords match
$("#pwdId, #confirmPassword").on("keyup", function() {
    if (
        $("#newPassword").val() != "" &&
        $("#confirmPassword").val() != "" &&
        $("#confirmPassword").val() == $("#confirmPassword").val()
    ) {}
});




/*ranges*/
var slider = document.getElementById("customRange1");
var output = document.getElementById("demo1");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}