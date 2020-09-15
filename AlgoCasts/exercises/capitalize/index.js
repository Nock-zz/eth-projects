// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  // console.log('noon'.replace(/\B./g, 'match'));
  return str.replace(/(?:^\W?|\b)\w/g, (char) => char.toUpperCase());

}

console.log(capitalize('?que tal?'))

module.exports = capitalize;

// return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

// let result ='';
// for (let indx in str) {
//    result += (str[indx-1] === " " || !str[indx -1]) ? str[indx].toUpperCase() : str[indx];
// }
// return result;
