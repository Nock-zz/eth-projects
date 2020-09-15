// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let mapA1 = {}, mapB1 = {};
  let stringA1 = stringA.replace(/[^\w]/, '').toLowerCase(), stringB1 = stringB.replace(/[^\w/]/, '').toLowerCase();
  console.log(stringA1, ':', stringB1);
  console.log( Array.isArray(stringA1.split('')));
  console.log(stringA1.split('').sort().constructor.name);
  console.log(stringA1.split('').sort());
  console.log(Object.prototype.toString.call(stringA1.split('').sort()));

  for (let char of stringA1 ) {
    !!mapA1[char] ? mapA1[char]++ : mapA1[char] = 1;
  }
  for (let char of stringB1 ) {
    !!mapB1[char] ? mapB1[char]++ : mapB1[char] = 1;
  }
  debugger;
  if (stringA1.length !== stringB1.length) return false;
  for (let prop in mapA1) {

    if (mapA1[prop] != mapB1[prop]) return false;
  }
  return true;

}

console.log(anagrams("Hello", "olleh"));


module.exports = anagrams;
