class Round {
  constructor (currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[0];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentDeck.cards[this.turns];
  }

  setNextCard() {
    this.currentCard = this.currentDeck.cards[this.turns];
  }

  takeTurn() {
    this.turns++;
    this.setNextCard();
  }
}

module.exports = Round;