def saddle_points(matrix):
    saddles = []

    for row in matrix:
        if len(row) != len(matrix[0]):
            raise ValueError("Invalid Matrix")

    for row_i, row in enumerate(matrix):
        for index, point in enumerate(row):
            if max(row) == point:
                if min(col for row in matrix for i, col in enumerate(row) if i == index) == point:
                    saddles.append((row_i + 1, index + 1))

    return set(saddles)
