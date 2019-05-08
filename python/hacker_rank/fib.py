def fibonacci_recursive(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    return fibonacci_recursive(n - 2) + fibonacci_recursive(n - 1)


def fibonacci(n):
    cache = { 0: 0, 1: 1}

    if n in cache.keys():
        return cache[n]
    else:
        fib = fibonacci(n - 2) + fibonacci(n - 1)
        cache[n] = fib
        return fib
