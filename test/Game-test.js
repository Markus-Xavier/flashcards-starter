const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let cardData;
  let card1;
  let card2;
  let card3;
  let deck;
  let game;
  let round;

  beforeEach(function() {
    cardData = [{
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'], 
      correctAnswer: 'sea otter'}
      , {
      id: 14, 
      question: 'What organ is Khalid missing?', 
      answers: ['spleen', 'appendix', 'gallbladder'], 
      correctAnswer: 'gallbladder'}
      , {
      id: 12, 
      question: 'What is Travis\'s middle name?', 
      answers: ['Lex', 'William', 'Fitzgerald'], 
      correctAnswer: 'Fitzgerald'}];

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    game = new Game();
    round = new Round(deck);
  });



  it.skip('should create cards', function() {
    assert.deepEqual(game.createCards(cardData), [card1, card2, card3]);
  });

  it.skip('should create a deck', function() {
    assert.deepEqual(game.createDeck(game.createCards(cardData)), deck);
  });

  it.skip('should keep track of the current round', function() {
    game.setCurrentRound(game.createDeck(game.createCards(cardData)));
    assert.deepEqual(game.currentRound, round);
  });
});