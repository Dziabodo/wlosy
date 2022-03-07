/**
 * @file
 * JavaScript for bp_vsm.
 */

(function($) {
  $('#angle-view-demo').angle({
    // rotation speed
    speed: 2,
    // enable mouse drag
    drag: false,
    // selector for previous button
    previous: '',
    // selector for next button
    next: '',
    // current image
    current: 0,
    // js array object
    get_image: function() {},
    // callback
    after: function() {}
  });
})(jQuery);
