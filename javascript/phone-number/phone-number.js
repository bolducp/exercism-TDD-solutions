var PhoneNumber = function(phoneNumber) {
	this.phoneNumber = String(phoneNumber);
};

PhoneNumber.prototype.number = function() {
	if (isValidNumber(this.phoneNumber)) {
		var sanitizedNumber = stripFormatters(this.phoneNumber);
		if (sanitizedNumber.length === 10) {
			return sanitizedNumber;
		} else {
			return sanitizedNumber.slice(1);
		}
	}
	return "0000000000";
}

PhoneNumber.prototype.areaCode = function() {
	if (isValidNumber(this.phoneNumber)) {
		if (stripFormatters(this.phoneNumber).length === 11) { 
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

		if (stripFormatters(this.phoneNumber).length === 10) { 
			formattedNumber += ("(" + this.areaCode() + ") " + this.number().slice(3, 6) + "-" + this.number().slice(6, 10));
		} else {
			formattedNumber += ("(" + this.areaCode() + ") " + this.number().slice(4, 7) + "-" + this.number().slice(7, 11));
		}
		return formattedNumber;
	}
	return "Invalid Number";
}

function isValidNumber(phoneNumber) { 
	var strippedNumber = stripFormatters(phoneNumber);

	if (strippedNumber.length === 10 || (strippedNumber.length === 11 && strippedNumber[0] == 1)) {
		if (isNumeric(strippedNumber)) {
			return true;
		} 
	}
	return false;
}

function isNumeric(phoneNumber) {
	return /^[0-9]+$/.test(phoneNumber);
}

function stripFormatters(phoneNumber) {
	return phoneNumber.replace(/[\s-().]/g,"");
}

module.exports = PhoneNumber;