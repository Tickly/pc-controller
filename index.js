import ffi from 'ffi'
import Struct from 'ref-struct'
import { DModel as M, DTypes as W, FModel as FM } from 'win32-def'
import keycode from 'keycode'





const LPINPUT = Struct({
    type: W.DWORD,
    wVK: W.WORD,
    dwFlags: W.DWORD,
    wScan: W.WORD,
    '???': 'int',
    time: 'int',
    dwExtraInfo: W.ULONG_PTR,
})

let user32 = ffi.Library('user32', {
    FindWindowExW: [W.HWND, [W.HWND, W.HWND, W.LPCTSTR, W.LPCTSTR]],
    SetWindowTextW: [W.BOOL, [W.HWND, W.LPCTSTR]],
    SendInput: [W.UINT, [W.UINT, LPINPUT, W.INT]],
    keybd_event: ['void', [W.BYTE, W.BYTE, W.DWORD, W.ULONG_PTR]],
})

function KeyToggle(keyCode, type) {
    let entry = new LPINPUT();
    entry.type = 1;
    entry.wVK = 0;
    entry.time = 0;
    entry.dwExtraInfo = 0;
    entry.wScan = ConvertKeyCodeToScanCode(keyCode);
    entry.dwFlags = type == 'down' ? 8 : 8 | 1;
    let result = user32.SendInput(1, entry, 40);
    console.log(`added ${result}`)
}
function KeyTap(keyCode) {
    KeyToggle(keyCode, 'down');
    KeyToggle(keyCode, 'up');
}

function ConvertKeyCodeToScanCode(keyCode) {
    let keys = "**1234567890-=**qwertyuiop[]**asdfghjkl;'`*\\zxcvbnm,./".split("");
    return keys.indexOf(String.fromCharCode(keyCode).toLowerCase());
}

// KeyTap(keycode.codes.f11)

user32.keybd_event(0xb0,0,0,0);
user32.keybd_event(0xb0,0,2,0);

// let hWnd = user32.FindWindowExW(null, null, null, Buffer.from('无标题 - 记事本\0', 'ucs2'));

// if (hWnd) {
//     console.log('find');

//     user32.SetWindowTextW(hWnd, Buffer.from('你好啊\0', 'ucs2'));
// } else {
//     console.log('not fonud')
// }