/*
* From Handbook of Applied Cryptography, Algorithm 2.104
*
* Iterative solution.
*/
exports.EuclideanAlgorithm = function(param1,param2){
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
}


/*
* From Handbook of Applied Cryptography, Algorithm 2.107
** Iterative solution.
*/
exports.ExtendedEuclideanAlgorithm = function(param1, param2){
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

}
