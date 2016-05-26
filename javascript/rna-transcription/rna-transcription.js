var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(sequence){
    var sequenceArray = sequence.split("");
    return sequenceArray.map(getComplement).join("");

  function getComplement(nucleotide){
    var complementPairs = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
    return complementPairs[nucleotide];
  }
}

module.exports = DnaTranscriber;
