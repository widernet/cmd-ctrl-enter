(function($) {
  $.fn.cmdCtrlEnter = function() {
    var nav = window.navigator,
        mac = 'platform' in nav && (/^Mac/).test(nav.platform);

    this.filter('textarea').each(function(i, el) {
      var $el = $(el), $form = $el.parents('form');
      
      $el.on('keydown', function(evt) {
        if(evt.which === 13 && ((evt.ctrlKey && !mac) || evt.metaKey)) $form.submit();
      });
    });
    return this;
  };
})(jQuery);