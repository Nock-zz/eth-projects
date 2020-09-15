// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverse = require ('../reversestring/index');


console.log(reverse);

function palindrome(str) {



  // function reverse(str) {
  //   return reversed = str.split('').reduce( (revd, char) => char + revd);
  // }
  console.log(reverse(str));
  return (reverse(str) === str);

}

module.exports = palindrome;
