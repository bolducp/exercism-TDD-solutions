class Pangram {
  private sanitizedLetters: Array<string>;

  constructor(private sentence:string){
    this.sanitizedLetters = sentence.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("");
  }

  isPangram():boolean{
    var alphabet:Array<string> = "abcdefghijklmnopqrstuvwxyz".split("");

    for (var i in alphabet){
      if (this.sanitizedLetters.indexOf(alphabet[i]) === -1){
        return false;
      }
    }
    return true;
  }
}

module.exports = Pangram;
