//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
   if (this.isYelling(message)) return "Whoa, chill out!";
   else if (this.isQuestion(message)) return "Sure.";
   else if (this.isSilence(message)) return "Fine. Be that way!";
   return "Whatever.";
  }

  isYelling = (input) => { return input === input.toUpperCase() && input.match(/[a-z]/i) };

  isQuestion = (input) => { return input.endsWith("?"); };

  isSilence = (input) => { return input.trim().length === 0; };
}


export default Bob;

