def smallest_palindrome(max_factor, min_factor=0):
    return find_palindrome(max_factor, min_factor, find_largest=False)

def largest_palindrome(max_factor, min_factor=0):
    return find_palindrome(max_factor, min_factor)

def find_palindrome(max_factor, min_factor, find_largest=True):
    if min_factor > max_factor:
        raise ValueError("Max factor must be equal to or larger than min factor.")

    factors = {}
    for low in range(min_factor, max_factor + 1):
        for high in range (low, max_factor + 1):
            pair_product = low * high
            if is_palindrome(pair_product):
                if (pair_product) in factors:
                    factors[pair_product].append((low, high))
                else:
                    factors[pair_product] = [(low, high)]

    if not factors.keys():
        return (None, [])

    if find_largest:
        largest = max(factors.keys())
        return (largest, set(factors[largest]))

    smallest = min(factors.keys())
    return (smallest, set(factors[smallest]))


def is_palindrome(num):
    return str(num) == str(num)[::-1]
