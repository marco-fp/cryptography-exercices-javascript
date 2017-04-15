const BigNumber = require('bignumber.js');

const euclideanAlgs = {
  /*
   * From Handbook of Applied Cryptography, Algorithm 2.104
   *
   * Iterative solution.
   */
  simple: function(param1,param2){
    if(param1 <= 0 || param2 <= 0){
      throw new Error("euclidean_algorithm: Both parameters must be non negative integers.");
    }

    if(param1 < param2){
      throw new Error("euclidean_algorithm: Parameters should be a >= b.");
    }

    let a = new BigNumber(param1);
    let b = new BigNumber(param2);
    let r;

    while(!b.equals(0)){
      r = a.modulo(b);
      a = b;
      b = r;
    }


    return a;
  },


  /*
   * From Handbook of Applied Cryptography, Algorithm 2.107
   ** Iterative solution.
   */
  extended: function(param1, param2){
    if(param1 <= 0 || param2 <= 0){
      throw new Error("euclidean_algorithm: Both parameters must be non negative integers.");
    }

    if(param1 < param2){
      throw new Error("euclidean_algorithm: Parameters should be a >= b.");
    }

    if(param2 === 0){
      return {d: param1, x: 1, y: 0};
    }

    let a = new BigNumber(param1);
    let b = new BigNumber(param2);
    let r;
    let q;
    let x;
    let y;

    let x1 = new BigNumber(0);
    let x2 = new BigNumber(1);
    let y1 = new BigNumber(1);
    let y2 = new BigNumber(0);

    while(!b.equals(0)){
      q = a.dividedToIntegerBy(b);
      r = a.minus(q.times(b));
      x = x2.minus(q.times(x1));
      y = y2.minus(q.times(y1));

      a = b;
      b = r;
      x2 = x1;
      x1 = x;
      y2 = y1;
      y1 = y;
    }

    return {d: a, x: x2, y: y2}
  }

};

module.exports = euclideanAlgs;