class Gigasecond{
  constructor(private initalizedDate: Date){}

  date(){
    var gigasecondAnniversary = this.addSeconds(this.initalizedDate, 1000000000);
    return gigasecondAnniversary;
  }

  addSeconds(date: Date, seconds: number): Date{
    var totalMilliseconds = seconds * 1000;
    return new Date(date.getTime() + totalMilliseconds);
  }
}

module.exports = Gigasecond;
