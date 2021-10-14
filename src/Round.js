const Turn = require('./Turn');

class Round {
  constructor (currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentDeck.cards[this.turns];
  }

  setNextCard() {
    this.currentCard = this.currentDeck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.setNextCard();

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const earnedPoints = this.currentDeck.countCards() - this.incorrectGuesses.length;
    const percentageNumber = Math.floor(earnedPoints / this.currentDeck.countCards() * 100);
    return percentageNumber;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;