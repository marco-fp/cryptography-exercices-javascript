
const modA = {
  /*
  * From Handbook of Applied Cryptography, Algorithm 2.104
  *
  * Iterative solution.
  */
  EuclideanAlgorithm: function(param1,param2){
    if(param1 <= 0 || param2 <= 0){
      throw new Error("euclidean_algorithm: Both parameters must be non negative integers.");
    }

    if(param1 < param2){
      throw new Error("euclidean_algorithm: Parameters should be a >= b.");
    }

    let a = param1;
    let b = param2;
    let r;

    while(b != 0){
      r = a % b;
      a = b;
      b = r;
    }


    return a;
  },


  /*
  * From Handbook of Applied Cryptography, Algorithm 2.107
  ** Iterative solution.
  */
  ExtendedEuclideanAlgorithm: function(param1, param2){
    if(param1 <= 0 || param2 <= 0){
      throw new Error("euclidean_algorithm: Both parameters must be non negative integers.");
    }

    if(param1 < param2){
      throw new Error("euclidean_algorithm: Parameters should be a >= b.");
    }

    if(param2 === 0){
      return {d: param1, x: 1, y: 0};
    }

    let a = param1;
    let b = param2;
    let q;
    let x;
    let y;

    let x1 = 0;
    let x2 = 1;
    let y1 = 1;
    let y2 = 0;

    while(b != 0){
      q = Math.floor(a/b);
      r = a - q*b;
      x = x2 - q*x1;
      y = y2 - q*y1;

      a = b;
      b = r;
      x2 = x1;
      x1 = x;
      y2 = y1;
      y1 = y;
    }

    return {d: a, x: x2, y: y2}
  },


  /*
  * From Handbook of Applied Cryptography, Algorithm 2.143
  ** Recursive solution.
  */

  modPowSimple: function(base, exp, mod){
    let aux;
    if(exp === 1){
      return 1;
    } else if(exp % 2 === 0){
      aux = modA.modPowSimple(base, exp/2, mod) % mod;
      return (aux * aux) % mod; // May cause overflow...(?) (Re-implement efficiently!)
    } else {
      return (base * modA.modPowSimple(base, exp - 1, mod)) % mod;
    }
  },

  modPowEfficient: function(base, exp, mod){
    let aux;
    if(exp === 1){
      return 1;
    } else if(exp % 2 === 0){
      aux = modA.modPowEfficient(base, exp/2, mod) % mod;
      return modA.sqrmod(aux, mod);
    } else {
      return (base * modA.modPowEfficient(base, exp - 1, mod)) % mod;
    }
  },

  addmod: function(x, y, n) {
      // Precondition: x<n, y<n
      // If it will overflow, use alternative calculation
      if (x + y <= x)
        x = x - (n - y) % n;
      else
        x = (x + y) % n;
      return x;
  },

  sqrmod: function(a, n) {
      let b;
      let sum = 0;

      // Make sure original number is less than n
      a = a % n;

      // Use double and add algorithm to calculate a*a mod n
      for (b = a; b != 0; b >>= 1) {
          if (b & 1) {
              sum = modA.addmod(sum, a, n);
          }
          a = modA.addmod(a, a, n);
      }
      return sum;
  }
}

module.exports = modA;
