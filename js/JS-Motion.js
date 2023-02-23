$('.menu').click(function(){
    $('.links').toggleClass('active')
});
$('.img-open').click(function(){
    $(this).toggleClass('active')
    $('#body').toggleClass('active')
});

$(document).ready(function(){
    $(".owl-video").owlCarousel({
        loop:true,
        items: 1,
        nav:true,
        // autoplayTimeout:4000,
        // autoplay: true,
        items:1,
        margin: 0,
        responsive:{
            0:{
                items:1,
            },
            567:{
                items:2,
            },
            992:{
                items:4,
            },
        }
    }
    );
});