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

function checkForCubeRoot(rootArray) {
    let calc2 = rootArray.reduce((total, el) => total + el * el, 0)

    if (cubeRoot(calc2) != -1) {
        result.push([...rootArray])
    }
}

function checkForSquareRoot(rootArray) {
    let calc3 = rootArray.reduce((total, el) => total + el * el * el, 0)

    if (squareRoot(calc3) != -1) {
        result.push([...rootArray].reverse())
    }
}

function checkForBothCubeAndSquareRoot(rootArray) {
    let calc2 = rootArray.reduce((total, el) => total + el * el, 0)
    let calc3 = rootArray.reduce((total, el) => total + el * el * el, 0)

    if (cubeRoot(calc2) != -1 && squareRoot(calc3) != -1) {
        result.push([...rootArray])
    }
}

function checkNumberPairSeriesIsBothCubeAndSquare(upTo) {
    let rootArray = []
    for (let i = 1; i <= upTo; i++) {
        for (let j = i + 1; j <= upTo; j++) {
            rootArray = []
            if (i) rootArray.push(i)
            if (j) rootArray.push(j)
            checkForBothCubeAndSquareRoot(rootArray)
        }
    }
    return result
}

//function checkNumberPairIsCubeOrSquare(upTo) {
//    let rootArray = []
//    for (let i = 1; i <= upTo; i++) {
//        for (let j = i + 1; j <= upTo; j++) {
//            rootArray = []
//            if (i) rootArray.push(i)
//            if (j) rootArray.push(j)
//            checkForCubeRoot(rootArray)
//            checkForSquareRoot(rootArray)
//            // console.log(rootArray)
//        }
//    }
//
//    return result
//}

console.log(checkNumberPairSeriesIsBothCubeAndSquare(10000))
