class Bob{
  constructor(){}

  hey(input: string): string{
    input = input.trim();

    if (input === input.toUpperCase() && input.match(/[a-z]/i)) {
      return "Whoa, chill out!";
    } else if (input[input.length - 1] === "?") {
      return "Sure.";
    } else if (input.length === 0) {
      return "Fine. Be that way!";
    }
    return "Whatever.";
  }
}


module.exports = Bob;
