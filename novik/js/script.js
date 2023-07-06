function sends() {
    document.location.href = "https://mail.google.com/";
}

const but = document.getElementById('send');
but.onclick = sends;

$(function() {
    // Script's for button menu
    $("#butmenu").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").slideToggle(500);
        $("#translate_nav").fadeToggle(600);
        $('body').toggleClass('stops');
        $(".containermini").toggleClass("fullmenu");
    });
    $("#butmenu_close").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").slideToggle();
        $("#translate_nav").fadeToggle();
        $('body').toggleClass('stops');
        $(".containermini").toggleClass("fullmenu");
    });
    // Script's for element menu
    $(".nonstop").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").toggle();
        $("#translate_nav").toggle();
        $('body').toggleClass('stops');
        $(".containermini").toggleClass("fullmenu");
    });
});