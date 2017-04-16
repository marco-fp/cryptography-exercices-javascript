const ma = require('./modular_arithmetic');
const primeNumbers = [46381, 768479, 9476407, 36780481, 562390847, 1894083629,
65398261921, 364879542899, 8590365927553, 28564333765949, 123456789101119];

console.log("Euclidean algorithm to find GCD: ");
console.log("(250, 10): ", ma.euclideanAlgs.simple(250, 10));
console.log("(67, 10): ", ma.euclideanAlgs.simple(67, 10));
console.log("(99, 21): ", ma.euclideanAlgs.simple(99, 21));
console.log("(273, 33): ", ma.euclideanAlgs.simple(273, 33));

console.log("Extended Euclidean algorithm: ");
console.log("(4864, 3458): ", ma.euclideanAlgs.extended(4864, 3458));

console.log("Mod pow modulus: ");
console.log("pow(12,34) mod 56: ", ma.modPow(12, 34, 56));
console.log("pow(7,36) mod 54: ", ma.modPow(7, 36, 54));

console.log("Miller rabin for 123456789:", ma.millerRabin(123456789, 10));
console.log("Miller rabin for 46381:", ma.millerRabin(46381, 10));
console.log("Miller rabin for 562390847:", ma.millerRabin(562390847, 10));
console.log("Miller rabin for 28564333765949:", ma.millerRabin(28564333765949, 10));
console.log("Miller rabin for 123456789101119:", ma.millerRabin(123456789101119, 10));

console.log("Baby step Giant Step: ", ma.babyStepGiantStep(3, 2, 29));

console.log("Fermat factor of 5959:", ma.fermatFactor(5959));

console.log("Pollard factor of 455459:", ma.pollardFactor(455459));
