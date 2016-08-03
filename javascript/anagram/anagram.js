var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function(possibleMatches) {
    var matches = [];

    if (!(possibleMatches instanceof Array)) {
        var possibleMatches = Array.prototype.slice.call(arguments);
    }

    for (var i = 0; i < possibleMatches.length; i++) {
        if (isAnagram(this.word, possibleMatches[i])) {
            matches.push(possibleMatches[i]);
        }
    }
    
    return matches;
};

function isAnagram(firstWord, secondWord) {
    if (firstWord.toLowerCase() === secondWord.toLowerCase()) return false;

    var firstSortedLetters = firstWord.toLowerCase().split("").sort().join("");
    var secondSortedLetters = secondWord.toLowerCase().split("").sort().join("");

    return firstSortedLetters === secondSortedLetters;
}

module.exports = Anagram;
