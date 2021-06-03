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

    $('.btn-cat').click(function() {
        $(this).toggleClass('active');
        $('.menu-cat').toggleClass('active');
        $('html').toggleClass('ov-hidden');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
            $("body").find(".menu-cat").removeClass("active");
            $("body").find(".btn-cat").removeClass("active");
            $('.menu-cat li').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });


    $('.profile').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.profile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.profile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.back-arr').click(function() {
        $('html').removeClass('ov-hidden');
        $('.profile').removeClass('active');
        $('.profile-menu').removeClass('active');
    });

    $('select').niceSelect();

    $('.menu-cat li i').click(function() {
        $(this).parents('li').toggleClass('active');
        $(this).siblings('.sub-menu').slideToggle();
    });

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
            992: {
                width: "100%",
                height: "100%",
                orientation: 'horizontal',
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 120
            },
            575: {
                orientation: 'horizontal',
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 66,
                thumbnailHeight: 60,
            }
        }
    });

    $('.btn-all-chars').click(function(e) {
        e.preventDefault();
        if ($(this).siblings('.card-chars').hasClass('active')) {
            $(this).siblings('.card-chars').removeClass('active');
            $(this).text('Полный список');
        } else {
            $(this).siblings('.card-chars').addClass('active');
            $(this).text('Свернуть');
        }


    });

});

var flag = false;

size();

$(window).resize(function() {
    if (flag == false) {
        size();
    }
});

function size() {
    if ($(window).width() < '992') {


        $('.menu-cat>li').each(function() {
            $(this).children('a').after('<i></i>');

        });

        flag = true;
    }
}

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '992') {

        $('header .menu').insertAfter($('.search-info'));
    } else {
        $('.menu').appendTo($('.header-left'));
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