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
    next(ctx) {
        keyboard.press(176);
        ctx.body = null;
    },
    prev(ctx) {
        keyboard.press(177)
        ctx.body = null;
    }
}