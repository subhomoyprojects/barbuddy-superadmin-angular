$( document ).ready(function() {
    $(".open-close-sidenav").click(function(){
        $(".open-close-sidebar").toggleClass("toggled");
    });
    $(".open-close-sidenav").click(function(){
        $("body").toggleClass("sidebar-toggled");
    });
});