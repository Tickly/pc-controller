import { DTypes as W } from 'win32-def'
import ffi from 'ffi'

let user32 = ffi.Library('user32', {
    // FindWindowExW: [W.HWND, [W.HWND, W.HWND, W.LPCTSTR, W.LPCTSTR]],
    // SetWindowTextW: [W.BOOL, [W.HWND, W.LPCTSTR]],
    // SendInput: [W.UINT, [W.UINT, LPINPUT, W.INT]],
    keybd_event: ['void', [W.BYTE, W.BYTE, W.DWORD, W.ULONG_PTR]],
})

export default user32