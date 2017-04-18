const BigNumber = require('bignumber.js');
/* 
 * https://en.wikipedia.org/wiki/Baby-step_giant-step
*/

// OUTPUT: Log base n, of a, modulus b

module.exports = function (modulus, base, number) {

  const n = new BigNumber(modulus);
  const a = new BigNumber(base);
  const elem = new BigNumber(number);
  let m = n.sqrt().ceil();

  let entryTable = {elem: 0};

  for( let j = new BigNumber(0); j < m; j = j.plus(1)){
    let aToJ = elem.times(a).modulo(n);
    entryTable[aToJ] = j;
  }

  const aToMinusM = a.toPower(m).modulo(n);
  let y = aToMinusM;

  for(let i = new BigNumber(0); i < m; i = i.plus(1)){
    if(entryTable[y]){
      return (i.times(m).minus(entryTable[y]));
    }
    y = y.times(aToMinusM).modulo(n);
  }

  return null;
};
