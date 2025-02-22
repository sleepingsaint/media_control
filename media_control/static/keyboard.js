const keyCodesWithEvents = {
    0: {
        key: 'Unidentified',
        keyCode: 0,
        which: 0,
        code: 'Unidentified',
        location: 0,
        description: 'These keys do not have a key code',
        path: '/no-keycode'
    },
    3: {
        key: 'Cancel',
        keyCode: 3,
        which: 3,
        code: 'Pause',
        location: 0,
        altKey: false,
        ctrlKey: true,
        metaKey: false,
        shiftKey: false,
        description: 'break',
        path: '/cancel'
    },
    8: {
        key: 'Backspace',
        keyCode: 8,
        which: 8,
        code: 'Backspace',
        location: 0,
        description: 'backspace / delete',
        unicode: '⌫',
        path: '/backspace'
    },
    9: {
        key: 'Tab',
        keyCode: 9,
        which: 9,
        code: 'Tab',
        location: 0,
        description: 'tab',
        unicode: '↹',
        path: '/tab'
    },
    12: {
        key: 'Clear',
        keyCode: 12,
        which: 12,
        code: 'NumLock',
        location: 0,
        description: 'clear',
        unicode: '⌧',
        path: '/clear'
    },
    13: {
        key: 'Enter',
        keyCode: 13,
        which: 13,
        code: 'Enter',
        location: 0,
        description: 'Enter / Return',
        unicode: '↵',
        path: '/enter'
    },
    16: {
        key: 'Shift',
        keyCode: 16,
        which: 16,
        code: 'ShiftLeft',
        location: 1,
        description: 'shift',
        unicode: '⇧',
        shiftKey: true,
        altKey: false,
        path: '/shift-left'
    },
    17: {
        key: 'Control',
        keyCode: 17,
        which: 17,
        code: 'ControlLeft',
        location: 1,
        altKey: true,
        ctrlKey: true,
        metaKey: true,
        shiftKey: true,
        description: 'ctrl',
        unicode: '^',
        path: '/control-left'
    },
    18: {
        key: 'Alt',
        keyCode: 18,
        which: 18,
        code: 'AltLeft',
        location: 1,
        altKey: true,
        ctrlKey: false,
        metaKey: true,
        shiftKey: false,
        description: 'Alt / Option',
        unicode: '⎇ / ⌥',
        path: '/alt-left'
    },
    19: {
        key: 'Pause',
        keyCode: 19,
        which: 19,
        code: 'Pause',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'pause/break',
        path: '/pause'
    },
    20: {
        key: 'CapsLock',
        keyCode: 20,
        which: 20,
        code: 'CapsLock',
        location: 0,
        description: 'caps lock',
        unicode: '⇪',
        path: '/capslock'
    },
    21: {
        key: 'Unidentified',
        keyCode: 21,
        which: 21,
        code: 'Lang1',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'hangul',
        path: '/lang1'
    },
    25: {
        key: 'Unidentified',
        keyCode: 25,
        which: 25,
        code: 'Lang2',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'hanja',
        path: '/lang2'
    },
    27: {
        key: 'Escape',
        keyCode: 27,
        which: 27,
        code: 'Escape',
        location: 0,
        description: 'escape',
        unicode: '⎋',
        path: '/escape'
    },
    28: {
        key: 'henkan',
        description: 'conversion',
        keyCode: 28,
        which: 28,
        path: '/henkan'
    },
    29: {
        key: 'muhenkan',
        description: 'non-conversion',
        keyCode: 29,
        which: 29,
        path: '/muhenkan'
    },
    32: {
        key: ' ',
        keyCode: 32,
        which: 32,
        code: 'Space',
        location: 0,
        description: 'spacebar',
        path: '/space'
    },
    33: {
        key: 'PageUp',
        keyCode: 33,
        which: 33,
        code: 'Numpad9',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'page up',
        unicode: '⇞',
        path: '/page-up'
    },
    34: {
        key: 'PageDown',
        keyCode: 34,
        which: 34,
        code: 'Numpad3',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'page down',
        unicode: '⇟',
        path: '/page-down'
    },
    35: {
        key: 'End',
        keyCode: 35,
        which: 35,
        code: 'Numpad1',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'end',
        path: '/end'
    },
    36: {
        key: 'Home',
        keyCode: 36,
        which: 36,
        code: 'Numpad7',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'home',
        unicode: '⌂',
        path: '/home'
    },
    37: {
        key: 'ArrowLeft',
        keyCode: 37,
        which: 37,
        code: 'ArrowLeft',
        location: 0,
        description: 'left arrow',
        unicode: '←',
        path: '/arrow-left'
    },
    38: {
        key: 'ArrowUp',
        keyCode: 38,
        which: 38,
        code: 'ArrowUp',
        location: 0,
        description: 'up arrow',
        unicode: '↑',
        path: '/arrow-up'
    },
    39: {
        key: 'ArrowRight',
        keyCode: 39,
        which: 39,
        code: 'ArrowRight',
        location: 0,
        description: 'right arrow',
        unicode: '→',
        path: '/arrow-right'
    },
    40: {
        key: 'ArrowDown',
        keyCode: 40,
        which: 40,
        code: 'ArrowDown',
        location: 0,
        description: 'down arrow',
        unicode: '↓',
        path: '/arrow-down'
    },
    41: {
        key: 'Select',
        description: 'select',
        keyCode: 41,
        which: 41,
        path: '/select'
    },
    42: {
        key: 'Print',
        description: 'print',
        keyCode: 42,
        which: 42,
        path: '/print'
    },
    43: {
        key: 'Execute',
        description: 'execute',
        keyCode: 43,
        which: 43,
        path: '/execute'
    },
    44: {
        key: 'F13',
        keyCode: 44,
        which: 44,
        code: 'F13',
        location: 0,
        description: 'Print Screen / F13 (firefox)',
        unicode: '⎙',
        path: '/f13-firefox'
    },
    45: {
        key: 'Insert',
        keyCode: 45,
        which: 45,
        code: 'Numpad0',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'insert',
        unicode: 'x',
        path: '/insert'
    },
    46: {
        key: 'Delete',
        keyCode: 46,
        which: 46,
        code: 'NumpadDecimal',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'delete',
        unicode: '⌦',
        path: '/delete'
    },
    47: {
        key: 'Help',
        description: 'help',
        keyCode: 47,
        which: 47,
        unicode: '⍰',
        path: '/help'
    },
    48: {
        key: '0',
        keyCode: 48,
        which: 48,
        code: 'Digit0',
        location: 0,
        description: '0',
        unicode: '⓪',
        path: '/0'
    },
    49: {
        key: '1',
        keyCode: 49,
        which: 49,
        code: 'Digit1',
        location: 0,
        description: '1 Key',
        unicode: '①',
        path: '/1'
    },
    50: {
        key: '2',
        keyCode: 50,
        which: 50,
        code: 'Digit2',
        location: 0,
        description: '2 Key',
        unicode: '②',
        path: '/2'
    },
    51: {
        key: '3',
        keyCode: 51,
        which: 51,
        code: 'Digit3',
        location: 0,
        description: '3 Key',
        unicode: '③',
        path: '/3'
    },
    52: {
        key: '4',
        keyCode: 52,
        which: 52,
        code: 'Digit4',
        location: 0,
        description: '4 Key',
        unicode: '④',
        path: '/4'
    },
    53: {
        key: '5',
        keyCode: 53,
        which: 53,
        code: 'Digit5',
        location: 0,
        description: '5 Key',
        unicode: '⑤',
        path: '/5'
    },
    54: {
        key: '6',
        keyCode: 54,
        which: 54,
        code: 'Digit6',
        location: 0,
        description: '6 Key',
        unicode: '⑥',
        path: '/6'
    },
    55: {
        key: '7',
        keyCode: 55,
        which: 55,
        code: 'Digit7',
        location: 0,
        description: '7 Key',
        unicode: '⑦',
        path: '/7'
    },
    56: {
        key: '8',
        keyCode: 56,
        which: 56,
        code: 'Digit8',
        location: 0,
        description: '8 Key',
        unicode: '⑧',
        path: '/8'
    },
    57: {
        key: '9',
        keyCode: 57,
        which: 57,
        code: 'Digit9',
        location: 0,
        description: '9 Key',
        unicode: '⑨',
        path: '/9'
    },
    58: {
        key: ':',
        keyCode: 58,
        which: 58,
        code: 'Period',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: ':',
        path: '/colon'
    },
    59: {
        key: ';',
        keyCode: 59,
        which: 59,
        code: 'Semicolon',
        location: 0,
        description: 'semicolon (firefox), equals',
        path: '/semicolon-firefox'
    },
    60: {
        key: '<',
        keyCode: 60,
        which: 60,
        code: 'Backquote',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '<',
        path: '/less-than'
    },
    61: {
        key: '=',
        keyCode: 61,
        which: 61,
        code: 'Equal',
        location: 0,
        description: 'equals (firefox)',
        path: '/equals-firefox'
    },
    63: {
        key: 'ß',
        keyCode: 63,
        which: 63,
        code: 'Minus',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'ß / ?',
        path: '/straße'
    },
    64: {
        key: '@',
        description: '@ (firefox)',
        keyCode: 64,
        which: 64,
        path: '/at-firefox'
    },
    65: {
        key: 'a',
        keyCode: 65,
        which: 65,
        code: 'KeyA',
        location: 0,
        description: 'a',
        path: '/a'
    },
    66: {
        key: 'b',
        keyCode: 66,
        which: 66,
        code: 'KeyB',
        location: 0,
        description: 'b',
        path: '/b'
    },
    67: {
        key: 'c',
        keyCode: 67,
        which: 67,
        code: 'KeyC',
        location: 0,
        description: 'c',
        path: '/c'
    },
    68: {
        key: 'd',
        keyCode: 68,
        which: 68,
        code: 'KeyD',
        location: 0,
        description: 'd',
        path: '/d'
    },
    69: {
        key: 'e',
        keyCode: 69,
        which: 69,
        code: 'KeyE',
        location: 0,
        description: 'e',
        path: '/e'
    },
    70: {
        key: 'f',
        keyCode: 70,
        which: 70,
        code: 'KeyF',
        location: 0,
        description: 'f',
        path: '/f'
    },
    71: {
        key: 'g',
        keyCode: 71,
        which: 71,
        code: 'KeyG',
        location: 0,
        description: 'g',
        path: '/g'
    },
    72: {
        key: 'h',
        keyCode: 72,
        which: 72,
        code: 'KeyH',
        location: 0,
        description: 'h',
        path: '/h'
    },
    73: {
        key: 'i',
        keyCode: 73,
        which: 73,
        code: 'KeyI',
        location: 0,
        description: 'i',
        path: '/i'
    },
    74: {
        key: 'j',
        keyCode: 74,
        which: 74,
        code: 'KeyJ',
        location: 0,
        description: 'j',
        path: '/j'
    },
    75: {
        key: 'k',
        keyCode: 75,
        which: 75,
        code: 'KeyK',
        location: 0,
        altKey: true,
        ctrlKey: false,
        metaKey: true,
        shiftKey: false,
        description: 'k',
        path: '/k'
    },
    76: {
        key: 'l',
        keyCode: 76,
        which: 76,
        code: 'KeyL',
        location: 0,
        altKey: true,
        ctrlKey: false,
        metaKey: true,
        shiftKey: false,
        description: 'l',
        path: '/l'
    },
    77: {
        key: 'm',
        keyCode: 77,
        which: 77,
        code: 'KeyM',
        location: 0,
        description: 'm',
        path: '/m'
    },
    78: {
        key: 'n',
        keyCode: 78,
        which: 78,
        code: 'KeyN',
        location: 0,
        description: 'n',
        path: '/n'
    },
    79: {
        key: 'o',
        keyCode: 79,
        which: 79,
        code: 'KeyO',
        location: 0,
        description: 'o',
        path: '/o'
    },
    80: {
        key: 'p',
        keyCode: 80,
        which: 80,
        code: 'KeyP',
        location: 0,
        description: 'p',
        path: '/p'
    },
    81: {
        key: 'q',
        keyCode: 81,
        which: 81,
        code: 'KeyQ',
        location: 0,
        description: 'q',
        path: '/q'
    },
    82: {
        key: 'r',
        keyCode: 82,
        which: 82,
        code: 'KeyR',
        location: 0,
        description: 'r',
        path: '/r'
    },
    83: {
        key: 's',
        keyCode: 83,
        which: 83,
        code: 'KeyS',
        location: 0,
        description: 's',
        path: '/s'
    },
    84: {
        key: 't',
        keyCode: 84,
        which: 84,
        code: 'KeyT',
        location: 0,
        description: 't',
        path: '/t'
    },
    85: {
        key: 'u',
        keyCode: 85,
        which: 85,
        code: 'KeyU',
        location: 0,
        description: 'u',
        path: '/u'
    },
    86: {
        key: 'v',
        keyCode: 86,
        which: 86,
        code: 'KeyV',
        location: 0,
        description: 'v',
        path: '/v'
    },
    87: {
        key: 'w',
        keyCode: 87,
        which: 87,
        code: 'KeyW',
        location: 0,
        description: 'w',
        path: '/w'
    },
    88: {
        key: 'x',
        keyCode: 88,
        which: 88,
        code: 'KeyX',
        location: 0,
        description: 'x',
        path: '/x'
    },
    89: {
        key: 'y',
        keyCode: 89,
        which: 89,
        code: 'KeyY',
        location: 0,
        description: 'y',
        path: '/y'
    },
    90: {
        key: 'z',
        keyCode: 90,
        which: 90,
        code: 'KeyZ',
        location: 0,
        description: 'z',
        unicode: '',
        path: '/z'
    },
    91: {
        key: 'Meta',
        keyCode: 91,
        which: 91,
        code: 'MetaLeft',
        location: 1,
        altKey: false,
        ctrlKey: false,
        metaKey: true,
        shiftKey: false,
        description: 'Windows Key / Left ⌘ / Chromebook Search key',
        unicode: '⌘ ⊞',
        path: '/meta-left'
    },
    92: {
        key: 'Meta',
        keyCode: 92,
        which: 92,
        code: 'MetaRight',
        location: 2,
        altKey: false,
        ctrlKey: false,
        metaKey: true,
        shiftKey: true,
        description: 'Right Windows',
        unicode: '⌘ ⊞',
        path: '/meta-right'
    },
    93: {
        key: 'ContextMenu',
        keyCode: 93,
        which: 93,
        code: 'ContextMenu',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'Windows Menu / Right ⌘',
        unicode: '▤',
        path: '/context-menu'
    },
    95: {
        key: 'Standby',
        description: 'sleep',
        keyCode: 95,
        which: 95,
        unicode: '☾',
        path: '/standby'
    },
    96: {
        key: '0',
        keyCode: 96,
        which: 96,
        code: 'Numpad0',
        location: 3,
        description: 'Number Pad 0',
        unicode: '⓪',
        path: '/numpad-0'
    },
    97: {
        key: '1',
        keyCode: 97,
        which: 97,
        code: 'Numpad1',
        location: 3,
        description: 'Number Pad 1',
        unicode: '①',
        path: '/numpad-1'
    },
    98: {
        key: '2',
        keyCode: 98,
        which: 98,
        code: 'Numpad2',
        location: 3,
        description: 'Number Pad 2',
        unicode: '②',
        path: '/numpad-2'
    },
    99: {
        key: '3',
        keyCode: 99,
        which: 99,
        code: 'Numpad3',
        location: 3,
        description: 'Number Pad 3',
        unicode: '③',
        path: '/numpad-3'
    },
    100: {
        key: '4',
        keyCode: 100,
        which: 100,
        code: 'Numpad4',
        location: 3,
        description: 'Number Pad 4',
        unicode: '④',
        path: '/numpad-4'
    },
    101: {
        key: '5',
        keyCode: 101,
        which: 101,
        code: 'Numpad5',
        location: 3,
        description: 'Number Pad 5',
        unicode: '⑤',
        path: '/numpad-5'
    },
    102: {
        key: '6',
        keyCode: 102,
        which: 102,
        code: 'Numpad6',
        location: 3,
        description: 'Number Pad 6',
        unicode: '⑥',
        path: '/numpad-6'
    },
    103: {
        key: '7',
        keyCode: 103,
        which: 103,
        code: 'Numpad7',
        location: 3,
        description: 'Number Pad 7',
        unicode: '⑦',
        path: '/numpad-7'
    },
    104: {
        key: '8',
        keyCode: 104,
        which: 104,
        code: 'Numpad8',
        location: 3,
        description: 'Number Pad 8',
        unicode: '⑧',
        path: '/numpad-8'
    },
    105: {
        key: '9',
        keyCode: 105,
        which: 105,
        code: 'Numpad9',
        location: 3,
        description: 'Number Pad 9',
        unicode: '⑨',
        path: '/numpad9'
    },
    106: {
        key: '*',
        keyCode: 106,
        which: 106,
        code: 'NumpadMultiply',
        location: 3,
        description: 'multiply',
        unicode: '×',
        path: '/numpad-multiply'
    },
    107: {
        key: '+',
        keyCode: 107,
        which: 107,
        code: 'NumpadAdd',
        location: 3,
        description: 'add',
        path: '/numpad-add'
    },
    108: {
        key: ',',
        keyCode: 108,
        which: 108,
        code: 'NumpadDecimal',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'numpad period (firefox)',
        path: '/numpad-period'
    },
    109: {
        key: '-',
        keyCode: 109,
        which: 109,
        code: 'NumpadSubtract',
        location: 3,
        description: 'subtract',
        path: '/numpad-subtract'
    },
    110: {
        key: '.',
        keyCode: 110,
        which: 110,
        code: 'NumpadDecimal',
        location: 3,
        description: 'decimal point',
        path: '/numpad-decimal'
    },
    111: {
        key: '/',
        keyCode: 111,
        which: 111,
        code: 'NumpadDivide',
        location: 3,
        description: 'divide',
        unicode: '÷',
        path: '/numpad-divide'
    },
    112: {
        key: 'F1',
        keyCode: 112,
        which: 112,
        code: 'F1',
        location: 0,
        description: 'f1',
        path: '/f1'
    },
    113: {
        key: 'F2',
        keyCode: 113,
        which: 113,
        code: 'F2',
        location: 0,
        description: 'f2',
        path: '/f2'
    },
    114: {
        key: 'F3',
        keyCode: 114,
        which: 114,
        code: 'F3',
        location: 0,
        description: 'f3',
        path: '/f3'
    },
    115: {
        key: 'F4',
        keyCode: 115,
        which: 115,
        code: 'F4',
        location: 0,
        description: 'f4',
        path: '/f4'
    },
    116: {
        key: 'F5',
        keyCode: 116,
        which: 116,
        code: 'F5',
        location: 0,
        description: 'f5',
        path: '/f5'
    },
    117: {
        key: 'F6',
        keyCode: 117,
        which: 117,
        code: 'F6',
        location: 0,
        description: 'f6',
        path: '/f6'
    },
    118: {
        key: 'F7',
        keyCode: 118,
        which: 118,
        code: 'F7',
        location: 0,
        description: 'f7',
        path: '/f7'
    },
    119: {
        key: 'F8',
        keyCode: 119,
        which: 119,
        code: 'F8',
        location: 0,
        description: 'f8',
        path: '/f8'
    },
    120: {
        key: 'F9',
        keyCode: 120,
        which: 120,
        code: 'F9',
        location: 0,
        description: 'f9',
        path: '/f9'
    },
    121: {
        key: 'F10',
        keyCode: 121,
        which: 121,
        code: 'F10',
        location: 0,
        description: 'f10',
        path: '/f10'
    },
    122: {
        key: 'F11',
        keyCode: 122,
        which: 122,
        code: 'F11',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f11',
        path: '/f11'
    },
    123: {
        key: 'F12',
        keyCode: 123,
        which: 123,
        code: 'F12',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f12',
        path: '/f12'
    },
    124: {
        key: 'F13',
        keyCode: 124,
        which: 124,
        code: 'F13',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f13',
        path: '/f13'
    },
    125: {
        key: 'F14',
        keyCode: 125,
        which: 125,
        code: 'F14',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: true,
        description: 'f14',
        path: '/f14'
    },
    126: {
        key: 'F15',
        keyCode: 126,
        which: 126,
        code: 'F15',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: true,
        description: 'f15',
        path: '/f15'
    },
    127: {
        key: 'F16',
        keyCode: 127,
        which: 127,
        code: 'F16',
        location: 0,
        description: 'f16',
        path: '/f16'
    },
    128: {
        key: 'F17',
        keyCode: 128,
        which: 128,
        code: 'F17',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f17',
        path: '/f17'
    },
    129: {
        key: 'F18',
        keyCode: 129,
        which: 129,
        code: 'F18',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f18',
        path: '/f18'
    },
    130: {
        key: 'F19',
        keyCode: 130,
        which: 130,
        code: 'F19',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'f19',
        path: '/f19'
    },
    131: {
        key: 'F20',
        code: 'F20',
        description: 'F20',
        keyCode: 131,
        which: 131,
        path: '/f20'
    },
    132: {
        key: 'F21',
        code: 'F21',
        description: 'F21',
        keyCode: 132,
        which: 132,
        path: '/f21'
    },
    133: {
        key: 'F22',
        code: 'F22',
        description: 'F22',
        keyCode: 133,
        which: 133,
        path: '/f22'
    },
    134: {
        key: 'F23',
        code: 'F23',
        description: 'F23',
        keyCode: 134,
        which: 134,
        path: '/f23'
    },
    135: {
        key: 'F24',
        code: 'F24',
        description: 'F24',
        keyCode: 135,
        which: 135,
        path: '/f24'
    },
    136: {
        key: 'F25',
        code: 'F25',
        description: 'F25',
        keyCode: 136,
        which: 136,
        path: '/f25'
    },
    137: {
        key: 'F26',
        code: 'F26',
        description: 'F26',
        keyCode: 137,
        which: 137,
        path: '/f26'
    },
    138: {
        key: 'F27',
        code: 'F27',
        description: 'F27',
        keyCode: 138,
        which: 138,
        path: '/f27'
    },
    139: {
        key: 'F28',
        code: 'F28',
        description: 'F28',
        keyCode: 139,
        which: 139,
        path: '/f28'
    },
    140: {
        key: 'F29',
        code: 'F29',
        description: 'F29',
        keyCode: 140,
        which: 140,
        path: '/f29'
    },
    141: {
        key: 'F30',
        code: 'F30',
        description: 'F30',
        keyCode: 141,
        which: 141,
        path: '/f30'
    },
    142: {
        key: 'F31',
        code: 'F31',
        description: 'F31',
        keyCode: 142,
        which: 142,
        path: '/f31'
    },
    143: {
        key: 'F32',
        code: 'F32',
        description: 'F32',
        keyCode: 143,
        which: 143,
        path: '/f32'
    },
    144: {
        key: 'NumLock',
        keyCode: 144,
        which: 144,
        code: 'NumLock',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'num lock',
        unicode: '⇭',
        path: '/numlock'
    },
    145: {
        key: 'ScrollLock',
        keyCode: 145,
        which: 145,
        code: 'ScrollLock',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'scroll lock',
        unicode: '⤓',
        path: '/scroll-lock'
    },
    151: {
        key: '',
        description: 'airplane mode',
        keyCode: 151,
        which: 151,
        path: '/airplane-mode'
    },
    160: {
        key: '^',
        keyCode: 160,
        which: 160,
        code: 'BracketLeft',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '^',
        path: '/caret'
    },
    161: {
        key: 'Dead',
        keyCode: 161,
        which: 161,
        code: 'BracketRight',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '!',
        path: '/dead-bracket'
    },
    162: {
        key: '',
        description: '؛ (arabic semicolon) / " / ¢',
        keyCode: 162,
        which: 162,
        path: '/semicolon-arabic'
    },
    163: {
        key: '#',
        keyCode: 163,
        which: 163,
        code: 'Backquote',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '#',
        path: '/pound'
    },
    164: {
        key: '$',
        keyCode: 164,
        which: 164,
        code: 'Backslash',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '$',
        path: '/dollar'
    },
    165: {
        key: '^ù',
        keyCode: 165,
        which: 165,
        code: 'Quote',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'ù',
        path: '/quote'
    },
    166: {
        key: 'BrowserBack',
        description: 'browser page backward',
        keyCode: 166,
        which: 166,
        path: '/browser-page-backward'
    },
    167: {
        key: 'BrowserForward',
        description: 'browser page forward',
        keyCode: 167,
        which: 167,
        path: '/browser-page-forward'
    },
    168: {
        key: 'BrowserRefresh',
        description: 'browser refresh',
        keyCode: 168,
        which: 168,
        path: '/browser-refresh'
    },
    169: {
        key: ')',
        keyCode: 169,
        which: 169,
        code: 'Minus',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'closing paren (AZERTY)',
        path: '/parentheses-right'
    },
    170: {
        key: '*',
        keyCode: 170,
        which: 170,
        code: 'Backslash',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '*',
        path: '/asterisk'
    },
    171: {
        key: '+',
        keyCode: 171,
        which: 171,
        code: 'BracketRight',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '~ + * key',
        path: '/plus'
    },
    172: {
        key: '|',
        keyCode: 172,
        which: 172,
        description: 'home key, pipe key',
        path: '/pipe'
    },
    173: {
        key: '-',
        keyCode: 173,
        which: 173,
        code: 'Minus',
        location: 0,
        description: 'minus (firefox), mute/unmute',
        path: '/minus'
    },
    174: {
        key: 'AudioVolumeDown',
        keyCode: 174,
        which: 174,
        code: '',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'decrease volume level',
        path: '/audio-volume-down'
    },
    175: {
        key: 'AudioVolumeUp',
        keyCode: 175,
        which: 175,
        code: '',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'increase volume level',
        path: '/audio-volume-up'
    },
    176: {
        key: 'MediaTrackNext',
        keyCode: 176,
        which: 176,
        code: 'MediaTrackNext',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'next',
        path: '/media-track-next'
    },
    177: {
        key: 'MediaTrackPrevious',
        keyCode: 177,
        which: 177,
        code: 'MediaTrackPrevious',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'previous',
        path: '/media-track-previous'
    },
    178: {
        key: 'MediaStop',
        description: 'stop',
        keyCode: 178,
        which: 178,
        unicode: '',
        path: '/media-stop'
    },
    179: {
        key: 'MediaPlayPause',
        keyCode: 179,
        which: 179,
        code: '',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'play/pause',
        path: '/media-play-pause'
    },
    180: {
        key: 'LaunchMail',
        keyCode: 180,
        which: 180,
        code: '',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'e-mail',
        unicode: '✉',
        path: '/launch-mail'
    },
    181: {
        key: 'AudioVolumeMute',
        keyCode: 181,
        which: 181,
        code: 'VolumeMute',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'mute/unmute (firefox)',
        path: '/volume-mute'
    },
    182: {
        key: 'AudioVolumeDown',
        keyCode: 182,
        which: 182,
        code: 'VolumeDown',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'decrease volume level (firefox)',
        path: '/volume-down'
    },
    183: {
        key: 'AudioVolumeUp',
        keyCode: 183,
        which: 183,
        code: 'VolumeUp',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        unicode: '',
        description: 'increase volume level (firefox)',
        path: '/volume-up'
    },
    186: {
        key: ';',
        keyCode: 186,
        which: 186,
        code: 'Semicolon',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'semi-colon / ñ',
        path: '/semicolon'
    },
    187: {
        key: '=',
        keyCode: 187,
        which: 187,
        code: 'Equal',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'equal sign',
        path: '/equals'
    },
    188: {
        key: ',',
        keyCode: 188,
        which: 188,
        code: 'Comma',
        location: 0,
        description: 'comma',
        path: '/comma'
    },
    189: {
        key: '-',
        keyCode: 189,
        which: 189,
        code: 'Minus',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'dash',
        path: '/dash'
    },
    190: {
        key: '.',
        keyCode: 190,
        which: 190,
        code: 'Period',
        location: 0,
        description: 'period',
        path: '/period'
    },
    191: {
        key: '/',
        keyCode: 191,
        which: 191,
        code: 'Slash',
        location: 0,
        description: 'forward slash / ç',
        path: '/slash'
    },
    192: {
        key: '`',
        keyCode: 192,
        which: 192,
        code: 'Backquote',
        location: 0,
        description: 'Backtick / grave accent / ñ / æ / ö / § / ±',
        path: '/backtick'
    },
    193: {
        key: '/',
        keyCode: 193,
        which: 193,
        code: 'IntlRo',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '?, / or °',
        path: '/intlro'
    },
    194: {
        key: '.',
        keyCode: 194,
        which: 194,
        code: 'NumpadComma',
        location: 3,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'numpad period (chrome)',
        path: '/numpad-comma'
    },
    219: {
        key: '[',
        keyCode: 219,
        which: 219,
        code: 'BracketLeft',
        location: 0,
        description: 'open bracket',
        path: '/bracket-left'
    },
    220: {
        key: '\\',
        keyCode: 220,
        which: 220,
        code: 'Backslash',
        location: 0,
        description: 'back slash',
        path: '/backslash'
    },
    221: {
        key: ']',
        keyCode: 221,
        which: 221,
        code: 'BracketRight',
        location: 0,
        description: 'close bracket / å',
        path: '/bracket-right'
    },
    222: {
        key: "'",
        keyCode: 222,
        which: 222,
        code: 'Quote',
        location: 0,
        description: 'single quote / ø / ä',
        path: '/single-quote'
    },
    223: {
        key: '`',
        keyCode: 223,
        which: 223,
        code: 'Backquote',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '`',
        path: '/backquote'
    },
    224: {
        key: 'Meta',
        keyCode: 224,
        which: 224,
        code: 'OSLeft',
        metaKey: true,
        location: 1,
        description: 'left or right ⌘ key (firefox)',
        unicode: '⌘',
        path: '/os-left'
    },
    225: {
        key: 'AltGraph',
        keyCode: 225,
        which: 225,
        code: 'AltRight',
        location: 2,
        altKey: true,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'altgr',
        unicode: '⎇ or ⌥',
        path: '/alt-graph'
    },
    226: {
        key: '\\',
        keyCode: 226,
        which: 226,
        code: 'IntlBackslash',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: '< /git >, left back slash',
        path: '/git-left-back-slash'
    },
    229: {
        key: 'Dead',
        keyCode: 229,
        which: 229,
        code: 'Backquote',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        path: '/dead-backquote'
    },
    230: {
        key: '',
        description: 'GNOME Compose Key',
        keyCode: 230,
        which: 230,
        path: '/gnome-compose-key'
    },
    231: {
        key: '',
        description: 'ç',
        keyCode: 231,
        which: 231,
        path: '/ç'
    },
    233: {
        key: '',
        description: 'XF86Forward / é',
        keyCode: 233,
        which: 233,
        path: '/xf-86-forward'
    },
    234: {
        key: '',
        description: 'XF86Back / ê',
        keyCode: 234,
        which: 234,
        path: '/xf-86-back'
    },
    235: {
        key: '',
        description: 'non-conversion / ë',
        keyCode: 235,
        which: 235,
        path: '/non-conversion-e'
    },
    240: {
        key: 'Alphanumeric',
        description: 'alphanumeric / ð',
        keyCode: 240,
        which: 240,
        path: '/alphanumeric'
    },
    242: {
        key: 'HiraganaKatakana',
        description: 'hiragana/katakana / ò',
        keyCode: 242,
        which: 242,
        path: '/hiragana-katakana'
    },
    243: {
        key: 'ZenkakuHankaku',
        description: 'half-width/full-width / ó',
        keyCode: 243,
        which: 243,
        path: '/half-width-full-width'
    },
    244: {
        key: 'KanjiMode',
        description: 'kanji / ô',
        keyCode: 244,
        which: 244,
        path: '/kanji'
    },
    251: {
        key: '',
        description: 'unlock track pad (Chrome/Edge) / û',
        keyCode: 251,
        which: 251,
        path: '/unlock-track-pad-chrome-edge'
    },
    255: {
        key: 'WakeUp',
        keyCode: 255,
        which: 255,
        code: 'WakeUp',
        location: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        description: 'WakeUp',
        path: '/wake-up'
    }
}

