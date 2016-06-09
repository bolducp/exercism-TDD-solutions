var Pangram = function(sentence){
  this.sentence = sentence;
  this.sanitizedLetters = sentence.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("");
};

Pangram.prototype.isPangram = function(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (var i in alphabet){
    if (this.sanitizedLetters.indexOf(alphabet[i]) === -1){
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
