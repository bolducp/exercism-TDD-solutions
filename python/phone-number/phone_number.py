import re

class Phone(object):
    def __init__(self, phone_number):
        self.number = self.parse_number_string(phone_number)
        self.area_code = self.number[0:3]

    def pretty(self):
        return f'({self.area_code}) {self.number[3:6]}-{self.number[6:]}'

    def parse_number_string(self, phone_number):
        self.check_correct_number_of_digits(phone_number)

        parsed_number =  re.sub(r'\s+|\.|\-|\+|\(|\)', '', phone_number)
        number_length = len(parsed_number)

        if number_length is not 10 and number_length is not 11:
            raise ValueError('Incorrect phone number format received.')

        if number_length is 11:
            if parsed_number[0] is "1":
                parsed_number = parsed_number[1:]
                number_length = 10
            else:
                raise ValueError('Only country code of 1 is allowed.')

        self.check_area_and_exchange_codes(parsed_number)

        return parsed_number


    def check_correct_number_of_digits(self, phone_number):
        digits_count = len(re.sub(r"\D", "", phone_number))

        if digits_count is not 10 and digits_count is not 11:
            raise ValueError('Incorrect phone number format received.')


    def check_area_and_exchange_codes(self, parsed_number):
        if self.is_0_or_1(parsed_number[0]) or self.is_0_or_1(parsed_number[3]):
            raise ValueError('Area code and exchange code cannot start with 0 or 1.')


    def is_0_or_1(self, digit):
        return digit is "0" or digit is "1"
