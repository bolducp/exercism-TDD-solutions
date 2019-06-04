def collatz_steps(number):
    if number < 1:
        raise ValueError("Input must be a positive number")

    counter = 0

    while number > 1:
        if number % 2 == 0:
            number = number // 2
        else:
            number = (number * 3) + 1
        counter += 1

    return counter
