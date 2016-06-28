(function($) {
  var nav = window.navigator;
  var mac = 'platform' in nav && (/^Mac/).test(nav.platform);

  $.fn.cmdCtrlEnter = function(o) {
    if(o === 'which') return mac ? '⌘' : 'Ctrl';
    if(o === 'destroy') return this.unbind('keydown.cmdCtrlEnter');

    this.filter('textarea').each(function(i, el) {
      var $el = $(el);
      var $form = $el.parents('form');
      var $btn = $form.find('[type=submit]');

      $el.on('keydown.cmdCtrlEnter', function(evt) {
        if(evt.which === 13 && ((evt.ctrlKey && !mac) || evt.metaKey)) {
          if(!$btn.attr('disabled')) $form.submit();
        }
      });
    });

    return this;
  };
})(jQuery);
