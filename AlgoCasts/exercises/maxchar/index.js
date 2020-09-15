// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  for (char of str) {
    !!chars[char] ? chars[char]++ : chars[char] = 1;

  }

  return (Object.keys(chars)).reduce((gr, el) => chars[el] > chars[gr] ? el : gr );

}

// console.log(maxChar('hello'));

module.exports = maxChar;
