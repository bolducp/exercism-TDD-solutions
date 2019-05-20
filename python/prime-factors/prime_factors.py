def prime_factors(natural_number):
    factors = []

    while natural_number % 2 == 0:
        factors.append(2)
        natural_number = natural_number // 2

    potential_factor = 3
    while natural_number != 1:
        while natural_number % potential_factor == 0:
                factors.append(potential_factor)
                natural_number /= potential_factor
        potential_factor += 2
    return factors
