/* Navbar Script */
$(document).ready(function() {
    var $nav = $('#navbar');
    var navHeight = $nav.innerHeight();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $nav.addClass('fixed-navbar');
        } else {
            $nav.removeClass('fixed-navbar');
        }
    });

    $('.menu-item').on('click', function() {
        $('.menu-item').removeClass('menu-item-active');
        $(this).addClass('menu-item-active');
    });
});


$("#n-toggle").click(()=>{
    $("#mobile-menu").slideToggle()
})