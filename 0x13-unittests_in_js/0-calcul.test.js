const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('calculate 1 + 3', () => {
    assert.equal(calculateNumber(1, 3), 4)
  });

  it('calculate 1 + 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5)
  });

  it('calculate 1.2 + 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5)
  });

  it('calculate 1.5 + 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });

  it('calculate 1.7 + 3.7', () => {
    assert.equal(calculateNumber(1.7, 3.7), 6)
  });

  it('calculate 0.9 + 3.7', () => {
    assert.equal(calculateNumber(0.9, 3.7), 5)
  });

  it('calculate 0.2 + 3.7', () => {
    assert.equal(calculateNumber(0.2, 3.7), 4)
  });

  it('calculate -1 + 3.7', () => {
    assert.equal(calculateNumber(-1, 3.7), 3)
  });

  it('calculate -1.2 + 3.7', () => {
    assert.equal(calculateNumber(-1.2, 3.7), 3)
  });

  it('calculate -1.5 + 3.7', () => {
    assert.equal(calculateNumber(-1.5, 3.7), 3)
  });

  it('calculate -1.7 + 3.7', () => {
    assert.equal(calculateNumber(-1.7, 3.7), 2)
  });

  it('a not a number', () => {
    assert.throws(() => calculateNumber('Hello', 3), TypeError);
  });

  it('b not a number', () => {
    assert.throws(() => calculateNumber(3, 'Hello'), TypeError);
  });
});
