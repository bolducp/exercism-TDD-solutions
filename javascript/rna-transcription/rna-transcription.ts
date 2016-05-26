
class DnaTranscriber {
    constructor(){}
    toRna(sequence: string): string {
      let sequenceArray: Array<string> = sequence.split("");
      return sequenceArray.map(this.getComplement).join("");
    }

    getComplement(nucleotide: string): string {
      let complementPairs = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
      };
      return complementPairs[nucleotide];
    }
}


module.exports = DnaTranscriber;
