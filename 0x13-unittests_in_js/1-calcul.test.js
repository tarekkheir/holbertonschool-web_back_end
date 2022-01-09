const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('SUM: 1.4 + 4.5', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('SUM: 1.7 + 4.5', () => {
      assert.equal(calculateNumber('SUM', 1.7, 4.5), 7);
    });
    it('SUM: -1.4 + 4.5', () => {
      assert.equal(calculateNumber('SUM', -1.4, 4.5), 4);
    });
    it('SUM: 0 + 4.5', () => {
      assert.equal(calculateNumber('SUM', 0, 4.5), 5);
    });
    it('a not a number', () => {
      assert.throws(() => calculateNumber('SUM', 'Hello', 3), TypeError);
    });

    it('b not a number', () => {
      assert.throws(() => calculateNumber('SUM', 3, 'Hello'), TypeError);
    });
  });

  describe('SUBTRACT', () => {
    it('SUBTRACT: 1 - 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 4), -3)
    });
    it('SUBTRACT: 1.4 - 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4), -3)
    });
    it('SUBTRACT: 1.4 - 4.5', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });
    it('SUBTRACT: 1.7 - 4.5', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });
    it('SUBTRACT: -1.4 - 4.5', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.4, 4.5), -6)
    });
    it('SUBTRACT: 0 - 4.5', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 4.5), -5)
    });
    it('a not a number', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 'Hello', 3), TypeError);
    });
    it('b not a number', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 3, 'Hello'), TypeError);
    });
  });

  describe('DIVIDE', () => {
    it('DIVIDE: 4 / 2', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it('DIVIDE: 1.4 / 4.5', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('DIVIDE: 1.4 / 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('DIVIDE: 3.6 / 2', () => {
      assert.equal(calculateNumber('DIVIDE', 3.6, 2), 2);
    });
    it('DIVIDE: 3.2 / 2', () => {
      assert.equal(calculateNumber('DIVIDE', 3.2, 2), 1.5);
    });
    it('DIVIDE: -3.6 / 2', () => {
      assert.equal(calculateNumber('DIVIDE', -3.6, 2), -2);
    });
    it('DIVIDE: 3.6 / 1.7', () => {
      assert.equal(calculateNumber('DIVIDE', 3.6, 1.7), 2);
    });
    it('DIVIDE: 3.6 / 1.2', () => {
      assert.equal(calculateNumber('DIVIDE', 3.6, 1.2), 4);
    });
    it('DIVIDE: -3.6 / -2', () => {
      assert.equal(calculateNumber('DIVIDE', -3.6, -2), 2);
    });
    it('DIVIDE: -3.6 / -1.2', () => {
      assert.equal(calculateNumber('DIVIDE', -3.6, -1.2), 4);
    });
    it('DIVIDE: 0 / 2', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 2), 0);
    });
    it('DIVIDE: 3.6 / -2', () => {
      assert.equal(calculateNumber('DIVIDE', 3.6, -2), -2);
    });
    it('a not a number', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 'Hello', 3), TypeError);
    });
    it('b not a number', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 3, 'Hello'), TypeError);
    });
  });

});
