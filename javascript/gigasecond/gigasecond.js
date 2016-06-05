var Gigasecond = function(date) {
  this.initalizedDate = date;
};

Gigasecond.prototype.date = function(){
  var gigasecondAnniversary = addSeconds(this.initalizedDate, 1000000000);
  return gigasecondAnniversary;

  function addSeconds(date, seconds){
    var totalMilliseconds = seconds * 1000;
    return new Date(date.getTime() + totalMilliseconds);
  }
};

module.exports = Gigasecond;
