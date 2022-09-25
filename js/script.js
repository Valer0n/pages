document.addEventListener('DOMContentLoaded', function () {
    const HEADER_BODY = document.querySelector('.header__body');
    const BUTTON_MENU = HEADER_BODY.querySelector('.button-menu');
    BUTTON_MENU.addEventListener('click', function () {
        HEADER_BODY.classList.toggle('header__body--active');
    })
});


$(document).ready(function () {
    $('.articles__card').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '16px',
        mobileFirst: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                infinite: false,
                arrows: true,
                dots: false,
            }
        },

        ]
    });
});