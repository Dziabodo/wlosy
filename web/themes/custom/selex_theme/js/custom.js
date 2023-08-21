/**
 * @file
 * JavaScript for bp_vsm.
 */

(function($) {
  $(document).ready(function() {

    $('#block-languageswitcher .language-link').html('<img src="/themes/custom/selex_theme/images/english.png" class="flag" height="30"/>');
    $('#block-languageswitcher .language-link').odd().html('<img src="/themes/custom/selex_theme/images/polish.png" class="polish" height="30"/>');


    $('#block-views-block-footer-menu-block-1 .views-field-title').click(function(e) {
      var titleText = $(this).text();
      var next = $(this).next();
      $(next).clone().dialog({
        title: titleText,
        maxWidth: $(window).width()-20,
        minWidth: $(window).width()-20,
        maxHeight: $(window).height()-20,
        create: function (event) {
          //$(event.target).parent().css('position', 'fixed')
        },
        open: function( event, ui ) {
          //$('.ui-dialog-content').animate({
          //  scrollTop: $('.ui-dialog-content').offset().top
          //});
        }
      });
    });

    var param = $(location).attr('href').split("?");
    if (param.length>1 && param[1] != 'success=yes') {
      $(location).attr('href',param[0] + "?success=yes");
    }
    else if (param.length>1 && param[1] == 'success=yes') {
      $(location).attr('href',param[0]);
    }

    $( ".hamburger" ).click(function() {
      $( ".fixed .menu" ).slideToggle( "slow", function() {
        $(this).addClass('open');
        $(this).removeClass('close');
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
      });
    });

    $( ".cross" ).click(function() {
      $( ".fixed .menu" ).slideToggle( "slow", function() {
        $(this).addClass('close');
        $(this).removeClass('open');
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
      });
    });

    $("#captcha summary").hide();
    
    $(".menu .menu-item a").click(function(e) {
      e.preventDefault();
      if (!$(this).parent().hasClass('home')) {
        var aid = $(this).attr("href");
        var height = $('.fixed').height();
        $('html,body').animate({scrollTop: $(aid).offset().top - 140}, 'slow');
        if ($(window).width() < 1400) {
          $(".fixed .menu").slideToggle("slow", function () {
            $(this).addClass('close');
            $(this).removeClass('open');
            $(".cross").hide();
            $(".hamburger").show();
          });
        }
      }
      else {
        $('html,body').animate({scrollTop: 0}, 'slow');
        if ($(window).width() < 1400) {
          $(".fixed .menu").slideToggle("slow", function () {
            $(this).addClass('close');
            $(this).removeClass('open');
            $(".cross").hide();
            $(".hamburger").show();
          });
        }
      }
    });

    $(".logo").click(function(e) {
      e.preventDefault();
      $('html,body').animate({scrollTop:0},'slow');
      $('.menu .menu-item a').removeClass("active");
    });

    $('#block-webform').prepend('<a id="kontakt" class="anchor"></a>')

    $('.menu .menu-item').first().addClass("home");
   $('.menu .menu-item a').click(function(e) {
     $('.menu .menu-item a').removeClass("active");
     $(this).addClass("active");
   });


    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var aboutUsPostiion = $('#block-views-block-about-us-block-1').position().top-200;
      var financingPosition = $('#block-views-block-purchase-and-financing-block-1').position().top-200;
      var innowacjePostiion = $('#block-views-block-technologie-i-innowacje-block-1').position().top-200;
      var consultingPostiion = $('#block-views-block-training-system-and-consulting-block-1').position().top-200;
      var partnersPostiion = $('#block-views-block-cooperation-and-partners-block-1').position().top-200;
      var webformPostiion = $('#block-webform').position().top-300;


      if (scroll < aboutUsPostiion) {
        $('.menu .menu-item a').removeClass("active");
      }
      if (scroll > aboutUsPostiion && scroll < financingPosition) {
          $('.menu .menu-item a').removeClass("active");
          $('.menu .menu-item:nth-child(2) a').addClass('active');
      }

      if (scroll > financingPosition && scroll < innowacjePostiion) {
        $('.menu .menu-item a').removeClass("active");
        $('.menu .menu-item:nth-child(3) a').addClass('active');
      }

      if (scroll > innowacjePostiion && scroll < consultingPostiion) {
        $('.menu .menu-item a').removeClass("active");
        $('.menu .menu-item:nth-child(4) a').addClass('active');
      }

      if (scroll > consultingPostiion && scroll < partnersPostiion) {
        $('.menu .menu-item a').removeClass("active");
        $('.menu .menu-item:nth-child(5) a').addClass('active');
      }

      if (scroll > partnersPostiion && scroll < webformPostiion-100) {
        $('.menu .menu-item a').removeClass("active");
        $('.menu .menu-item:nth-child(6) a').addClass('active');
      }

      if (scroll > webformPostiion) {
        $('.menu .menu-item a').removeClass("active");
        $('.menu .menu-item:nth-child(7) a').addClass('active');
      }

    });
  });
})(jQuery);
