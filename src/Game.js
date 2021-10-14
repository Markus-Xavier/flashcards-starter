const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const card = require('./Card');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards(cardData) {
    return cardData.map(data => new Card(data.id, data.question, data.answers, data.correctAnswer));
  }

  createDeck(cards) {
    return new Deck(cards);
  }

  setCurrentRound(deck) {
    this.currentRound = new Round(deck);
  }

  start() {

  }
}

module.exports = Game;