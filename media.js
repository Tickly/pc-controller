import os from 'os'

let keyboard;

switch (os.platform()) {
    case 'win32':
        keyboard = require('./Keyboard.win').default;
        break;
    case 'darwin':
        keyboard = require('./keyboard.os').default;
        break;
    default:
        break;
}



export default {
    volume_mute() {
        keyboard.press(173)
    },
    volume_down() {
        keyboard.press(174)
    },
    volume_up() {
        keyboard.press(175)
    },
    next() {
        keyboard.press(176)
    },
    prev() {
        keyboard.press(177)
    },
    stop() {
        keyboard.press(178)
    },
    play_pause() {
        keyboard.press(179)
    },
}