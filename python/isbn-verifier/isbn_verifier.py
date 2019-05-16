import re

def verify(isbn):
    if not check_valid_form(isbn):
        return False
    return test_isbn_formula(isbn)

def check_valid_form(isbn):
    match = re.match(r"\d-\d{3}-\d{5}-(\d|X)", isbn) or re.match(r"\d{9}(\d|X)", isbn)
    return match != None

def test_isbn_formula(isbn):
    digits = [int(digit) for digit in re.findall(r"\d", isbn)]
    if len(digits) == 10:
        last_digit = digits[9]
    else:
        last_digit = 10

    result = (digits[0] * 10 + digits[1] * 9 + digits[2] * 8 + digits[3] * 7 + digits[4]
    * 6 + digits[5] * 5 + digits[6] * 4 + digits[7] * 3 + digits[8] * 2 + last_digit * 1) % 11

    return result == 0
