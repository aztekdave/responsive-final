$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000, pause: "hover"
    })

 // navbar collapse
$('.navbar-collapse').on('click', function (){

    $('.navbar-collapse').collapse('hide');
});

// fix hamburger navbar collapse
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//document.ready ends here
});