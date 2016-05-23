$(function() {
    $("#typed").typed({
        cursorChar: "",
        typeSpeed: 50,
        stringsElement: $('#typed-strings'),
    });
    setTimeout(function() {
        $('.comingsoon').fadeOut(500, function() {});
    }, 8500);
});
