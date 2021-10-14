const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;

beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    assert.isFunction(Deck);
  });

  it('should be an instance of deck', function() {
    assert.instanceOf(deck, Deck);
  });

  it('should store an array of cards', function() {
    assert.deepEqual(deck.cards, [card1, card2, card3]);
  });

  it('should count how many cards it has', function() {
    assert.equal(deck.countCards(), 3);
  });
});