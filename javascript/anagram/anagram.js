var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function(possibleMatches) {
    if (!(possibleMatches instanceof Array)) {
        var possibleMatches = Array.prototype.slice.call(arguments);
    }
    return possibleMatches.filter((possibility) => isAnagram(this.word, possibility));
};

function isAnagram(firstWord, secondWord) {
    if (firstWord.toLowerCase() === secondWord.toLowerCase()) return false;

    var firstWordSorted = firstWord.toLowerCase().split("").sort().join("");
    var secondWordSorted = secondWord.toLowerCase().split("").sort().join("");

    return firstWordSorted === secondWordSorted;
}

module.exports = Anagram;
