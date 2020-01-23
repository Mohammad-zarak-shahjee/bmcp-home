$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

///////////////////////////////////////////Navbar transparent jquery///////////////////////////////////
$(document).ready(function() {
    $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
        $('.nav').addClass('shrink');
    }
    else {
    $('.nav').removeClass('shrink');
    }
  });
});

              


     