const androidSpecificKeyCodes = {
    169: {
        key: '©',
        keyCode: 169,
        which: 169,
        code: 'Copyright',
        location: 0,
        description: 'Copyright sign',
        path: '/copyright'
    },
    174: {
        key: '®',
        keyCode: 174,
        which: 174,
        code: 'Registered ',
        location: 0,
        description: 'Registered sign',
        path: '/registered'
    },
    40: {
        key: '(',
        keyCode: 40,
        which: 40,
        code: 'Left parenthesis',
        location: 0,
        description: 'Left parenthesis',
        path: '/parentheses-left'
    },
    41: {
        key: ')',
        keyCode: 41,
        which: 41,
        code: 'Right parenthesis',
        location: 0,
        description: 'Right parenthesis',
        path: '/parentheses-right'
    },
    42: {
        key: '*',
        keyCode: 42,
        which: 42,
        code: 'asterisk',
        location: 0,
        description: 'asterisk',
        path: '/asterisk'
    },
    43: {
        key: '+',
        keyCode: 43,
        which: 43,
        code: 'Plus',
        location: 0,
        description: 'plus',
        path: '/plus'
    },
    44: {
        key: ',',
        keyCode: 45,
        which: 45,
        code: 'Comma',
        location: 0,
        description: 'comma',
        path: '/comma'
    },
    45: {
        key: '-',
        keyCode: 45,
        which: 45,
        code: 'Minus',
        location: 0,
        description: 'minus',
        path: '/minus'
    },
    46: {
        key: '.',
        keyCode: 46,
        which: 46,
        code: 'Period',
        location: 0,
        description: 'period',
        path: '/period'
    },
    47: {
        key: '/',
        keyCode: 47,
        which: 47,
        code: 'Slash',
        location: 0,
        description: 'slash',
        path: '/slash'
    }
}

