// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



function memoize(fn) {
  cache = {};
  return function(...args) {
    if (!!cache[args]) return cache[args];
    result = fn.call(this, ...args);
    cache[args] = result;
    return result;
  }

}



function slowFib(n) {
  console.log(this[global]);
  if ( n === 0) return 0;
  if ( n === 1) return 1;
  return (fib(n-1) + fib(n-2));  // note we actually call fib - the memoized slowFib.
}

const fib = memoize(slowFib);

console.log(slowFib(6));



module.exports = fib;

// function fib(n) {
//   if ( n === 0) return 0;
//   if ( n === 1) return 1;
//   return (fib(n-1) + fib(n-2));
// }


// function fib(n) {
//
// let fibSequence = [];
//
// for (let i = 0; i <= n; i++) {
//   if (i == 0) {
//     fibSequence.push(0);
//     continue;
//   }
//   if (i == 1) {
//     fibSequence.push(1) ;
//     continue;
//   }
//   fibSequence.push(fibSequence[fibSequence.length-2] + fibSequence[fibSequence.length -1] );
//   // console.log(fibSequence);
//  }
//  return fibSequence[fibSequence.length -1];
// }
