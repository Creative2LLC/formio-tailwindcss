"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (iconset, name, spinning) {
    if (iconset === 'fa') {
        switch (name) {
            case 'save':
                name = 'download';
                break;
            case 'zoom-in':
                name = 'search-plus';
                break;
            case 'zoom-out':
                name = 'search-minus';
                break;
            case 'question-sign':
                name = 'question-circle';
                break;
            case 'remove-circle':
                name = 'times-circle-o';
                break;
            case 'new-window':
                name = 'window-restore';
                break;
            case 'move':
                name = 'arrows';
                break;
        }
    }
    return spinning ? "".concat(iconset, " ").concat(iconset, "-").concat(name, " ").concat(iconset, "-spin") : "".concat(iconset, " ").concat(iconset, "-").concat(name);
});
