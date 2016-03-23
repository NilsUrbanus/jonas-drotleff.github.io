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

$(function() {
    $('.ripple').on('click', function(event) {
        var $div = $('<div/>');
        $div.addClass('ripple-effect');
        $div
            .css({
                background: $(this).data("ripple-color")
            })
            .appendTo($(this));
        window.setTimeout(function() {
            $div.remove();
        }, 500);
    });

});

$(function() {
  var toggle = $('#drawer-toggle');
  var overlay = $('.drawer-content-overlay');
  overlay.on('click', function(event) {
    toggle.prop('checked', false);
  });
});
