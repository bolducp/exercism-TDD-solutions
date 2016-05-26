var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function(input: number): boolean {
  if (this.year % 4 === 0 && this.year % 100 === 0 && this.year % 400 === 0) {
    return true;
  } else if (this.year % 4 === 0 && this.year % 100 === 0 ) {
    return false;
  } else if (this.year % 4 === 0) {
    return true;
  }
  return false;
};

module.exports = Year;
