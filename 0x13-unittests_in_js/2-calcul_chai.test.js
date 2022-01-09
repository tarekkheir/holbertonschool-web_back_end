const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('SUM: 1.4 + 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('SUM: 1.7 + 4.5', () => {
      expect(calculateNumber('SUM', 1.7, 4.5)).to.equal(7);
    });
    it('SUM: -1.4 + 4.5', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
    it('SUM: 0 + 4.5', () => {
      expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
    });
    it('a not a number', () => {
      expect(() => calculateNumber('SUM', 'Hello', 3)).to.throw(TypeError);
    });
    it('b not a number', () => {
      expect(() => calculateNumber('SUM', 3, 'Hello')).to.throw(TypeError);
    });
  });

  describe('SUBTRACT', () => {
    it('SUBTRACT: 1 - 4', () => {
      expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
    });
    it('SUBTRACT: 1.4 - 4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4)).to.equal(-3)
    });
    it('SUBTRACT: 1.4 - 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    });
    it('SUBTRACT: 1.7 - 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('SUBTRACT: -1.4 - 4.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });
    it('SUBTRACT: 0 - 4.5', () => {
      expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
    });
    it('a not a number', () => {
      expect(() => calculateNumber('SUBTRACT', 'Hello', 3)).to.throw(TypeError);
    });
    it('b not a number', () => {
      expect(() => calculateNumber('SUBTRACT', 3, 'Hello')).to.throw(TypeError);
    });
  });

  describe('DIVIDE', () => {
    it('DIVIDE: 1.4 / 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('DIVIDE: 4 / 2', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('DIVIDE: 4 / 2.2', () => {
      expect(calculateNumber('DIVIDE', 4, 2.2)).to.equal(2);
    });
    it('DIVIDE: 3 / 2.7', () => {
      expect(calculateNumber('DIVIDE', 3, 2.7)).to.equal(1);
    });
    it('DIVIDE: 4.2 / 2', () => {
      expect(calculateNumber('DIVIDE', 4.2, 2)).to.equal(2);
    });
    it('DIVIDE: 2.7 / 3', () => {
      expect(calculateNumber('DIVIDE', 2.7, 3)).to.equal(1);
    });
    it('DIVIDE: -3.7 / 2', () => {
      expect(calculateNumber('DIVIDE', -3.7, 2)).to.equal(-2);
    });
    it('DIVIDE: 4 / -2.2', () => {
      expect(calculateNumber('DIVIDE', 4, -2.2)).to.equal(-2);
    });
    it('DIVIDE: -4 / -2.2', () => {
      expect(calculateNumber('DIVIDE', -4, -2.2)).to.equal(2);
    });
    it('a not a number', () => {
      expect(() => calculateNumber('DIVIDE', 'Hello', 3)).to.throw(TypeError);
    });
    it('b not a number', () => {
      expect(() => calculateNumber('DIVIDE', 3, 'Hello')).to.throw(TypeError);
    });
  });
});
