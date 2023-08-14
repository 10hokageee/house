$(function(){

  $(".select-style").styler();

  $('.features__product-thumb').slick({
    asNavFor: '.features__product-big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    draggable: false,
    arrows: false,
    variableWidth: true
  });

  $('.features__product-big').slick({
    asNavFor: '.features__product-thumb',
    draggable: false,
    arrows: false,
    variableWidth: true
  });


  $(".header-menu__list-link, .header__logo, .footer__bottom-link").on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr("href");
    let scrollPoint = $(scrollAnchor).offset().top;
  
    if (scrollAnchor === "#home") {
      scrollPoint = scrollPoint;
  
    }
  
    $("html, body").animate (
      {
        scrollTop: scrollPoint,
      },
      1500
    );
  return false;
  });


  $(window).on("scroll", function (){
    if ($(window).scrollTop() > 50) {
      $(".header-wrapper").addClass("header-fixed");
    } else {
      $(".header-wrapper").removeClass("header-fixed");
    }
  });
  
});