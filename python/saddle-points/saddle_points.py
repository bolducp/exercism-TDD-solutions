import numpy as np
from itertools import product

def saddle_points(matrix):
    saddles = []
    matrix = np.array(matrix)

    if len({len(row) for row in matrix}) > 1:
        raise ValueError("Invalid Matrix")

    for row, col in product(*[range(i) for i in matrix.shape]):
        if max(matrix[row]) == min(matrix[:, col]):
            saddles.append((row + 1, col + 1))

    return set(saddles)
