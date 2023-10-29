class GuessingGame {
  constructor() {
    this.state = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    if (this.state === 0) {
      this.state = (this.max - this.min) / 2;
      return this.state;
    } else {
      return this.state;
    }
  }

  lower() {
    this.max = this.state;
    this.state = Math.ceil(this.max - (this.state - this.min) / 2);
  }

  greater() {
    this.min = this.state;
    this.state = Math.ceil(this.min + (this.max - this.state) / 2);
  }
}

module.exports = GuessingGame;
