function squareRoot(n) {

  let x = Math.sqrt(n);
  if (x % 1 === 0) return x;
  return -1;
}


var result = [];

function cubeRoot(n) {

  let x = Math.cbrt(n);
  if (x % 1 === 0) return x;
  return -1;
}

function checkForBothCubeAndSquareRoot(rootArray) {
let calc2 = rootArray.reduce((total, el) => total + el*el, 0 );
let calc3 = rootArray.reduce((total, el) => total + el*el*el, 0 );


if ((cubeRoot(calc2) != -1) && (squareRoot(calc3) != -1)) {
  result.push([...rootArray]);
}
}



function checkNumberTripleSeriesIsBothCubeAndSquare(upTo) {
  let rootArray = [];
  for (let a =1; a <= upTo; a++) {
    for (let b = a +1; b <= upTo; b++) {
      for (let c = b +1; c <= upTo; c++) {
        rootArray =[];
        if (Boolean(a)) rootArray.push(a);
        if (Boolean(b)) rootArray.push(b);
        if (Boolean(c)) rootArray.push(c);
        checkForBothCubeAndSquareRoot(rootArray);
      }
    }
  }
return result;
}


console.log(checkNumberTripleSeriesIsBothCubeAndSquare(1000));
