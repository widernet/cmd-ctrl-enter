(function($) {
  $.fn.cmdCtrlEnter = function(o) {

    var nav = window.navigator,
        mac = 'platform' in nav && (/^Mac/).test(nav.platform);

    if(o === 'which') return mac ? '⌘' : 'Ctrl';

    this.filter('textarea').each(function(i, el) {
      var $el = $(el), $form = $el.parents('form');

      $el.on('keydown', function(evt) {
        if(evt.which === 13 && ((evt.ctrlKey && !mac) || evt.metaKey)) $form.submit();
      });
    });
    return this;
  };

  $(function() {
    $('textarea.cmd-ctrl-enter').cmdCtrlEnter();
  });
})(jQuery);