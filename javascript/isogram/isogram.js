var Isogram = function(word){
  this.word = word;
};

Isogram.prototype.isIsogram = function(){
  var letterArray = this.word.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("");
  var letterHistogram = {};

  for (var i in letterArray){
    var letter = letterArray[i];

    if (letterHistogram.hasOwnProperty(letter)){
      return false;
    } else {
      letterHistogram[letter] = 1;
    }
  }
  return true;
};

module.exports = Isogram;
