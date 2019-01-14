$(document).ready(function () {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      480:{
        items:1
      }
    }
  });

  $('.products_slider .owl-carousel').owlCarousel({
    loop:true,
    margin: 25,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      769:{
        items:2
      },
      900:{
        items:3
      }
    }
  });

  $('.featured_slider .owl-carousel').owlCarousel({
    loop:true,
    margin: 25,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      769:{
        items:3
      },
      1024:{
        items:4
      }
    }
  });

  $('.blog_cards .owl-carousel').owlCarousel({
    loop:true,
    margin: 25,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      868:{
        items:2
      }
    }
  });

});