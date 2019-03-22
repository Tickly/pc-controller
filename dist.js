'use strict';

var _ffi = require('ffi');

var _ffi2 = _interopRequireDefault(_ffi);

var _refStruct = require('ref-struct');

var _refStruct2 = _interopRequireDefault(_refStruct);

var _win32Def = require('win32-def');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LPINPUT = (0, _refStruct2.default)({
    type: _win32Def.DTypes.DWORD,
    wVK: _win32Def.DTypes.WORD,
    dwFlags: _win32Def.DTypes.DWORD,
    wScan: _win32Def.DTypes.WORD,
    '???': 'int',
    time: 'int',
    dwExtraInfo: _win32Def.DTypes.ULONG_PTR
});

var user32 = _ffi2.default.Library('user32', {
    FindWindowExW: [_win32Def.DTypes.HWND, [_win32Def.DTypes.HWND, _win32Def.DTypes.HWND, _win32Def.DTypes.LPCTSTR, _win32Def.DTypes.LPCTSTR]],
    SetWindowTextW: [_win32Def.DTypes.BOOL, [_win32Def.DTypes.HWND, _win32Def.DTypes.LPCTSTR]],
    SendInput: [_win32Def.DTypes.UINT, [_win32Def.DTypes.UINT, LPINPUT, _win32Def.DTypes.INT]],
    keybd_event: ['void', [_win32Def.DTypes.BYTE, _win32Def.DTypes.BYTE, _win32Def.DTypes.DWORD, _win32Def.DTypes.ULONG_PTR]]
});

function KeyToggle(keyCode, type) {
    var entry = new LPINPUT();
    entry.type = 1;
    entry.wVK = 0;
    entry.time = 0;
    entry.dwExtraInfo = 0;
    entry.wScan = ConvertKeyCodeToScanCode(keyCode);
    entry.dwFlags = type == 'down' ? 8 : 8 | 1;
    var result = user32.SendInput(1, entry, 40);
    console.log('added ' + result);
}
function KeyTap(keyCode) {
    KeyToggle(keyCode, 'down');
    KeyToggle(keyCode, 'up');
}

function ConvertKeyCodeToScanCode(keyCode) {
    var keys = "**1234567890-=**qwertyuiop[]**asdfghjkl;'`*\\zxcvbnm,./".split("");
    return keys.indexOf(String.fromCharCode(keyCode).toLowerCase());
}

// KeyTap(keycode.codes.f11)

user32.keybd_event(0xb0, 0, 0, 0);
user32.keybd_event(0xb0, 0, 2, 0);

// let hWnd = user32.FindWindowExW(null, null, null, Buffer.from('无标题 - 记事本\0', 'ucs2'));

// if (hWnd) {
//     console.log('find');

//     user32.SetWindowTextW(hWnd, Buffer.from('你好啊\0', 'ucs2'));
// } else {
//     console.log('not fonud')
// }
