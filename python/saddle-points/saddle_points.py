import numpy as np
from itertools import product

def saddle_points(matrix):
    saddles = []
    matrix = np.array(matrix)

    if len({len(row) for row in matrix}) > 1:
        raise ValueError("Invalid Matrix")
    if not matrix.size:
        return set()

    for row, col in product(range(matrix.shape[0]), range(matrix.shape[1])):
        if max(matrix[row]) == min(matrix[:, col]):
            saddles.append((row + 1, col + 1))

    return set(saddles)
