$(function() {
    $('.catalog-btns a').click(function() {
        $('.catalog-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.catalog-box').find('.catalog-elem').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.slider-big').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 501,
            settings: {
                arrows: false,
                infinite: true,
                swipeToSlide: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $("table").wrap("<div class='table'></div>");

    $('.slider-small').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300
    });

    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        responsive: [{
            breakpoint: 961,
            settings: {
                variableWidth: true,
                arrows: false
            }
        }]
    });

    $('.btn-filter-open').click(function() {
        $('.catalog-page-wrap aside').addClass('active');
    });

    $('.filter-close').click(function() {
        $('.catalog-page-wrap aside').removeClass('active');
    });



    // $('.btn-cat').click(function() {
    //     $('html, body').animate({ scrollTop: 0 }, 'slow');
    //     $(this).toggleClass('active');
    //     $('.menu-cat').toggleClass('active');
    // });


    // $('.btn-cat').click(function() {
    //     if ($(this).hasClass('active')) {
    //         $(this).removeClass('active');
    //         $('.menu-cat').removeClass('active');
    //     } else {
    //         $('html, body').animate({ scrollTop: 0 }, 'slow');
    //         $(this).addClass('active');
    //         $('.menu-cat').addClass('active');
    //     }
    // });









    $('.back-arr').click(function() {
        $('html').removeClass('ov-hidden');
        $('.profile').removeClass('active');
        $('.profile-menu').removeClass('active');
    });

    $('select').niceSelect();



    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 50000,
        grid: false,
        onChange: function(data) {
            $('.start-price').val(data.from);
            $('.finish-price').val(data.to_pretty);
        }
    });


    $('.range-slider-input').keyup(function() {
        let inputId = $(this).attr('id');
        let inputValue = $(this).val();
        let my_range = $(".js-range-slider").data("ionRangeSlider");
        if (inputId === 'slider-input-from') {
            my_range.update({
                from: inputValue
            });
        } else {
            my_range.update({
                to: inputValue
            });
        }
    });

    $('.info-tovar--photos').sliderPro({
        width: 490,
        height: 470,
        // width: "100%",
        // height: "100%",
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 130,
        thumbnailHeight: 130,
        breakpoints: {
            1200: {
                width: 450,
                height: 450,
                orientation: 'horizontal',
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 110,
                thumbnailHeight: 110,
            },
            500: {
                width: '100%',
                height: 288,
                orientation: 'horizontal',
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 84,
                thumbnailHeight: 84,
            }
        }
    });

    $('.btn-all-chars').click(function(e) {
        e.preventDefault();
        if ($(this).siblings('.card-chars').hasClass('active')) {
            $(this).siblings('.card-chars').removeClass('active');
            $(this).text('???????????? ????????????');
        } else {
            $(this).siblings('.card-chars').addClass('active');
            $(this).text('????????????????');
        }


    });

    $('.btn-popup-order-open').click(function(e) {
        e.preventDefault();
        $('#popup-wrap-order').addClass('popup-active');
        $('#popup-wrap-order').find('.popup').addClass('popup-active');

    });

    $('.btn-popup-close').click(function(e) {
        e.preventDefault();
        $('#popup-wrap-order').removeClass('popup-active');
        $('#popup-wrap-order').find('.popup').removeClass('popup-active');
    });

    $(function($) {
        $(document).mouseup(function(e) {
            var div = $(".popup");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $('#popup-wrap-order').removeClass('popup-active');
                div.removeClass('popup-active');
            }
        });
    });

});

var flag = false;

$(window).on('load resize', function() {
    size();
});

function size() {
    if ($(window).width() < '992') {
        if (flag == false) {
            $('.menu-cat>li>a').after('<i>');
            flag = true;
        }
    } else {
        $('.menu-cat>li>i').remove();
        flag = false;
    }
}

$('.menu-cat li').on('click', 'i', function() {
    $(this).parents('li').toggleClass('active');
    $(this).siblings('.sub-menu').slideToggle();
});

$('.btn-cat').click(function() {
    if ($(window).width() > '991') {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.menu-cat').removeClass('active');
        } else {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            $(this).addClass('active');
            $('.menu-cat').addClass('active');
        }
    } else {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.menu-cat').removeClass('active');
            $('.menu-cat li').removeClass('active');
            $('html').removeClass('ov-hidden');
            $(".sub-menu").hide();
        } else {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            $(this).addClass('active');
            $('.menu-cat').addClass('active');
            $('html').addClass('ov-hidden');
        }
    }

});


$(document).click(function(event) {
    if ($(window).width() > '991') {
        if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
            $("body").find(".menu-cat").removeClass("active");
            $("body").find(".btn-cat").removeClass("active");
            $('.menu-cat li').removeClass('active');
        }
    } else {
        if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
            $("body").find(".menu-cat").removeClass("active");
            $("body").find(".btn-cat").removeClass("active");

            $('.menu-cat li').removeClass('active');
            $('html').removeClass('ov-hidden');
            $(".sub-menu").hide();
        }
    }

});

$('.profile').click(function() {
    if ($(window).width() < '992') {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.profile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.profile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    }
});

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '991') {

        $('.sub-menu').removeAttr('style');


        // $(document).click(function(event) {
        //     if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
        //         $("body").find(".menu-cat").removeClass("active");
        //         $("body").find(".btn-cat").removeClass("active");
        //         $('.menu-cat li').removeClass('active');
        //     }
        // });
    }

    if (width < '992') {


        // $(document).click(function(event) {
        //     if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
        //         $("body").find(".menu-cat").removeClass("active");
        //         $("body").find(".btn-cat").removeClass("active");

        //         $('.menu-cat li').removeClass('active');
        //         $('html').removeClass('ov-hidden');
        //         $(".sub-menu").hide();
        //     }
        // });
    }


    if (width < '992') {
        $('.catalog-page-wrap aside').addClass('anim');






        $('header .menu').insertAfter($('.search-info'));
    } else {
        $('.menu').appendTo($('.header-left'));
        $('.catalog-page-wrap aside').removeClass('anim');
    }

    if (width < '961') {
        $('.form-search').insertAfter($('.footer-info:first'));
    } else {
        $('.form-search').appendTo($('.footer-top'));
    }

    if (width < '762') {
        $('.categories-items:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            variableWidth: true
        });
    } else {
        $(".categories-items.slick-initialized").slick("unslick");
    }

    if (width < '651') {
        $('.catalog-btns:not(.slick-initialized)').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            dots: false,
            variableWidth: true,
            responsive: [{
                breakpoint: 371,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    } else {
        $(".catalog-btns.slick-initialized").slick("unslick");
    }

});