var PhoneNumber = function(phoneNumber) {
	this.phoneNumber = String(phoneNumber);
};

PhoneNumber.prototype.number = function() {
	if (isValid10DigitNumber(this.phoneNumber)) {
		return stripFormatters(this.phoneNumber);
	} else if (isValid11DigitNumber(this.phoneNumber)) {
		return stripFormatters(this.phoneNumber).slice(1);
	}
	return "0000000000";
}

PhoneNumber.prototype.areaCode = function() {
	if (isValid11DigitNumber(this.phoneNumber)) {
		return this.phoneNumber.slice(1, 4);
	} else if (isValid10DigitNumber(this.phoneNumber)) {
		return this.phoneNumber.slice(0, 3);
	}
	return "000";
}

PhoneNumber.prototype.toString = function() {
	if (isValid10DigitNumber(this.phoneNumber)) {
		return "(" + this.areaCode() + ") " + this.number().slice(3, 6) + "-" + this.number().slice(6, 10);
	} else if (isValid11DigitNumber(this.phoneNumber)) {
		return "(" + this.areaCode() + ") " + this.number().slice(4, 7) + "-" + this.number().slice(7, 11);
	}
	return "Invalid Number";
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
