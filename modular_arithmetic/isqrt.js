const BigNumber = require('bignumber.js');

const isqrt = (n) => {
  const number = new BigNumber(n);
  let x = new BigNumber(n);
  let y = new BigNumber(n).plus(1).dividedToIntegerBy(2);
  while(y < x){
    x = y;
    y = (x.plus(number).dividedToIntegerBy(x)).dividedToIntegerBy(2);
  }

  return x;
};