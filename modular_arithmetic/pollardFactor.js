const BigNumber = require('bignumber.js');
const euclidean = require('./euclidean');

const pollardFactor = (n) => {
  let a = new BigNumber(2);
  let b = new BigNumber(2);
  let d;

  for(let i = 1; i < n; i++){
    a = a.times(a).plus(1).modulo(n);
    b = b.times(b).plus(1).modulo(n);
    b = b.times(b).plus(1).modulo(n);

    d = euclidean.simple(a.minus(b).toNumber(), n); // a - b is negative, ???

    if(1 < d && d < n){
      return d;
    }

    if(d.equals(n)){
      return null;
    }
  }

  return null;
};

module.exports = pollardFactor;
