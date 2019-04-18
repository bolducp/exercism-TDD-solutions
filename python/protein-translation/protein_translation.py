def proteins(strand):
    protein_list = chunk_strand(strand)
    split_proteins = [codon_to_proteins.get(protein) for protein in protein_list]

    if None in split_proteins:
        return split_proteins[0 : split_proteins.index(None)]
    return split_proteins


def chunk_strand(strand):
    return list(strand[0+i : 3+i] for i in range(0, len(strand), 3))

codon_to_proteins = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan"
}
