function calculateNumber(a, b) {
  const aprime = Math.round(a);
  const bprime = Math.round(b);

  if (isNaN(aprime) || isNaN(bprime)) {
    throw new TypeError('a and b must be numbers');
  }

  return (aprime + bprime);
}

module.exports = calculateNumber;
