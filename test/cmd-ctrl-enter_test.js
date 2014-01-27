module('cmd-ctrl-enter', {
  setup: function() {
    this.$form = $('form');
    this.$textarea = $('textarea').cmdCtrlEnter();
  }
});

test('Returns the jQuery object', 1, function() {
  var $textarea = $('<textarea />');
  equal($textarea.cmdCtrlEnter(), $textarea);
});

(function() {
  var nav = window.navigator,
      mac = 'platform' in nav && (/^Mac/).test(nav.platform);
  
  if(mac) {
    test('Submits form on cmd+enter', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted');
        return false;
      });

      this.$textarea.trigger($.Event("keydown", { keyCode: 13, which: 13, metaKey: true }));
    });

    test('does not submit form on ctrl+enter', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted once');
        return false;
      });
      this.$form.trigger('submit');

      this.$textarea.trigger($.Event("keydown", { keyCode: 13, which: 13, ctrlKey: true }));
    });
  }
  else {
    test('Submits form on ctrl+enter', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted');
        return false;
      });

      this.$textarea.trigger($.Event("keydown", { keyCode: 13, which: 13, ctrlKey: true }));
    });
  }
})();