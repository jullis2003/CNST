$(document).ready(function () {
  // --------------------------OWL CAROUSELS-------------------------------------
  // ROW SLIDER

  $(".row-slider").owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
  });

  // BLOG

  $(".blog-slider").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      601: {
        items: 2,
      },
    },
  });

  // ------------------------------------FAQ ACCORDION-------------------------------

  $(document).ready(function () {
    $(".faq-section__text").hide();

    $(".faq-section__spoller-title").click(function () {
      $(this).find(".faq-section__spoller-btn").toggleClass("rotate");
      $(this).siblings(".faq-section__text").slideToggle();
      $(this).parent(".faq-section__spoller").toggleClass("active");
    });
  });
});
