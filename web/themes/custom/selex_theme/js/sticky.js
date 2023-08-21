/**
 * @file
 * JavaScript for bp_vsm.
 */

(function($) {
  $(document).ready(function(){
    $(document).ready(function(e) {
      if ($(window).width() > 1400) {
        var scroll = $(window).scrollTop();
        if (scroll > 220 && !$('.fixed').hasClass('show')) {
          $('.fixed').animate({
            top: 0
          }, 150);
          $('.fixed').addClass('show');
          $('.fixed').removeClass('rolled');
        }
      }
    });
    $(window).scroll(function (event) {
      let scroll = $(window).scrollTop();
      let blockPosition = $('#block-highlightblock').position();
      if ($(window).width() > 1400) {
        if (scroll > 220 && !$('.fixed').hasClass('show')) {
          $('.fixed').animate({
            top: 0
          }, 150);
          $('.fixed').addClass('show');
          $('.fixed').removeClass('rolled');
        }
        if (scroll < 220 && !$('.fixed').hasClass('rolled')) {
          $('.fixed').animate({
            top: "-135px"
          }, 150);
            $('.fixed').addClass('rolled');
            $('.fixed').removeClass('show');
        }
      }
    });
  });
})(jQuery);
