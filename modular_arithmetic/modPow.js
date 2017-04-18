const BigNumber = require('bignumber.js');

/*
 * From Handbook of Applied Cryptography, Algorithm 2.143
 ** Recursive solution.
 */

const modPow = function(base, exp, mod){

  if(exp < 0){
    throw new Error("ModPow: Wrong arguments.");
  }

  if(exp === 1) return new BigNumber(base);

  let b = new BigNumber(base).modulo(mod);
  let e = new BigNumber(exp).modulo(mod);
  let result = new BigNumber(1);
  let binaryExp = revertString(e.toString(2));

  if(binaryExp[0] === '1') result = b;

  for(let i = 1; i < binaryExp.length; i++){
    b = b.times(b).modulo(mod);
    if(binaryExp[i] === '1'){
      result = b.times(result).modulo(mod);
    }
  }

  return result;
};

function revertString(str){
  return str.split("").reverse().join("");
}

module.exports = modPow;