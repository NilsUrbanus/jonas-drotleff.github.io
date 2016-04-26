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
    scroll = (scroll / $(window).height());
    $('.home-container').css({
        'top': -98 * scroll + 'px'
    });
    $('.home-container h1').css({
        'margin-top': 24 * scroll + 'px'
    })
});

var waypoints = $('.seperator').waypoint({
  handler: function(direction) {
      if (direction == 'up') {
          $('.header__background').css({
              'animation': 'fade-out-header 0.8s cubic-bezier(0.35, 0.36, 0, 1.01) forwards'
          });
      }else {
          $('.header__background').css({
              'animation': 'fade-in-header 0.8s cubic-bezier(0.35, 0.36, 0, 1.01) forwards'
          });
      }
  }
});

$(document).ready(function() {
    $('.home-container h1').css({
        'animation': 'fade-in-h1 1.25s cubic-bezier(0.35, 0.36, 0, 1.01) .5s forwards'
    });
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
