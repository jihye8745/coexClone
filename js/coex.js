$(() => {

  //mouse event
  const mo = $(".mouse");

  $(window).on("mousemove", function () {
    mo.css({
      left: event.pageX,
      top: event.pageY
    })
  });

  //menu event
  $(".main_menu").on({
    mouseenter: function () {
      $(".submenu_wrap").stop().fadeIn();
    },
    mouseleave: function () {
      $(".submenu_wrap").stop().fadeOut();
    }
  });

  $(".ham").on("click", () => {
    $(".ham_category").stop().slideDown();
    $(".bg_box").show()
    $(".ham").hide();
    $(".close").show();
  });

  $(".close").on("click", () => {
    $(".ham_category").stop().slideUp();
    $(".bg_box").hide();
    $(".ham").show();
    $(".close").hide();
  })


  // header event
  let lastScrollTop = 0;
  let isScroll = false;
  const header = $("header");
  const headerHeight = header.outerHeight();

  $(window).on('scroll', () => {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > headerHeight) {

      if (scrollTop > lastScrollTop && !isScroll) {
        header.addClass("header_hidden");
        isScroll = true
      } else if (scrollTop < lastScrollTop && isScroll) {
        header.removeClass("header_hidden");
        isScroll = false
      }
    } else {
      header.removeClass("header_hidden");
      isScroll = false
    }

    lastScrollTop = scrollTop
  });


  // top button event
  $(window).on('scroll', function () {
    const w_scrollY = $(window).scrollTop();

    if (w_scrollY > 100) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });

  $(".top").on('click', function () {
    $(window).scrollTop(0);
  });


  // news tab event
  $(".liinfo").on("click", () => {
    $(".tab").removeClass("active");
    $(".liinfo").addClass("active");

    $(".notice").hide();
    $(".information").show();
  })

  $(".linotice").on("click", () => {
    $(".tab").removeClass("active");
    $(".linotice").addClass("active");

    $(".notice").show();
    $(".information").hide();
  })

  //footer family Site
  $(".family").on("click", (event) => {
    event.preventDefault();
    $(".family").toggleClass("active");
  })

});