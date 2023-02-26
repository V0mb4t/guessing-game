class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.lastGuess;
  }

  setRange(min, max) {
    this.min = min + 1;
    this.max = max;
  }

  guess() {
    this.lastGuess = Math.round(((this.max - this.min) / 2) + this.min);
    return this.lastGuess;
  }

  lower() {
    this.max = this.lastGuess - 1;
  }

  greater() {
    this.min = this.lastGuess + 1;
  }
}


module.exports = GuessingGame;
