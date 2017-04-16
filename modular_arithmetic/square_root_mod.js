const BigNumber = require('bignumber.js');
const jacobi = require('./jacobi');

/*
  INPUT: integer a, prime p where a/p equals 1
  OUTPUT: square root of a mod p.
*/
const sqrtMod = (intNum, prime) => {
  const a = new BigNumber(intNum);
  const p = new BigNumber(prime);

  if(p.modulo(4).equals(3)){

    const m = p.minus(3).dividedBy(4);
    return a.toPower(m.plus(1)).modulo(p);

  } else if(p.modulo(4).equals(1)){

    const b = lookForB(p);
    let i = m.times(2);
    let j = new BigNumber(0);

    while(i.modulo(2).equals(0)){
      i = i.dividedBy(2);
      j = j.dividedBy(2);
      if(a.toPower(i).times(b.toPower(j)).modulo(p).equals(p.minus(1))){
        j = j.plus(m.times(2)).modulo(p);
      }
    }

    const aResult = a.toPower(i.plus(1).dividedBy(2));
    const bResult = b.toPower(j.dividedBy(2));
    return aResult.times(bResult).modulo(p);
  }

  return null;
}

const lookForB = (p) {
  for(let b = new BigNumber(0); b < p; b = b.plus(1)){
    if(jacobi(b, p).equals(-1)){
      return b;
    }
  }

  return null;
}

module.exports = sqrtMod;
