$(function(){

    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    $('.home-page__slider').slick({
        arrows: false,
        dots: true
    });
    $('.principles-slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><svg class="principles-slider__icon"><use xlink:href="images/sprite.svg#chevron-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="principles-slider__icon"><use xlink:href="images/sprite.svg#chevron-right"></use></svg></button>'
    });

    $('.services-works__range').ionRangeSlider({
        step: 50,
        postfix: "м.",
        onStart: function (data) {
            $('.services-works__number').text(data.from / 10);
        },
        onChange: function (data) {
            $('.services-works__number').text(data.from / 10);
        }
    });

    $('.vacancies__btn').on('click', function(){
        $(this).next('.vacancies__list--hidden').slideToggle();
        $(this).children('.vacancies__icon').toggleClass('vacancies__icon--rotate');
    });



    $(window).scroll(function(){
        if($(document).scrollTop() > 30) {
            $('.header').addClass('header--bg');
        } else {
            $('.header').removeClass('header--bg');
        }
    });


    $('.menu__link, .logo').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

        // !
        $('.menu').removeClass('menu--active');
        $('.header__btn-item').removeClass('header__btn-item--active');
    });

    new WOW().init();

});