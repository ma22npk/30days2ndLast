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

