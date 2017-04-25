'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toCamelCase = toCamelCase;
function toCamelCase() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!str || typeof str != 'string') return '';
    return str.split(' ').map(function (i) {
        return i[0].toUpperCase() + i.substr(1).toLowerCase();
    }).join(' ');
}