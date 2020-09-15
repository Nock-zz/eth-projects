function squareRoot(n) {
  let x = Math.sqrt(n)
  if (x % 1 === 0) return x
  return -1
}

var result = []

function cubeRoot(n) {
  let x = Math.cbrt(n)
  if (x % 1 === 0) return x
  return -1
}

function checkForCubeRoot(/*rootArray*/ n) {
  // let calc2 = rootArray.reduce((total, el) => total + el*el, 0 );

  let calc2 = (n * (n + 1) * (2 * n + 1)) / 6

  if (cubeRoot(calc2) != -1) {
    result.push(n)
  }
}

function checkSquareSeriesIsCube(upTo) {
  for (let i = 1; i <= upTo; i++) {
    checkForCubeRoot(i)
  }

  return result
}

console.log(checkSquareSeriesIsCube(10000000))
