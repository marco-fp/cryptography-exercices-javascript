const BigNumber = require('bignumber.js');

const fermatFactor = (n) => {
  const num = new BigNumber(n);
  let a = num.sqrt().ceil();
  let b2 = a.times(a).minus(num);
  let b = b2.sqrt().ceil();

  while(!b.times(b).equals(b2)){
    a = a.plus(1);
    b2 = a.times(a).minus(num);
    b = b2.sqrt().ceil();
  }

  const factorA = a.plus(b);
  const factorB = a.minus(b);

  return {p: factorA, q: factorB};
};

module.exports = fermatFactor;
