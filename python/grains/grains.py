def on_square(integer_number):
    check_valid_input(integer_number)
    return 2**(integer_number - 1)

def total_after(integer_number):
    check_valid_input(integer_number)
    return 2**integer_number - 1

def check_valid_input(integer_number):
    if integer_number < 1 or integer_number > 64:
        raise ValueError("integer_number must be between 1 and 64")
