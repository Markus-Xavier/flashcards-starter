class Round {
  constructor (currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[0];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentDeck.cards[this.turns];
  }

  takeTurn() {
    this.turns++;
  }
}

module.exports = Round;