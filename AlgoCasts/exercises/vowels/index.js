// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return !!str.toLowerCase().match(/[aeiou]/gi) ? str.toLowerCase().match(/[aeiou]/gi).length : 0 ;
}

console.log(vowels('HR'));

module.exports = vowels;

// return str.toLowerCase().split('').filter((x) => (x =='a' || x =='e' || x =='i' || x =='o' || x =='u')).length;

// return str.toLowerCase().split('').filter((x) => ( 'aeiou'.includes(x))).length
