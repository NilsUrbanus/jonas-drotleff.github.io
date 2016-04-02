$(function() {
    var $trigger = $('.shadow-trigger');
    var $headerShadow = $('.shadow');
    $headerShadow.css({
        'opacity': '1.0'
    });
    $headerShadow.hide();
    var waypoints = $trigger.waypoint({
        handler: function(direction) {
            if (direction == 'down') {
                $headerShadow.fadeIn(200);
            } else if (direction == 'up') {
                $headerShadow.fadeOut(200);
            }
        }
    })
});
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    scroll = .3 * (scroll / $(window).height());
    if (scroll <= 0.3) {
        $('.fadeBackground').css({
            'background-color': 'rgba(0,0,0,' + scroll + ')'
        });
        $('.home-container').css({
            'top': -98 * (scroll / .3) + 'px'
        });
        $('.home-container h1').css({
            'margin-top': 24 * (scroll / .3) + 'px'
        })
    } else {
        $('.fadeBackground').css({
            'background-color': 'rgba(0,0,0,0.3)'
        });
    }
});

$(document).ready(function() {
    $('.home-container h1').css({
        'animation': 'fade-in-h1 1.25s cubic-bezier(0.35, 0.36, 0, 1.01) .5s forwards'
    })
});

$(function() {
    var toggle = $('#drawer-toggle');
    var link = $('.header__nav')
    var overlay = $('.drawer-content-overlay');
    overlay.on('click', function(event) {
        toggle.prop('checked', false);
    });
    link.on('click', function(event) {
        toggle.prop('checked', false);
    });
});
