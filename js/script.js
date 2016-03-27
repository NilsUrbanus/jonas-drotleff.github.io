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
  scroll = .5 * (scroll / $(window).height());
  console.log(scroll);
  if (scroll <= 0.5) {
    console.log('didit');
    $('.fadeBackground').css({
      'background-color': 'rgba(0,0,0,' + scroll + ')'
    });
  } else {
    $('.fadeBackground').css({
      'background-color': 'rgba(0,0,0,0.5)'
    });
  }
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
