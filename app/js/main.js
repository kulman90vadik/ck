// $(function(){
document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector('.header__btn').addEventListener('click', function(){
        document.querySelector('.menu').classList.toggle('menu--active');
        document.querySelectorAll('.header__btn-item').forEach(elem => {
            elem.classList.toggle('header__btn-item--active');
        });
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

    new WOW().init();

    window.addEventListener('scroll', function(){
        if(window.scrollY > 30) {
            document.querySelector('.header').classList.add('header--bg');
        }
        else {
            document.querySelector('.header').classList.remove('header--bg');
        }
    });


    document.querySelectorAll('.vacancies__btn').forEach(elem => {
        elem.addEventListener('click', function(){
            elem.nextElementSibling.classList.toggle('vacancies__list--hidden');
            elem.lastElementChild.classList.toggle('vacancies__icon--rotate');
        });
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

});