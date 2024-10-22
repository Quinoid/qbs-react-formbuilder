"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(fn, delay) {
    let timerId = null;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map