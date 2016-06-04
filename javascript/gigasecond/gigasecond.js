var Gigasecond = function(date) {
  this.initalizedDate = date;
};

Gigasecond.prototype.date = function(){
  var gigasecondAnniversary = new Date(this.initalizedDate.getTime() + 1000000000000);
  return gigasecondAnniversary;
};

module.exports = Gigasecond;
