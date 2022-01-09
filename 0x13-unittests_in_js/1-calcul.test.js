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
      assert.throws(() => calculateNumber('SUM', 'Hello', 3), TypeError);
    });
    it('b not a number', () => {
      assert.throws(() => calculateNumber('SUM', 3, 'Hello'), TypeError);
    });
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
