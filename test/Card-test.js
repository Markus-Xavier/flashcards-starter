const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card');

describe('Card', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Card);
  });

  it.skip('should be an instance of Card', function() {
    const card = new Card();
    assert.instanceOf(card, Card);
  }); 

  it.skip('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    assert.equal(card.question, 'What allows you to define a set of related information using key-value pairs?');
  });  

  it.skip('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    assert.deepEqual(card.answers, ['object', 'array', 'function']);
  });  

  it.skip('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    assert.equal(card.correctAnswer, 'object');
  });
});