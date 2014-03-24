module('cmd-ctrl-enter', {
  setup: function() {
    this.$form = $('form');
    this.$textarea = $('textarea').cmdCtrlEnter();
    this.$btn = this.$form.find('[type=submit]');
    this.cmdEnterEvent = $.Event("keydown", { keyCode: 13, which: 13, metaKey: true });
    this.ctrlEnterEvent = $.Event("keydown", { keyCode: 13, which: 13, ctrlKey: true });
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

      this.$textarea.trigger(this.cmdEnterEvent);
    });

    test('Does not submit form on ctrl+enter', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted once');
        return false;
      });
      this.$form.trigger('submit');

      this.$textarea.trigger(this.ctrlEnterEvent);
    });

    test('Does not submit form on cmd+enter if button is disabled', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted');
        return false;
      });

      this.$textarea.trigger(this.cmdEnterEvent);
      this.$btn.attr('disabled', 'disabled');
      this.$textarea.trigger(this.cmdEnterEvent);
    });

    test('`which` returns "⌘" on a Mac', function() {
      equal($('<textarea />').cmdCtrlEnter('which'), '⌘');
    });
  }
  else {
    test('Submits form on ctrl+enter', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted');
        return false;
      });

      this.$textarea.trigger(this.ctrlEnterEvent);
    });

    test('Does not submit form on ctrl+enter if button is disabled', 1, function() {
      this.$form.on('submit', function(evt) {
        ok(true, 'Form was submitted');
        return false;
      });

      this.$textarea.trigger(this.ctrlEnterEvent);
      this.$btn.attr('disabled', 'disabled');
      this.$textarea.trigger(this.ctrlEnterEvent);
    });

    test('`which` returns "Ctrl" on anything other than a Mac', function() {
      equal($('<textarea />').cmdCtrlEnter('which'), 'Ctrl');
    });
  }

  test('`destroy` unbinds the events', function() {
    this.$textarea.cmdCtrlEnter('destroy');
    ok(!$._data(this.$textarea[0], 'events'));
  });
})();