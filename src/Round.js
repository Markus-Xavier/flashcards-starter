class Round {
  constructor (currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[0];
    this.turns = 0;
  }
}

module.exports = Round;