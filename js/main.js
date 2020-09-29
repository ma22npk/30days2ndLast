    /* JQuery ハンバーガーメニュー ==========================*/
    $(function() {
        $('.btn-trigger, .header-overlay').on('click', function() {
            $(this).toggleClass('active');
            $('.header__nav').toggleClass('active');
            $('body').toggleClass('open');
            $('.header-overlay').toggleClass('open');
            return false;
        });
    });
    /* JQuery ハンバーガーメニュー ==========================*/

    // toTopBtn ===========================
    if ($(window).scrollTop() > 300) {
      $(".to-top-btn").addClass("is-over");
    } else {
      $(".to-top-btn").removeClass("is-over");
    }
    if ($(window).scrollTop() > $(".footer").offset().top - 1000) {
      $(".to-top-btn").removeClass("is-over");
    }
  });
    // スムーススクロール
    jQuery('a[href^="#"]').click(function() {
        let header = jQuery(".header").innerHeight();
        let speed = 300;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        let position = jQuery(target).offset().top - header;
        if ("fixed" !== jQuery(".header").css("position")) {
            position = jQuery(target).offset().top;
        }
        if (0 > position) {
            position = 0;
        }
        jQuery("html, body").animate({
                scrollTop: position
            },
            speed
        );
        return false;
    });

    // スクロール判定
    jQuery(window).on("scroll", function() {
        if (100 < jQuery(this).scrollTop()) {
            jQuery('.totop').addClass('is-show');
        } else {
            jQuery('.totop').removeClass('is-show');
        }
    });
    // ヘッダーの色を変える ===========================
    jQuery('.header-nav-item-a').click(function() {
        jQuery('.header-nav-item-a').removeClass('is-active');
        jQuery(this).addClass('is-active');
        return false;
  //アコーディオン
  $(function () {
    $(".faq__accordion_header").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("is-active");
    });
  });

  //  ==========================================
  // results
  new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 1.5,
    spaceBetween: 24,
    width: 422,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
  //  ==========================================
