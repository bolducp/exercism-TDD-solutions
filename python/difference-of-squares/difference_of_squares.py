def square_of_sum(count):
    count_sum = sum([x for x in range(1, count + 1)])
    return count_sum**2

def sum_of_squares(count):
    return sum([x**2 for x in range(1, count + 1)])

def difference(count):
    return square_of_sum(count) - sum_of_squares(count)
