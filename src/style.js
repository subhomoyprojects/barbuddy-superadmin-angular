$( document ).ready(function() {

    if ($(window).width() < 768) {
        $(".open-close-sidebar").addClass("toggled");
        $("body").addClass("sidebar-toggled");
    }

    $(".open-close-sidenav").click(function(){
        $(".open-close-sidebar").toggleClass("toggled");
    });
    $(".open-close-sidenav").click(function(){
        $("body").toggleClass("sidebar-toggled");
    });
});