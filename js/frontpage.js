var $parent = $('.frontpage');
var elementCount = 25;
var $canvas;
var lines = 50;
var lineA = [];
var lineB = [];
var factor = 12;
var elements = [];
var elementsX = [];
var elementsY = [];
var elementsFactor = [];
var elementSource;
elementSource = ['face',
    'favorite',
    'question_answer',
    'report_problem',
    'turned_in_not',
    'today',
    'translate',
    'mic_none',
    'add_circle_outline',
    'gesture',
    'cloud',
    'attachment',
    'build',
    'bug_report',
    'class',
    'delete',
    'dns',
    'event_seat',
    'code',
    'language',
    'pan_tool',
    'settings',
    'album',
    'pause_circle_outline',
    'replay',
    'videocam',
    'volume_up',
    'call',
    'business',
    'email',
    'rss_feed',
    'drafts',
    'reply',
    'weekend',
    'access_alarms',
    'bluetooth',
    'brightness_high',
    'signal_wifi_off',
    'folder',
    'desktop_mac',
    'memory',
    'videogame_asset'
];

$(document).ready(function() {
    $canvas = $('<canvas id="canvas" width="' + $parent.width() + '" height="' + $parent.height() + '">');
    $canvas.appendTo($parent);
    document.onmousemove = handleMouseMove;
    setUpNet();
});

function setUpNet() {
    for (var i = 0; i < elementCount; i++) {
        var __yRand = getRandomInt(0, $parent.height() - 24)
        var __xRand = getRandomInt(0, $parent.width() - 24)
        var $div;
        $div = $('<i class="material-icons element">' + elementSource[getRandomInt(0, elementSource.length - 1)] + '</i>');
        $div.css({
            top: __yRand,
            left: __xRand
        });
        $div.appendTo($parent);

        elements[i] = $div;
        elementsX[i] = __xRand;
        elementsY[i] = __yRand;
        elementsFactor[i] = getRandomInt(0, 3) / getRandomInt(1, 3) + 1;
    }
    for (var i = 0; i < lines; i++) {
        lineA[i] = getRandomInt(0, elementCount);
        lineB[i] = getRandomInt(0, elementCount);
        while (lineA[i] == lineB[i]) {
            lineA[i] = getRandomInt(0, elementCount);
        }
        var xA = elementsX[lineA[i]];
        var xB = elementsX[lineB[i]];
        var yA = elementsY[lineA[i]];
        var yB = elementsY[lineB[i]];
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(xA + 12, yA + 12);
        context.lineTo(xB + 12, yB + 12);
        context.lineWidth = 1;

        // set line color
        context.strokeStyle = '#fff';
        context.stroke();
    }
}

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    var __x = (event.pageX - $parent.width()) / ($parent.width() / factor);
    var __y = (event.pageY - $parent.height()) / ($parent.height() / factor);
    updatePosition(__x, __y);
}

function updatePosition(x, y) {
    for (var i = 0; i < elements.length; i++) {
        if (elementsY[i] + y * -elementsFactor[i] + 24 >= $parent.height()) {
            elements[i].css('top', $parent.height() - 24);
        } else {
            elements[i].css('top', elementsY[i] + y * -elementsFactor[i]);
        }
        elements[i].css('left', elementsX[i] + x * -elementsFactor[i]);
    }
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < lines; i++) {
        var a = lineA[i];
        var b = lineB[i];
        var xA = elementsX[a] + x * -elementsFactor[a];
        var xB = elementsX[b] + x * -elementsFactor[b];
        var yA = elementsY[a] + y * -elementsFactor[a];
        var yB = elementsY[b] + y * -elementsFactor[b];
        if (elementsY[a] + y * -elementsFactor[a] + 24 >= $parent.height()) {
            yA = $parent.height() - 24;
        }if (elementsY[b] + y * -elementsFactor[b] + 24 >= $parent.height()) {
            yB = $parent.height() - 24;
        }

        context.beginPath();
        context.moveTo(xA + 12, yA + 12);
        context.lineTo(xB + 12, yB + 12);
        context.lineWidth = 1;

        // set line color
        context.strokeStyle = '#fff';
        context.stroke();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
