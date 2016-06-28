# cmd (⌘) / ctrl + enter

A jQuery plugin that enables <key>⌘</key>/<key>ctrl</key> + <key>enter</key> to submit a form (when applied to a textarea).

## Usage

Include `cmd-ctrl-enter.js` script. Then select your textareas, and call `cmdCtrlEnter`:

    $('textarea').cmdCtrlEnter();

### `which`

Returns the supported key symbol (<key>⌘</key> on a Mac, <key>Ctrl</key> on anything else):

    $('textarea').cmdCtrlEnter('which');

### `destroy`

Removes the behaviour:

    $('textarea').cmdCtrlEnter('destroy');