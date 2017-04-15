const BigNumber = require('bignumber.js');
/*
* https://en.wikipedia.org/wiki/Baby-step_giant-step
*/
module.exports = function (generator, order, element) {

  const n = new BigNumber(order);
  const a = new BigNumber(generator);
  let m = n.sqrt().ceil();

  let entryTable = {};

  for( let j = new BigNumber(0); j < m; j = j.plus(1)){
    let aToJ = a.toPower(j);
    entryTable[aToJ] = j;
  }

  const aToMinusM = a.toPower(m.neg());
  let y = new BigNumber(element);

  for(let i = new BigNumber(0); i < m; i = i.plus(1)){
    if(entryTable[y]){
      return (i.times(m).plus(entryTable[y]));
    }
    y = y.times(aToMinusM);
  }

  return null;
};