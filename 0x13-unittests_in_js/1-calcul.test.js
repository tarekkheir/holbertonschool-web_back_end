const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('calculate 1 + 3', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4)
    });
    it('calculate 1 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5)
    });
    it('calculate 1.2 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5)
    });
    it('calculate 1.5 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6)
    });
    it('calculate 1.7 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.7, 3.7), 6)
    });
    it('calculate 0.9 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 0.9, 3.7), 5)
    });
    it('calculate 0.2 + 3.7', () => {
      assert.equal(calculateNumber('SUM', 0.2, 3.7), 4)
    });
    it('calculate -1 + 3.7', () => {
      assert.equal(calculateNumber('SUM', -1, 3.7), 3)
    });
    it('calculate -1.2 + 3.7', () => {
      assert.equal(calculateNumber('SUM', -1.2, 3.7), 3)
    });
    it('calculate -1.5 + 3.7', () => {
      assert.equal(calculateNumber('SUM', -1.5, 3.7), 3)
    });
    it('calculate -1.7 + 3.7', () => {
      assert.equal(calculateNumber('SUM', -1.7, 3.7), 2)
    });
    it('a not a number', () => {
      assert.throws(() => calculateNumber('SUM', Hello', 3), TypeError);
    });
    it('b not a number', () => {
      assert.throws(() => calculateNumber('SUM', 3, 'Hello'), TypeError);
    });
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
  it('DIVIDE: 1.4 / 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('DIVIDE: 4 / 2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('DIVIDE: 4 / 2.2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2.2), 2);
  });
  it('DIVIDE: 3 / 2.7', () => {
    assert.equal(calculateNumber('DIVIDE', 3, 2.7), 1);
  });
  it('DIVIDE: 4.2 / 2', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 2), 2);
  });
  it('DIVIDE: 2.7 / 3', () => {
    assert.equal(calculateNumber('DIVIDE', 2.7, 3), 1);
  });
  it('DIVIDE: -3.7 / 2', () => {
    assert.equal(calculateNumber('DIVIDE', -3.7, 2), -2);
  });
  it('DIVIDE: 4 / -2.2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, -2.2), -2);
  });
  it('DIVIDE: -4 / -2.2', () => {
    assert.equal(calculateNumber('DIVIDE', -4, -2.2), 2);
  });
  it('a not a number', () => {
    assert.throws(() => calculateNumber('DIVIDE', 'Hello', 3), TypeError);
  });
  it('b not a number', () => {
    assert.throws(() => calculateNumber('DIVIDE', 3, 'Hello'), TypeError);
  });
});