const generateKey = (keyEvent) => ({
    key: keyEvent.key,
    keyCode: keyEvent.keyCode,
    which: keyEvent.which,
    code: keyEvent.code,
    location: keyEvent.location,
    altKey: keyEvent.altKey,
    ctrlKey: keyEvent.ctrlKey,
    metaKey: keyEvent.metaKey,
    shiftKey: keyEvent.shiftKey,
    repeat: keyEvent.repeat
})


const generateKeyForMobile = (keyEvent) => {
    const keycode = keyEvent.keyCode || keyEvent.which

    if (keycode === 16 && !keyEvent.shiftKey) {
        // Shift key is triggered when special characters key is pressed
        return null
    }

    let generatedKey;

    if (keycode === 0 || keycode === 229) {
        const value = keyEvent.target.value.toLowerCase()

        const keycodeEventForAndroid = Object.values(keyCodesWithEvents).find(
            keycodeEvent =>
                keycodeEvent.key === value &&
                !keycodeEvent.code?.includes('numpad') &&
                !androidSpecificKeyCodes[keycodeEvent.keyCode]
        )

        generatedKey = generateKey({
            ...keyEvent,
            ...keycodeEventForAndroid
        })

        if (generatedKey.key === 'Unidentified') {
            const keycodeForAndroid = value.charCodeAt(value.length - 1)

            const androidKeycode = androidSpecificKeyCodes[keycodeForAndroid]

            if (androidKeycode) {
                generatedKey = {
                    ...generateKey({
                        ...keyEvent,
                        ...androidKeycode
                    }),
                    description: androidKeycode.description
                }
            } else {
                generatedKey = generateKey({
                    ...keyEvent,
                    ...keyCodesWithEvents[keycodeForAndroid]
                })
            }
        }
    } else {
        generatedKey = generateKey(keyEvent)
    }

    return generatedKey
}
