def to_rna(dna_strand):
    rna_chars = [dna_to_rna[char] for char in dna_strand]
    return "".join(rna_chars)

dna_to_rna = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
}
