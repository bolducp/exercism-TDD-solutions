"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isLeapYear(year) {
    if (year % 400 === 0) return true;else if (year % 100 === 0) return false;
    return year % 4 === 0;
}

exports["default"] = isLeapYear;
module.exports = exports["default"];