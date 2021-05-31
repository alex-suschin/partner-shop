$(function() {


    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = "June 12 2021 00:00:00 GMT+0300";
    initializeClock('countdown', deadline);


    $("a.scrollto").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });



    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

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
    });

    $(document).click(function(event) {
        if (!$(event.target).closest(".menu-cat,.btn-cat").length) {
            $("body").find(".menu-cat").removeClass("active");
            $("body").find(".btn-cat").removeClass("active");
            $('.menu-cat li').removeClass('active');
            $('.menu-cat .sub-menu').slideUp();
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



        $('.hamburger').click(function() {
            $(this).toggleClass('on-act');
            if ($(this).hasClass('on-act')) {
                $('header ul.prime-menu').addClass('on-act');
                $('header .circul').addClass('on-act');
                $('body').addClass('noscroll');
            } else {
                $('header ul.prime-menu').removeClass('on-act');
                $('header .circul').removeClass('on-act');
                $('body').removeClass('noscroll');
            }
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