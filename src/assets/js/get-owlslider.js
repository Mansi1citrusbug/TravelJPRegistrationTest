$(document).ready(function(){ 
    $('#owl-category').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<span class="span-roundcircle left-roundcircle"><i class="fe fe-chevron-left left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="fe fe-chevron-right right-arrow"></span>'],
        dots: false,
        autoWidth: true,
        stagePadding: 0,
        margin:0,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1 
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1180:{
                items:4.4
            } 
    
        }
      });
});

