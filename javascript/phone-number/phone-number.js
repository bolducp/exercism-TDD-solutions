var PhoneNumber = function(phoneNumber) {
    this.phoneNumber = sanitize(phoneNumber);
};

PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
};

PhoneNumber.prototype.areaCode = function() {
    return this.phoneNumber.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
    return "(" + this.areaCode() + ") " + this.number().slice(3, 6) + "-" + this.number().slice(6, 10);
};

function sanitize(phoneNumber) {
    if (isValid10DigitNumber(phoneNumber)) {
	        return stripFormatters(phoneNumber);
    } else if (isValid11DigitNumber(phoneNumber)) {
	        return stripFormatters(phoneNumber).slice(1);
    }
    return "0000000000";
}

function isValid10DigitNumber(phoneNumber) {
    var strippedNumber = stripFormatters(phoneNumber);
    return strippedNumber.length === 10 && isNumeric(strippedNumber);
}

function isValid11DigitNumber(phoneNumber) {
    var strippedNumber = stripFormatters(phoneNumber);
    return strippedNumber.length === 11 && strippedNumber[0] == 1 && isNumeric(strippedNumber);
}

function isNumeric(phoneNumber) {
    return /^[0-9]+$/.test(phoneNumber);
}

function stripFormatters(phoneNumber) {
    return phoneNumber.replace(/[\s-().]/g,"");
}

module.exports = PhoneNumber;
