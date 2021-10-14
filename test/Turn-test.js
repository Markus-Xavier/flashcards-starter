const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
  let turn2;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
    turn2 = new Turn('sea otter', card);
  });

  it('should be a function', function() {
    assert.isFunction(Turn);
  });

  it('should be an instance of Turn', function() {
    assert.instanceOf(turn, Turn);
  });

  it('should store the users guess', function() {
    assert.equal(turn.userGuess, 'pug');
    assert.equal(turn2.userGuess, 'sea otter');
  });

  it('should store the card being played', function() {
    assert.deepEqual(turn.currentCard, card);
  });

  it('should return the users guess', function() {
    assert.equal(turn.returnGuess(), 'pug');
    assert.equal(turn2.returnGuess(), 'sea otter');
  });

  it('should return the card being played', function() {
    assert.equal(turn.returnCard(), card);
  });

  it('should return if the users guess matches the correct answer', function() {
    assert.equal(turn2.evaluateGuess(), true);
  });

  it('should return if the users guess does not match the correct answer', function() {
    assert.equal(turn.evaluateGuess(), false);
  });

  it('should return the string correct if the guess matches the correct answer', function() {
    assert.equal(turn2.giveFeedback(), 'correct!');
  });

  it('should return the string incorrect if the guess does not match the correct answer', function() {
    assert.equal(turn.giveFeedback(), 'incorrect!');
  });
});