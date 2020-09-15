// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, m = n) {

      if (n == 0) return;

      console.log('#'.repeat(m - n + 1 ) + ' '.repeat(n - 1));
      steps(n -1, m);
      }

steps(5);

module.exports = steps;

// for (let i = 0; i < n; i ++) {
//   console.log( '#'.repeat(i+1) + ' '.repeat(n - (i +1)));
// }
