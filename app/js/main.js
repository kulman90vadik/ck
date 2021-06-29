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


});