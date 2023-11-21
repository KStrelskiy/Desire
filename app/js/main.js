$(function () {
    $(".header__btn").on( "click", function(event) {
        $(".rightside-menu").addClass('open-menu');
    });
    $(".rightside-menu__close").on( "click", function(event) {
        $(".rightside-menu").removeClass('open-menu');
    });
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
      });
})