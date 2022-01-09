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
    // describe('DIVIDE', () => {
    //   it('DIVIDE: 1.4 / 0', () => {
    //     assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    //   });
    //   it('DIVIDE: 4 / 2', () => {
    //     assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    //   });
    //   it('DIVIDE: 4 / 2.2', () => {
    //     assert.equal(calculateNumber('DIVIDE', 4, 2.2), 2);
    //   });
    //   it('DIVIDE: 3 / 2.7', () => {
    //     assert.equal(calculateNumber('DIVIDE', 3, 2.7), 1);
    //   });
    //   it('DIVIDE: 4.2 / 2', () => {
    //     assert.equal(calculateNumber('DIVIDE', 4.2, 2), 2);
    //   });
    //   it('DIVIDE: 2.7 / 3', () => {
    //     assert.equal(calculateNumber('DIVIDE', 2.7, 3), 1);
    //   });
    //   it('DIVIDE: -3.7 / 2', () => {
    //     assert.equal(calculateNumber('DIVIDE', -3.7, 2), -2);
    //   });
    //   it('DIVIDE: 4 / -2.2', () => {
    //     assert.equal(calculateNumber('DIVIDE', 4, -2.2), -2);
    //   });
    //   it('DIVIDE: -4 / -2.2', () => {
    //     assert.equal(calculateNumber('DIVIDE', -4, -2.2), 2);
    //   });
    //   it('a not a number', () => {
    //     assert.throws(() => calculateNumber('DIVIDE', 'Hello', 3), TypeError);
    //   });
    //   it('b not a number', () => {
    //     assert.throws(() => calculateNumber('DIVIDE', 3, 'Hello'), TypeError);
    //   });
    // });
  });
});
