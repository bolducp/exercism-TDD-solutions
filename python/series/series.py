def slices(series, length):
    if length < 1 or length > len(series):
        raise ValueError("Input value error")
    return [series[i:i + length] for i in range(len(series) - length + 1)]
