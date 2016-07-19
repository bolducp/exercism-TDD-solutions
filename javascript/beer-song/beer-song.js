"use strict";

var BeerSong = function(){};

BeerSong.prototype.verse = function(verseNum){
  switch (verseNum) {
    case 0:
        return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    case 2:
        return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"
    default:
        return `${verseNum} bottles of beer on the wall, ${verseNum} bottles of beer.\nTake one down and pass it around, ${verseNum - 1} bottles of beer on the wall.\n`;
  }
};

BeerSong.prototype.sing = function(highBottle, lowBottle){
    lowBottle = lowBottle ? lowBottle: 0;
    var song = [];
    
    for (var i = highBottle; i >= lowBottle; i--) {
        song.push(this.verse(i));
    }
    return song.join("\n");
};

module.exports = BeerSong;