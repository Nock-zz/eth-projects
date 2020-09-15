// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)

// let div = Max.trunc(i/n)
// let rem = i % n

//     [[1,   2,  3, 4],  div == 0
//     [12, 13, 14, 5],   div == 2 and rem == 0, div == 3 and rem ==1, div == 3 and rem ==2 ,div == 1 and rem == 1
//     [11, 16, 15, 6],   div ==2 and rem ==3, div ==4 and rem ==0,div ==3 and rem == 3,div == 1 and rem == 2
//     [10,  9,  8, 7]]  div == 2 and rem ==1  , div == 2 and rem == 0  ,div == 1 and rem == n-1


function create2Array(d1, d2, fn) {
    var arr = [],
        d = function(x, y) {},
        f = fn || d;
    for (var i = 0; i < d1; i++) {
        for (var j = 0, curr = []; j < d2; j++) {
             curr[j] = f(i, j);
        };
        arr[i] = curr;
    };
    return arr;
};




function matrix(n) {
let nnArray = create2Array(n, n, function(x,y) {return -1});
let x = 0, y = 0;
let last = ''
  console.log(nnArray);

  for ( let i = 0; i < n *n ; i ++) {

    nnArray[x][y] = i + 1;
    // console.log('x,y', x, ' ', y);
    // debugger;
    if ( (y < n -1) && (last == 'y+')  && (nnArray[x][y +1] === -1)) {
      y++;
      last = 'y+'
      continue;
    }
    if ((x < n-1) &&  (last == 'x+') && (nnArray[x + 1][y] === -1)) {
      x++;
      last = 'x+'
      continue;
    }
    if ((y > 0)  && (last = 'y-') && (nnArray[x][y -1] === -1) ) {
      y--;
      last = 'y-'
      continue;
    }
    if ( (x > 0) && (last = 'x-') && (nnArray[x -1][y] === -1)) {
    x--;
    last = 'x-'
    continue;
    }

    if ( (y < n -1)  && (nnArray[x][y +1] === -1)) {
      y++;
      last = 'y+'
      continue;
    }
    if ((x < n-1) && (nnArray[x + 1][y] === -1)) {
      x++;
      last = 'x+'
      continue;
    }
    if ((y > 0)  && (nnArray[x][y -1] === -1) ) {
      y--;
      last = 'y-'
      continue;
    }
    if ( (x > 0) && (nnArray[x -1][y] === -1)) {
    x--;
    last = 'x-'
    continue;
    }
  }
    return nnArray;
}

console.log(matrix(7));

module.exports = matrix;
