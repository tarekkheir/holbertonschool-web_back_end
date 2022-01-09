const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Integers: 1 and 3', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('int and round down: 1 and 3.2', () => {
      assert.equal(calculateNumber('SUM', 1, 3.2), 4);
    });
    it('int and round up: 1 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('round down and int: 1.3 and 3', () => {
      assert.equal(calculateNumber('SUM', 1.3, 3), 4);
    });
    it('round up and int: 1.6 and 3', () => {
      assert.equal(calculateNumber('SUM', 1.6, 3), 5);
    });
    it('round down and round up: 1.2 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('round up and round up: 1.5 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('round up and round down: 1.7 and 3.2', () => {
      assert.equal(calculateNumber('SUM', 1.7, 3.2), 5);
    });
    it('neg round down and pos round down: -1.7 and 3.2', () => {
      assert.equal(calculateNumber('SUM', -1.7, 3.2), 1);
    });
    it('neg round up and pos round down: -1.2 and 3.2', () => {
      assert.equal(calculateNumber('SUM', -1.2, 3.2), 2);
    });
    it('a is NaN', () => {
      assert.throws(() => calculateNumber('SUM', 'Betty', 2), TypeError);
    });
    it('b is NaN', () => {
      assert.throws(() => calculateNumber('SUM', 1, 'Betty'), TypeError);
    });
    it('(MAX_SAFE_INTEGER + 1) + 1', () => {
      assert.equal(calculateNumber('SUM', Number.MAX_SAFE_INTEGER + 1, 1), Number.MAX_SAFE_INTEGER + 1);
    });
  });
  describe('SUBTRACT', () => {
    it('Pos ints pos result: 3 and 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    it('Pos ints neg result: 1 and 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('int and round down: 3 and 1.2', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1.2), 2);
    });
    it('int and round up: 5 and 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 5, 3.7), 1);
    });
    it('round down and int: 1.3 and 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.3, 3), -2);
    });
    it('round up and int: 5.6 and 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.6, 3), 3);
    });
    it('round down and round up: 1.2 and 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('round up and round up: 1.5 and 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('round up and round down: 1.7 and 3.2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.7, 3.2), -1);
    });
    it('neg round down and pos round down: -1.7 and 3.2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.7, 3.2), -5);
    });
    it('neg round up and pos round down: -1.2 and 3.2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.2, 3.2), -4);
    });
    it('a is NaN', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 'Betty', 2), TypeError);
    });
    it('b is NaN', () => {
      assert.throws(() => calculateNumber('SUBTRACT', 1, 'Betty'), TypeError);
    });
    it('(MIN_SAFE_INTEGER - 1) - 1', () => {
      assert.equal(calculateNumber('SUBTRACT', Number.MIN_SAFE_INTEGER - 1, 1), Number.MIN_SAFE_INTEGER - 1);
    });
  })
  describe('DIVIDE', () => {
    it('Divide by 0', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
    it('Pos ints pos result: 3 and 2', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
    });
    it('int and round down: 1 and 3.2', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 2.2), 2);
    });
    it('int and round up: 1 and 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 6, 2.7), 2);
    });
    it('round down and int: 6.3 and 2', () => {
      assert.equal(calculateNumber('DIVIDE', 6.3, 2), 3);
    });
    it('round up and int: 5.6 and 3', () => {
      assert.equal(calculateNumber('DIVIDE', 5.6, 3), 2);
    });
    it('neg dividend: -3.7 and 2', () => {
      assert.equal(calculateNumber('DIVIDE', -3.7, 2), -2);
    });
    it('neg divisor: 6 and -2.2', () => {
      assert.equal(calculateNumber('DIVIDE', 6, -2.2), -3);
    });
    it('neg dividend and divisor: -6 and -2.2', () => {
      assert.equal(calculateNumber('DIVIDE', -6, -2.2), 3);
    });
    it('a is NaN', () => {
      assert.throws(() => calculateNumber('DIVIDE', 'Betty', 2), TypeError);
    });
    it('b is NaN', () => {
      assert.throws(() => calculateNumber('DIVIDE', 1, 'Betty'), TypeError);
    });
  })
})
