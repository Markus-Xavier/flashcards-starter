const chai = require('chai');
const assert = chai.assert;

const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round; 

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    assert.isFunction(Round);
  });

  it('should be an instance of Round', function() {
    assert.instanceOf(round, Round);
  });

  it('should store the current deck', function() {
    assert.deepEqual(round.currentDeck, deck);
  });

  it('should keep track of the current card which should be the first card by default', function() {
    assert.deepEqual(round.currentCard, card1);
  });

  it('should keep track of the number of turns which should start at 0', function() {
    assert.equal(round.turns, 0);
  });

  it('should return the current card', function() {
    assert.deepEqual(round.returnCurrentCard(), card1);
  });

  it('should update the turn count', function() {
    round.takeTurn();
    assert.equal(round.turns, 1);    
    round.takeTurn();
    assert.equal(round.turns, 2);
  });

  it('should set the current card to the next card in the deck', function() {
    round.takeTurn();
    assert.deepEqual(round.currentCard, card2);
    round.takeTurn();
    assert.deepEqual(round.currentCard, card3);
  });

  it('should store the cards id if the guess is incorrect', function() {
    round.takeTurn('pug');
    assert.deepEqual(round.incorrectGuesses, [1]);
  });

  it('should not store the cards id if the user guesses correct', function() {
    round.takeTurn('sea otter');
    assert.deepEqual(round.incorrectGuesses, []);
  });

  it('should provide feedback from the turn if the user guesses correctly', function() {
    assert.equal(round.takeTurn('sea otter'), 'correct!');
  });

  it('should provide feedback from the turn if the user guesses incorrectly', function() {
    assert.equal(round.takeTurn('pug'), 'incorrect!');
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');
    assert.equal(round.calculatePercentCorrect(), 66);
  });
});