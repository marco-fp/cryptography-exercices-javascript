const BigNumber = require('bignumber.js');
const modPow = require('./modPow');

/* https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test */

/*

 Input #1: n > 3, an odd integer to be tested for primality;
 Input #2: k, a parameter that determines the accuracy of the test
 Output: composite if n is composite, otherwise probably prime

 write n − 1 as 2r·d with d odd by factoring powers of 2 from n − 1
 WitnessLoop: repeat k times:
   pick a random integer a in the range [2, n − 2]
   x ← a^d mod n
   if x = 1 or x = n − 1 then
    continue WitnessLoop
   repeat r − 1 times:
     x ← x2 mod n
     if x = 1 then
      return composite
     if x = n − 1 then
      continue WitnessLoop
   return composite
 return probably prime

 */

/* Output: True if n is probably prime, false otherwise. */
module.exports = function(n, k) {
  if (n === 2 || n === 3)
    return true;
  if (n % 2 === 0 || n < 2)
    return false;

  // Write (n - 1) as 2^s * d
  let s = new BigNumber(0);
  let d = new BigNumber(n - 1);

  while (d.modulo(2).equals(0)) {
    d = d.dividedBy(2);
    s = s.plus(1);
  }

  bucle: do {
    // A base between 2 and n - 2
    let random = BigNumber.random();
    let a = new BigNumber(random.times(n-2).floor().plus(2));

    let x = modPow(a, d, n);

    if (x.equals(1) || x.equals(n - 1))
      continue;

    for (let i = s.minus(1); !i.equals(0); i = i.minus(1)) {
      x = x.times(x).modulo(n);
      if (x.equals(1))
        return false;
      if (x.equals(n - 1))
        continue bucle;
    }

    return false;
  } while (--k);

  return true;
};