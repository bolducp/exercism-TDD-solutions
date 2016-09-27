//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
"use strict";
var Bob = (function () {
    function Bob() {
        this.isYelling = function (input) {
            return input === input.toUpperCase() && input.match(/[a-z]/i);
        };
        this.isQuestion = function (input) {
            return input.endsWith("?");
        };
        this.isSilence = function (input) {
            return input.trim().length === 0;
        };
    }
    Bob.prototype.hey = function (message) {
        if (this.isYelling(message)) return "Whoa, chill out!";else if (this.isQuestion(message)) return "Sure.";else if (this.isSilence(message)) return "Fine. Be that way!";
        return "Whatever.";
    };
    return Bob;
})();
exports.__esModule = true;
exports["default"] = Bob;