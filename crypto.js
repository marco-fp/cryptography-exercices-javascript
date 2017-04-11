const ma = require('./modular_arithmetic');
const primeNumbers = [46381, 768479, 9476407, 36780481, 562390847, 1894083629,
65398261921, 364879542899, 8590365927553, 28564333765949, 123456789101119];

console.log("Euclidean algorithm to find GCD: ");
console.log("(250, 10): ", ma.EuclideanAlgorithm(250, 10));
console.log("(67, 10): ", ma.EuclideanAlgorithm(67, 10));
console.log("(99, 21): ", ma.EuclideanAlgorithm(99, 21));
console.log("(273, 33): ", ma.EuclideanAlgorithm(273, 33));

console.log("Extended Euclidean algorithm: ");
console.log("(4864, 3458): ", ma.ExtendedEuclideanAlgorithm(4864, 3458));
