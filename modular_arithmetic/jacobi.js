const BigNumber = require('bignumber.js');

const jacobi = (a, n) => {
  if(a === 1 || a === 0)
    return new BigNumber(a);

  const primeN = new BigNumber(n);

  let e = new BigNumber(0);
  let a1 = new BigNumber(a);

  while(a.modulo(2).equals(0)){
    e = e.plus(1);
    a1 = a1.dividedBy(2);
  }

  const eIsEven = e.modulo(2).equals(0);

  let s;
  if(eIsEven || primeN.modulo(8).equals(1) || primeN.modulo(8).equals(7)){
    s = new BigNumber(1);
  } else if(primeN.modulo(8).equals(3) || primeN.modulo(8).equals(5)){
    s = new BigNumber(-1);
  }

  if(primeN.modulo(4).equals(3) && a1.modulo(4).equals(3)){
    s = s.neg();
  }

  const n1 = primeN.modulo(a1);

  if(a1.equals(1)){
    return s;
  } else{
    return(s.times(jacobi(n1, a1)));
  }

};

module.exports = jacobi;
