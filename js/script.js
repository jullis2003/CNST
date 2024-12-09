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

  // ----------------------------------------------HEADER SCROLL---------------------------------------

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

  // ------------------------------------------MOBILE MENU-----------------------------------------------

  $(".header__burger-btn").on("click", function () {
    $(".mobile-menu").addClass("is-open");
  });

  $(".mobile-menu__btn-close").on("click", function () {
    $(".mobile-menu").removeClass("is-open");
  });

  $(".header-nav__link").on("click", function () {
    $(".mobile-menu").removeClass("is-open");
  });

  //---------------------------------------------PORTFOLIO FILTER----------------------------------

  $(".portfolio-section__button").on("click", function () {
    const filter = $(this).data("filter");

    $(".portfolio-section__button").removeClass("button-active");
    $(this).addClass("button-active");

    if (filter === "all") {
      $(".card").removeClass("hidden");
    } else {
      $(".card").each(function () {
        $(this).toggleClass("hidden", !$(this).hasClass(filter));
      });
    }
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
