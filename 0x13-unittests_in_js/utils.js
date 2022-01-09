const Utils = {
  calculateNumber(type, a, b) {
    const aprime = Math.round(a);
    const bprime = Math.round(b);

    if (typeof type !== 'string') {
      throw new TypeError('type must be a string');
    }

    if (isNaN(aprime) || isNaN(bprime)) {
      throw new TypeError('a and b must be numbers');
    }

    if (type === 'SUM') {
      return (aprime + bprime);
    } else if (type === 'SUBTRACT') {
      return (aprime - bprime);
    } else if (type === 'DIVIDE') {

      if (b === 0) {
        return ('Error');
      }
      return (aprime / bprime);
    } else {
      return ('Error')
    }
  }
}

module.exports = Utils;
