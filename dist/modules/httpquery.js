'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.objToQuery = objToQuery;
exports.queryToObj = queryToObj;
function objToQuery() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
    return str.join('&');
}

function queryToObj() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var obj = {};
    str = str.slice(1).split('&');
    str.map(function (n) {
        n = n.split('=');
        obj[n[0]] = n[1];
    });
    return obj;
}