//var bigInt = require("big-integer");

import bigInt from 'big-integer';

console.log(bigInt(5).add(4));

let v = 0;

v ? true : false  //equals false
!v ? true : false  //equals true
!!v //false

v = 1;

v ? true : false  //equals true
!v ? true : false  //equals false
!!v //true

typeof !v;
typeof !!v // boolean
console.log('If v =1 type of !!v: ', typeof !!v);

