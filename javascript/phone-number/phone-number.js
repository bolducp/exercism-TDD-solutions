
var PhoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.number = function() {
	if (isValidNumber(this.phoneNumber)) {
		var sanitizedNumber = stripPunctuation(this.phoneNumber);
		if (sanitizedNumber.length === 10) {
			return String(sanitizedNumber);
		} else {
			return String(sanitizedNumber).slice(1);
		}
	}
	return "0000000000";
}

PhoneNumber.prototype.areaCode = function() {
	if (isValidNumber(this.phoneNumber)) {
		if (stripPunctuation(this.phoneNumber).length === 11) { 
			return this.phoneNumber.slice(1, 4);
		} else {
			return this.phoneNumber.slice(0, 3);
		}
	}
	return "000";
}

PhoneNumber.prototype.toString = function() {
	if (isValidNumber(this.phoneNumber)) {
		var formattedNumber = "";

		if (stripPunctuation(this.phoneNumber).length === 10) { 
			formattedNumber += ("(" + this.areaCode() + ") " + String(this.number()).slice(3, 6) + "-" + String(this.number()).slice(6, 10));
		} else {
			formattedNumber += ("(" + this.areaCode() + ") " + String(this.number()).slice(4, 7) + "-" + String(this.number()).slice(7, 11));
		}
		return formattedNumber;
	}
	return "Invalid Number";
}

function isValidNumber(phoneNumber) { 
	var strippedNumber = stripPunctuation(phoneNumber);
	if (strippedNumber.length === 10 || (strippedNumber.length === 11 && String(strippedNumber)[0] == 1)) {
		if (isNumeric(strippedNumber)) {
			return true;
		} 
	}
	return false;
}

function isNumeric(phoneNumber) {
	return /^[0-9]+$/.test(phoneNumber);
}

function stripPunctuation(phoneNumber) {
	var strippedNumber = phoneNumber.replace(/[\s-().]/g,"");
	return strippedNumber;
}

module.exports = PhoneNumber;
