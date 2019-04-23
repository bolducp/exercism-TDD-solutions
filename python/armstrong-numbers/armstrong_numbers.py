def is_armstrong(number):
    return number == calculate_armstrong_sum(str(number))

def calculate_armstrong_sum(number_string):
    num_digits = len(number_string)
    return sum([int(num)**num_digits for num in number_string])
