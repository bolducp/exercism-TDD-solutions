class Matrix(object):
    def __init__(self, matrix_string):
        self.matrix = self.parse_string(matrix_string)

    def row(self, index):
        return [int(num) for num in self.matrix[index - 1]]

    def column(self, index):
        return [int(row[index -1]) for row in self.matrix]

    def parse_string(self, matrix_string):
        rows = matrix_string.split("\n")
        return [row.split() for row in rows]
