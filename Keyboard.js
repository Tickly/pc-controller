import user32 from './user32'

export default {
    press(keycode) {
        user32.keybd_event(keycode, 0, 0, 0);
        user32.keybd_event(keycode, 0, 2, 0);
    }
}