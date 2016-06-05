var Words = function(){};

Words.prototype.count = function(sentence){
  var sanitizedSentence = sentence.replace(/\s+/g,' ').trim();
  var wordsArray = sanitizedSentence.split(" ");
  var wordHistogram = {};

  for (i in wordsArray){
    var word = wordsArray[i].toLowerCase();

    if (typeof wordHistogram[word] === 'number'){
      wordHistogram[word] = wordHistogram[word] + 1;
    } else {
      wordHistogram[word] = 1;
    }
  }

  return wordHistogram;
};

module.exports = Words;
