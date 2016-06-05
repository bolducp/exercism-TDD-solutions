var Words = function(){};

Words.prototype.count = function(sentence){
  var wordsArray = sentence.trim().split(/\s+/g);
  var wordHistogram = {};

  for (i in wordsArray){
    var word = wordsArray[i].toLowerCase();

    if (wordHistogram.hasOwnProperty(word)){
      wordHistogram[word]++;
    } else {
      wordHistogram[word] = 1;
    }
  }

  return wordHistogram;
};

module.exports = Words;
