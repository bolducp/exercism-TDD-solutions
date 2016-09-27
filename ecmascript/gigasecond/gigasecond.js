export default class Gigasecond {
  constructor(date) {
    this.initialDate = date;
  }

  date() {
    return new Date(this.initialDate.getTime() + 1000000000000);
  }
}