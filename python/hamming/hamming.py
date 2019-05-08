def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strands must be equal length")
    return len(['error' for a, b in zip(strand_a, strand_b) if a != b])
