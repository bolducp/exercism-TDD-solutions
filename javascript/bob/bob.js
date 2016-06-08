var Bob = function() {};

Bob.prototype.hey = function(input) {
  input = input.trim();

  if (isYelling(input)) {
    return "Whoa, chill out!";
  } else if (isQuestion(input)) {
     return "Sure.";
  } else if (isSilence(input)) {
    return "Fine. Be that way!";
  }
  return "Whatever.";


  function isYelling(input){
    return input === input.toUpperCase() && input.match(/[a-z]/i);
  }

  function isQuestion(input){
    return input[input.length - 1] === "?";
  }

  function isSilence(input){
    return input.length === 0;
  }
}

module.exports = Bob;
