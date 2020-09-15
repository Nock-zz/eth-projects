// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  let result = '';
  //let m = 0;


  let nString = (Math.sign(n)*n).toString();
  for (char of nString) {
    result = char + result;
  }

  result = Math.sign(n)*parseInt(result);

  return result;

}

module.exports = reverseInt;
