var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function(possibleMatches) {
    if (!(possibleMatches instanceof Array)) {
        var possibleMatches = Array.prototype.slice.call(arguments);
    }
    return possibleMatches.filter((possibleMatch) => isAnagram(this.word, possibleMatch));
};

function isAnagram(firstWord, secondWord) {
    if (firstWord.toLowerCase() === secondWord.toLowerCase()) return false;

    var firstSortedLetters = firstWord.toLowerCase().split("").sort().join("");
    var secondSortedLetters = secondWord.toLowerCase().split("").sort().join("");

    return firstSortedLetters === secondSortedLetters;
}

module.exports = Anagram;
