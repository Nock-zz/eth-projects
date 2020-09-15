//var bigInt = require("big-integer");

function cubeRoot(n) {

  let x = Math.cbrt(n);
  if (x % 1 === 0) return x;
  return -1;
}

function squareRoot(n) {

  let x = Math.sqrt(n);
  if (x % 1 === 0) return x;
  return -1;
}


var result = [];

let initialAvailable = [];
for (let j=0; j<100; j++) {
  initialAvailable[j] = j+1;
}
//console.log(initialAvailable);

var initialRoot = [];

function perfect(root, available) {
  let lAvailable = [...available];
  for (index in available) {
      let lRoot =[...root];
      // console.log('lRoot and lAvailable:', lRoot, ':', lAvailable);
      lRoot.push(lAvailable.shift()); //we shift off of lAvailable and push onto lRoot.
      // console.log('lRoot and lAvailable:', lRoot, ':', lAvailable);
      let calc2 = lRoot.reduce((total, el) => total + el*el, 0 );
      let calc3 = lRoot.reduce((total, el) => total + el*el*el, 0 );

      if ((cubeRoot(calc2) != -1) && (squareRoot(calc3) != -1)) {
        result.push([...lRoot]);
      }
      if (lAvailable.length == 0) return result;
      perfect(lRoot, lAvailable); //otherwise recurse
  }
}

console.log(perfect(initialRoot, initialAvailable));
