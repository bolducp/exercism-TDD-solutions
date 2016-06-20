var Pangram = function(sentence){
  this.sentence = sentence;
  this.sanitizedLetters = sentence.trim().toLowerCase().replace(/[^a-zA-Z]/g,"");
  this.letterSet = new Set(this.sanitizedLetters);
};

Pangram.prototype.isPangram = function(){
  return this.letterSet.size === 26;
};

module.exports = Pangram;
