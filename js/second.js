/*global console, $*/

$(function () {
    'use strict';
    var btn = $('button'),
        myDiv = $('.test .child'),
        header = $('.header');

/*--=============== Center Height For The Head ===============--*/
    $('input').on('focus', function () {
        $(this).css({
            boxShadow: '1px 1px 3px 1px #1ad4af, -1px -1px 3px 1px #1ad4af'
        });
    });
    
    $('input').on('blur', function () {
        $(this).css({
            boxShadow: 'none'
        });
    });
    
/*--=============== Building Search Box ===============--*/
    $('.s-nav i').click(function () {
        $('.logo').animate({
            width: '50%'
        }, 200);
        $('.search').animate({
            width: '14%'
        }, 200);
        $('.input-box').delay(200).show(250, function () {
            $(this).focus();
        });
    });

    $('.input-box').on('focus', function () {
        $(this).css({
            boxShadow: 'none'
        });
    });

    $('.input-box').on('blur', function () {
        $('.input-box').hide(200, function () {
            $('.search').animate({
                width: '3%'
            }, 50);
            $('.logo').animate({
                width: '61%'
            }, 200);
        });
    });
    
/*--============ Linking Each Section With Header ============--*/
    $('.link').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
/*--=============== Center Height For The Head ===============--*/
    $(window).resize(function () {
        header.height($(window).height() - ($('.f-nav').height() + $('.s-nav').height() + 20));

        $('.slider').css({
            marginTop: (header.height() - ($('.slider').height() + $('.destin').height())) / 2
        });

        $('.header i').css({
            marginTop: (header.height() - ($('.header i').height() + $('.destin').height())) / 2
        });
    });
    
/*--=============== Set Height For The Header ===============--*/
    header.height($(window).height() - ($('.f-nav').height() + $('.s-nav').height() + 20));
    
/*--=============== Center Height For The Head ===============--*/
    $('.slider').css({
        marginTop: (header.height() - ($('.slider').height() + $('.destin').height())) / 2
    });
    
    $('.header i').css({
        marginTop: (header.height() - ($('.header i').height() + $('.destin').height())) / 2
    });
    
/*--============ Building Slider For The Header ============--*/
    $('.header .fa-chevron-right').click(function () {
        if ($('.active').is(':last-child')) {
            $('.active').fadeOut(500, function () {
                $('.active').removeClass('active');
                $('.head').first().addClass('active').fadeIn(500);
            });
        } else {
            $('.active').fadeOut(500, function () {
                $('.active').removeClass('active').next().addClass('active').fadeIn(500);
            });
        }
    });
    
    $('.header .fa-chevron-left').click(function () {
        if ($('.active').is(':first-child')) {
            $('.active').fadeOut(500, function () {
                $('.active').removeClass('active');
                $('.head').last().addClass('active').fadeIn(500);
            });
        } else {
            $('.active').fadeOut(500, function () {
                $('.active').removeClass('active').prev().addClass('active').fadeIn(500);
            });
        }
    });
    
/*--============== See More Slider ==============--*/
    $('.offer .info').click(function () {
        
        $('#' + $(this).parent().data('value')).slideDown(800);
        $('#' + $(this).parent().data('value')).siblings('.see-more').slideUp(800);
        $(this).children('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).parent().css({
            borderColor: '#2d3e50',
            opacity: '1'
        });
        $(this).css({
            backgroundColor: '#2d3e50',
            color: '#1ad4af'
        });
        
//        $(this).children('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
//            
//        $(this).parent().css({
//            borderColor: '#2d3e50',
//            opacity: '1'
//        });
//
//        $(this).css({
//            backgroundColor: '#2d3e50',
//            color: '#1ad4af'
//        });
    });
        
    $('.offer .info').dblclick(function () {
        $('#' + $(this).parent().data('value')).slideUp(800);
        
        $(this).children('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            
        $(this).parent().css({
            borderColor: '#DDD',
            opacity: '.6'
        });

        $(this).css({
            backgroundColor: '#DDD',
            color: '#000'
        });
    });
    
/*--============== Top Button ==============--*/
    $('.top').css({
        right: ($(window).width() - $('.top').width()) / 2
    });
    
    $(window).resize(function () {
        $('.top').css({
            right: ($(window).width() - $('.top').width()) / 2
        });
    });
    
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.destin').offset().top) {
            $('.top').fadeIn(500);
        } else {
            $('.top').fadeOut(500);
        }
    });
    
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    
    
/*
    *
        *
            *
                *
                    *
                        *
                            *
                                *   
                                    *
                                        *
                                            *
                                                *
                                                    *
                                                        *
----================ Testing The Document ================--*/
    btn.click(function () {
        myDiv.children().fadeOut(500)
                .animate(500, myDiv.width(400))
                .animate(500, myDiv.height(200))
                .animate(500, myDiv.width(200))
                .animate(500, myDiv.height(100))
                .animate(500, myDiv.width(142).height(0));
    });
    btn.dblclick(function () {
        myDiv.animate(500, myDiv.width(200))
                .animate(500, myDiv.height(100))
                .animate(500, myDiv.width(400))
                .animate(500, myDiv.height(200))
                .animate(500, myDiv.width(600).height(300))
                .children().delay(1000).fadeIn(500);
    });
    
});