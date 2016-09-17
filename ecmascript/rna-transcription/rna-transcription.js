class Transcriptor {
    constructor() {}

    toRna(dnaStrand) {
        let dnaToRna = { 
            "G": "C", 
            "C": "G", 
            "T": "A", 
            "A": "U" 
        };
        
        return dnaStrand
                .split("")
                .map((nucleotide) => { return dnaToRna[nucleotide] })
                .join("");
    }
}

export default Transcriptor;
