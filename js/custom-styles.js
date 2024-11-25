$(document).ready(function(){
    $('.brand-items.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        margin: 30,
        nav: false,    // Remove navigation arrows
        dots: false,   // Remove navigation dots
        center: true,  // Center the items
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
});