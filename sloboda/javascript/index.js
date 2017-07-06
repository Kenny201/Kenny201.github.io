import "../javascript/YouTubePopUp.jquery.js";
import "../node_modules/slick-carousel/slick/slick.min.js"
$('.sliderStage__slider').slick({
    responsive: [{
        breakpoint: 5024,
        settings: {
            infinite: true,
            dots: true,
            arrows: true
        }
    }, {
        breakpoint: 1024,
        settings: {
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 768,
        settings: {

            dots: false
        }
    }, {
        breakpoint: 300,
        settings: {
            dots: false
        }
    }]
});
$('.objects__slider').slick({
    responsive: [{
        breakpoint: 5024,
        settings: {
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 3
        }
    }, {
        breakpoint: 1024,
        settings: {
            infinite: true,
            dots: false,
            slidesToShow: 3

        }
    }, {
        breakpoint: 768,
        settings: {

            dots: false
        }
    }, {
        breakpoint: 300,
        settings: {
            dots: false
        }
    }]
})

jQuery(function() {
    jQuery(".whyTrusted__video a").YouTubePopUp(); // Disable autoplay
});
$(document).ready(function() {

    var touch = $('.header__mobile-container > .menu__button');
    var menu = $('.header__mobile');

    $(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle("slow");
    });
});
$(document).ready(function() {

    $(function() {
        $('.project').hover(function() {
            $('.project__list').stop(false, true).fadeIn(300);
        }, function() {
            $('.project__list').stop(false, true).fadeOut(300);
        })
    })
    $(function() {
        $('.object').hover(function() {
            $('.object__list').stop(false, true).fadeToggle(300);
        }, function() {
            $('.object__list').stop(false, true).fadeOut(300);
        })
    })
});