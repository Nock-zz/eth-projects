//var bigInt = require("big-integer");

function cubeRoot(n) {

  let x = Math.cbrt(n);
  if (x % 1 === 0) return x;
  return -1;
}

var result = [];
// let originalRoot = [];
let originalAvailable = [];
for (let j=0; j<10000; j++) {
  originalAvailable[j] = j+1;
}
console.log(originalAvailable);


let temp = [];

function perfect(available) {

  for (index in available) {
      temp =[];
      for (let i = index; i < available.length; i++) {
      // console.log('originalRoot at top', originalRoot);
      // if (i > 0) {
      //   available.shift();
      //   root = [];
      // }
      // console.log('index:', index, i);
      // console.log('temp at for top:', temp);
      // console.log('available at for top:', available);
      let removed = available.slice(i, i+1);

      // console.log('removed:', removed);
      temp.push(removed[0]);

      // console.log('i:', i);
      // console.log('temp:',temp);
      // console.log('available:', available);

      let calc = temp.reduce((total, el) => total + el*el, 0 );
      // console.log('calc:', calc);

      if (cubeRoot(calc) != -1) {
        result.push([...temp]);
        // console.log('result:',  result);
        //debugger;
      }


        // console.log('available before if before break', available)
        // if (available.length == temp.length) {
        // temp = [];
        // // console.log('originalRoot before break', originalRoot);
        //
        // // originalAvailable.splice(0,1);
        // myavailable = available.slice(1);
        // console.log('myavailable before break', myavailable)
        // console.log('temp before break', temp);
        // continue;
        // }
      // console.log('myroot:', myroot);

    }

}
  console.log(result);
}

perfect(originalAvailable);


let test = [ 90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115 ];

//
// let test = [ 22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//     32,
//     33,
//     34,
//     35,
//     36,
//     37,
//     38,
//     39,
//     40,
//     41,
//     42,
//     43,
//     44,
//     45,
//     46,
//     47,
//     48,
//     49,
//     50,
//     51,
//     52,
//     53,
//     54,
//     55,
//     56,
//     57,
//     58,
//     59,
//     60,
//     61,
//     62,
//     63,
//     64,
//     65,
//     66,
//     67,
//     68 ];

let calculation = test.reduce((total, el) => total + el*el, 0 );
let calculation2 = test.reduce((total, el) => total + el*el*el, 0 );
console.log(calculation);
console.log(calculation2)

console.log(cubeRoot(calculation)) ;
console.log(Math.sqrt(calculation2));
