// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, m = n) {

  if (n == 0) return;

  console.log( ' '.repeat( (2*n - 2)/2) + '#'.repeat(2*(m -n) +1 ) + ' '.repeat((2*n -2)/ 2) );
  pyramid(n-1, m);

}
module.exports = pyramid;


// function pyramid(n) {
//   for (let i =1 ; i <=n; i++) {
//     console.log(' '.repeat(n-i) + '#'.repeat(2*i-1) + ' '.repeat(n-i));
//   }
// }
// module.exports = pyramid;
