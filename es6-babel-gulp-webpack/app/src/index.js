import  myContacts, {familyName as EfamilyName, firstName as EfirstName}  from './contacts';
import JOURNAL from './journal';

console.log(EfamilyName, EfirstName, myContacts.age);
console.log(typeof JOURNAL);
console.log(JOURNAL[0]);

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(Array.isArray(listOfNumbers));

let myArrayOfNumbers = [1,3,5,7];
console.log(myArrayOfNumbers["length"]);

let myLength = () => 'length';
console.log(myArrayOfNumbers[myLength()]);
console.log('myArrayOfNumbers example with push()')
console.log(typeof myArrayOfNumbers.push);


console.log('start', myArrayOfNumbers);
myArrayOfNumbers.push(9.1);
myArrayOfNumbers.push(10);
console.log('after push()', myArrayOfNumbers);
myArrayOfNumbers.pop();
console.log('after pop()', myArrayOfNumbers);
//UNSHIFT AND SHIFT (push and pop on the front of an array)
myArrayOfNumbers.unshift(-10);
console.log('after unshift()', myArrayOfNumbers);
myArrayOfNumbers.shift()
console.log('after shift()', myArrayOfNumbers);

console.log('[0, 1, 2, 3, 4].slice():' ,[0, 1, 2, 3, 4].slice());
console.log('[0, 1, 2, 3, 4].slice(2):' ,[0, 1, 2, 3, 4].slice(2));
console.log('[0, 1, 2, 3, 4].slice(2,4):' ,[0, 1, 2, 3, 4].slice(2,4));

function remove(array, index) {
return array.slice(0, index)
.concat(array.slice(index + 1));
}
console.log('remove(["a", "b", "c", "d", "e"], 2) uses slice at index and concat:' ,remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log('anObject example with delete unary operator');
let anObject = {left: 1, right: 2};
console.log(anObject);
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(anObject);
console.log('objectA = {a: 1, b: 2} example with Object.assign from {b: 3, c: 4}');
let objectA = {a: 1, b: 2};
console.log(objectA);
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


function phi(score) {
return (score[3]*score[0] - score[2]*score[1])
  / Math.sqrt(
    (score[2] + score[3])*
    (score[0] + score[1])*
    (score[3] + score[1])*
    (score[0] + score[2])
  );
  }

console.log(phi([76, 9, 4, 1]));

function phi2([n00, n01, n10, n11])  {
  return  (n11*n00 - n10*n01)
    / Math.sqrt(
    (n10 + n11)*
    (n00 + n01)*
    (n11 + n01)*
    (n00 + n10)
    );
}
console.log('phi2');
console.log(phi2([76, 9, 4, 1]));

console.log([76, 9, 4, 1].includes(2));

function scoreFor(event, journal) {
  let eventTable = [0, 0, 0, 0];
  for (let element of journal) {
    let index = 0;
    if (element.events.includes(event)) {
      index += 1;
    }
    if (element.squirrel) {
        index += 2;
    }
    eventTable[index] += 1;
  }
  return eventTable;
}

console.log(scoreFor("pizza", JOURNAL));

function listOfEvents(journal) {
  let result = new Array();
  for (let element of journal) {
    for (let event of element.events) {
      if (!(result.includes(event))) {result.push(event);}
      }
  }
  return result;
}

console.log(listOfEvents(JOURNAL));

let phiCals;

function phiCalsForEvents(journal) {

  for (let element of journal) {
  //  console.log(element.events.length);
    if (element.events.includes("peanuts") && !element.events.includes("brushed teeth")) {
      element.events.push("peanut teeth");
      if (element.events.includes("peanut teeth")) {console.log(element);}
    }
  //  console.log(element.events.length);
  }
  console.log(journal.length);

  for ( let event of listOfEvents(journal)) {
    let correlation = phi(scoreFor(event, journal));
    if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ',', correlation);
    }
  }

}

phiCalsForEvents(JOURNAL);

let [n00,,n10,] = [27, 8, 4,1];
console.log(n00, n10);

let {events, squirrel} = JOURNAL[0];
//let test =JSON.stringify([e0,e1,e2,e3,e4,e5,e6,e7]);
//console.log(test);
let [e0,e1,e2,e3,e4,e5,e6,e7] = events;

console.log(events);
console.log(e0);

function max(...numbers) {
let result = -Infinity;
for (let number of numbers) {
if (number > result) result = number;
}
return result;
}
console.log("max(-2,3,7,4,-10):", max(-2,3,7,4,-10));

let words = ["never", "fully"];
console.log('array and new array using spread operator', ["never", "fully"], ["will", ...words, "understand"]);

let element = JOURNAL[1]; //{ events:  [ 'bread', 'pudding', 'brushed teeth', 'weekend', 'touched tree' ], squirrel: false }
console.log('object and new object using spread operator', element, {date: "01/12/2018", ...element, run: 25});

console.log('------------------------------Exercice 4 ---------------------------------')
import {range} from './exercice4';
console.log('range(1.1,10.1):',range(1.1,10.1));
console.log('range(1,10,2):',range(1,10,2));
console.log('range(5,2,-1):',range(5,2,-1));

import {sum} from './exercice4';

console.log('sum(range(1,10)):',sum(range(1,10)));

import {reverseArray} from './exercice4';

console.log('reverseArray([1,2,3]):',reverseArray([1,2,3]));

import {reverseArrayInPlace} from './exercice4';

let myArray = [1,2,3,4]
reverseArrayInPlace(myArray);
console.log('reverseArrayInPlace([1,2,3,4]):', myArray);

import {arrayToList} from './exercice4';
console.log(arrayToList([1,2,3]));

import {listToArray} from './exercice4';
console.log(listToArray({
    value: 1,
    rest: {
    value: 2,
    rest: {
    value: 3,
    rest: null
    }
    }
    }
  )
);

import {prepend} from './exercice4';

console.log(prepend(15, {
    value: 1,
    rest: {
    value: 2,
    rest: null
    }
    })
  );

  import {nth} from './exercice4';
  //console.log('nth - see below:')
  console.log(nth({
        value: 1,
        rest: {
        value: 2,
        rest: {
        value: 3,
        rest: null
        }
        }
      }, 2));

  import {deepEqual} from './exercice4';

  console.log('deepEqual of equal objects:', deepEqual({
        value: 1,
        rest: {
        value: 2,
        rest: {
        value: 3,
        rest: null
        }
        }
      }, {
            value: 1,
            rest: {
            value: 2,
            rest: {
            value: 3,
            rest: null
            }
            }
          }));

  console.log('deepEqual of equal values:', deepEqual(4,4));

function greaterThan(n) {
return (m) => m > n;
}
//let greaterThan10 = greaterThan(10);
console.log('greaterThan10(11):', greaterThan(10)(11));

console.log('------------------------------end of Exercice 4---------------------------');

[1,2,3,4].forEach(x => console.log(`forEach ${x} times 2`, x*2));

console.log('map that squares',[1,2,3,4], [1,2,3,4].map((x) => x**2));

console.log('filter even', [1,2,3,4].filter( x => x % 2 == 0));

console.log('reduce to get product', [1,2,3,4], [1,2,3,4].reduce((product,x) => product*x, 1 )); // , 1 is optional parameter

console.log('reduce to get sum', [1,2,3,4], [1,2,3,4].reduce((sum,x) => sum + x ));

console.log('some to see if there is a number greater than 3', [1,2,3,4], [1,2,3,4].some(x => x>3));

console.log('The for/of loop on a string gives you the real characters not the UTF-16 code units');
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
console.log('character', char);
console.log('char length', char.length);
console.log('charAt (Bad result for double bytes)', char.charAt(0));
console.log('charCodeAt (Bad result for double bytes)', char.charCodeAt(0));
console.log('codePointAt', char.codePointAt(0));
}

console.log('The for/in loop on a string messes up and you get the UTF-16 code units');
//let roseDragon = "🌹🐉";
for (let charIndex in roseDragon) {
console.log('charIndex', charIndex);
console.log('charAt (Bad result for double bytes)', roseDragon[charIndex].charAt(0));
console.log('charCodeAt (Bad result for double bytes)', roseDragon[charIndex].charCodeAt(0));
console.log('codePointAt', roseDragon[charIndex].codePointAt(0));
}


//let roseDragon = "🌹🐉";
console.log('The for loop on a string messes up and gives the UTF-16 code units');
console.log('For double byte characters the length is doubled as it counts the bytes and not the code points. e.g. for "🌹🐉".length: ', "🌹🐉".length );
for (let i=0; i < roseDragon.length; ++i) {
  console.log('character',i, roseDragon[i]);
}

// console.log('countBy function');
//
//
// function countBy(anArray, groupName /*function*/) {
//   let counts = []; // the array will contain objects of the form {group: groupName, count: countForGroup}
//   for (element of anArray) {
//     let name = groupName(element);
//     let key = counts.findIndex((e) => e.group == name);
//     if (key == -1) {
//       counts.push({group:name, count: 1})
//     } else {
//       counts[key].count++;
//     }
//   }
//   return counts;
// }
//
// console.log(countBy([1,2,3,4], (v) => v > 1 ));
//
// import SCRIPTS from './scripts';
//
// function characterScript(aCodePoint) {
//
//   for (let script of SCRIPTS) {
//     if (script.ranges.some( ([from,to]) => {
//       return (from <= aCodePoint) && (to >= aCodePoint);
//     })) {return script;}
//     // for (let range of script.ranges) {
//     // if (scriptMatches(aCodePoint, range)) return script;
//     // }
//   }
//   return {
//     name: "Unknown",
//     ranges: [],
//     direction: "NA",
//     year: 2100,
//     living: true,
//     link: ""
//   };
// }
//
// const scriptMatches = (aCodePoint, [from, to]) => {
//   if ((aCodePoint >= from) && (aCodePoint <= to) ) return true;
//   return false;
// }
//
// console.log('The for/of loop on a string "abcd" gives a char and char.codePointAt gives the code point so we can get the Script');
// let str = ' 英国的狗说 woofᠧ';
// for (let char of str) {
// console.log('codePointAt', characterScript(char.codePointAt(0)));
// }
//
// /*
// plan
// 1. get characterScript
// 2. use script.direction as the groupName in countBy function.
// */
//
// console.log('...countBy test...', countBy(' 英国的狗说woofᠧ', (char) => characterScript(char.codePointAt(0)).direction));
//
// console.log('...countBy answer...', countBy('英国的狗说 woofᠧ', (char) => characterScript(char.codePointAt(0)).direction)
// .reduce((result, countByObject) => (result.count > countByObject.count)? result: countByObject ));
//





console.log('findIndex is useful for connection different objects and doing a lookup of information')
let colorArray = [{color: 'r', colorName: 'red'}, {color: 'g', colorName: 'green'},{color: 'b', colorName: 'blue'}];
//And we have an object array with the following information:
let data = [{car: 'Audi', color:'b'}, {car: 'Ford', color: 'g'}];
let resultArray = [];
for (let el of data) {
  let index = colorArray.findIndex((cElement) => cElement.color == el.color);
  resultArray.push({car: el.car, colorName: colorArray[index].colorName})
}

console.log(resultArray);





console.log('------------------------------Exercice 5----------------------------------');



import {flatten} from './exercice5';

console.log('flatten',flatten([[1,2], [3,4], [5,6,'ab','z']]));

import {myloop} from './exercice5';

console.log('myloop test');
myloop(0, (v) => (v < 10), v => ++v, (v) => console.log(v) );

const myEvery = (anArray, predicateFunction ) => {
  for (let i = anArray.length-1; i >=0; --i) {
    let el = anArray.splice(i);
    if (![el].some(predicateFunction)) return false;
}
return true;
}

console.log('myEvery', myEvery([1,2,3], v => v < 5));

import {every} from './exercice5';

console.log('every', every([1,2,3], v => v < 5));

import SCRIPTS from './scripts';
import {countBy, characterScript} from './exercice5';


console.log('...countBy test...', countBy(' 英国的狗说 woof ᠧ', (char) => characterScript(char.codePointAt(0)).direction));


console.log('...countBy answer...', countBy('英国的狗说 woofᠧ', (char) => characterScript(char.codePointAt(0)).direction)
.reduce((result, countByObject) => (result.count > countByObject.count)? result: countByObject ));


function speak(...lines) {
console.log(`The ${this.type} rabbit says '${lines[0]}'`);
}
let whiteRabbit = {type: "white", speak: speak};

console.log(whiteRabbit);


function Rabbit0(type) {
this.type = type;
}

Rabbit0.prototype.speak = speak;
Rabbit0.prototype.author = "Nick";

let blackRabbit0 = new Rabbit0('black');
blackRabbit0.speak(...[ "It is dark", "It is black"]);
console.log('blackRabbit0.author:',blackRabbit0.author);
console.log(Object.getOwnPropertyNames(blackRabbit0));


console.log('Prototype of Rabbit (function) is Function.prototype:',Object.getPrototypeOf(Rabbit0) == Function.prototype);
console.log('Prototype of Function.prototype is Object.prototype:',Object.getPrototypeOf(Function.prototype) == Object.prototype);
console.log('Object.prototype:', Object.prototype);


let newEnglishBible = new class Bible { getWord() { return "hello says the Lord"; } };
console.log(newEnglishBible.getWord());

class Rabbit {
constructor(type) {
this.type = type;
}
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
}

Rabbit.prototype.teeth = "small";

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log('blackRabbit' , blackRabbit);
console.log('blackRabbit.teeth', blackRabbit.teeth);

console.log('"teeth" and "speak" in blackRabbit (gives all keys including prototype):', ("teeth" in blackRabbit), ("speak" in blackRabbit));
console.log(`use Object.getOwnPropertyNames(blackRabbit) + Object.getOwnPropertyNames(Object.getPrototypeOf(blackRabbit))
 to get all direct properties including methods`
, Object.getOwnPropertyNames(blackRabbit),Object.getOwnPropertyNames(Object.getPrototypeOf(blackRabbit)));

function logAllProperties(obj) {
     //console.log('Early check of object:',obj)
     if (obj == null) return; // recursive approach
     console.log(obj, `:`, Object.getOwnPropertyNames(obj));
     logAllProperties(Object.getPrototypeOf(obj));
}

logAllProperties(blackRabbit);

console.log('-------------------------------------------');
function props(obj) {
    var p = [];
    for (; obj != null; obj = Object.getPrototypeOf(obj)) {
        var op = Object.getOwnPropertyNames(obj);
        for (var i=0; i<op.length; i++)
            if (p.indexOf(op[i]) == -1)
                 p.push(op[i]);
    }
    return p;
}

console.log('props(blackRabbit)', props(blackRabbit));




console.log('blackRabbit.hasOwnProperty(teeth) (gives only the objects non method direct own keys):', ( blackRabbit.hasOwnProperty("teeth")));





Object.getOwnPropertyNames(blackRabbit0);

for (let key in blackRabbit) {
  console.log('All non method keys including prototype keys (let key in blackRabbit):',key);
}

for (let key of Object.keys(blackRabbit)) {
  console.log('Only direct non method object keys (let key of Object.keys(blackRabbit)):',key);
}



let hare = new class {
                      constructor(breed, age) {
                      this.breed = breed;
                      this.age = age;
                      }
                      speak(line) {
                      console.log('The ' + this.breed + 'hare says ' + line);

                      }
}('Fluffy', 15);


console.log(hare.breed);

console.log(hare.speak("Go away"));


const loveSymbol = Symbol("love");
const lv = loveSymbol.toString();

console.log(lv);

let obj = {};
//Number
obj[1] = "Number 1";
obj[1] === obj["1"]; //true
//Object
let number1 = {
  toString : function() { return "1"; }
}
console.log(obj[number1] === obj["1"]); //true

var no = 1;
console.log('no.__proto__ === Number.prototype',no.__proto__ === Number.prototype); //true
console.log('no.__proto__.__proto__ === Object.prototype',no.__proto__.__proto__ === Object.prototype); //true
console.log('no.__proto__.__proto__.__proto__', no.__proto__.__proto__.__proto__);

function TodoModel(){
    var todos = [];

    function reload(){
        setTimeout(function log() {
           console.log(todos);        //[]
       }, 0);
    }

    return {reload};
}

let todoModel = TodoModel();

console.log(todoModel);


const myobj = {name: "test", hasOwnProperty: "stupid mixup", speak: function() {console.log('hi');}};

const hasOwnPropertySym = Symbol('hasOwnProperty');

console.log(Object.prototype.toString);

console.log(Rabbit.prototype);
console.log(killerRabbit.__proto__);

console.log(Object.getOwnPropertyNames(myobj));
console.log(Object.keys(myobj));
console.log(myobj.__proto__.isPrototypeOf(Object));

myobj[hasOwnPropertySym] = myobj.__proto__.hasOwnProperty;


console.log(myobj[hasOwnPropertySym]("hasOwnProperty"));

let newobj = {}

console.log(newobj);
console.log('Object.prototype before:', Object.prototype);
console.log('Object.getPrototypeOf(newobj) === Object.prototype:',Object.getPrototypeOf(newobj) === Object.prototype);
console.log('newobj.__proto__:', newobj.__proto__);
console.log('newobj.__proto__.__proto__:', newobj.__proto__.__proto__);
console.log(Object.getOwnPropertyNames(newobj.__proto__));
Object.getPrototypeOf(newobj).newprop = "test";
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(newobj)));
console.log(Object.getOwnPropertyNames(newobj.__proto__));
console.log('Object.getPrototypeOf(newobj) === Object.prototype:',Object.getPrototypeOf(newobj) === Object.prototype);
console.log('Object.prototype after:', Object.prototype);

let anoNewObj = Object.create(Object.prototype); //or {}
console.log(anoNewObj);
console.log('newprop in newobj:' ,'newprop' in anoNewObj);

console.log('Hidden prototype key __proto__ in newobj:' ,'__proto__' in newobj);
console.log('Is __proto__ an own key of newobj',Object.keys(newobj).includes('__proto__'));

let newArray = new Array(); //or []
console.log(newArray.__proto__);

function Rabbit2(type) {
    this.type = type;
}

Rabbit2.prototype.speak = function(line) {
  console.log (`The ${this.type} Rabbit2 says ${line} `);
}

let blueRabbit2 = new Rabbit2('blue');

blueRabbit2.speak("I'm fealing blue - are you?");

console.log(typeof blueRabbit2);
console.log(blueRabbit2.__proto__);

const obj1 = {prop: "value", anotherProp: "anotherValue", someFunction: function(param) {/*do something*/ console.log(param);}};

const obj2 = Object.create(obj1, {a:{value: "A", writable: true, enumerable: true, configurable: true}});

const obj3 = Object.create(Object.prototype);

const obj4 = new Object();

const obj5 = {};

console.log("obj1:", obj1, obj1.someFunction("someFunction of obj1 says hello"), "obj2:"
,obj2,"someFunction' in obj2:", ('someFunction' in obj2), obj2.someFunction("someFunction of obj2 says hello")
,"obj3:", obj3, "obj4:", obj4, "obj5:", obj5);

logAllProperties(obj4);
logAllProperties(obj5);

//delete the newprop property created on Object.getPrototypeOf(newobj) from Object.prototype;
//console.log (Object.getPrototypeOf(newobj) == Object.prototype);
delete Object.prototype.newprop;


console.log( '"in" behaves differently when used in a for/in loop on an array');
for (let key in [0,1,2,3]) {
console.log(`for (let key  in [0,1,2,3]):(key = ${key}):`,key)
}
console.log('compared to using "in" on an object where we get all keys including prototype object keys')
for (let key in blackRabbit) {
console.log(`for (let key  in blackRabbit):(key = ${key}):`,key)
}
console.log('and compared to using "in" as a boolean test of a property existing on an array/object or its prototype')
console.log('"toString" in [0,1,2,3]:',"toString" in [0,1,2,3]);


let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator);
console.log(JSON.stringify(okIterator));
console.log(Object.getPrototypeOf(okIterator));
logAllProperties(okIterator);

console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

function Fox(type, age) {
  //this.property works as it creates the property on snowFox object but Fox.property does not
  this.type = type;
  this.age = age;
  // You can define local variables inside function Fox and these are private
  let _interests = "gardening";
  //Fox.prototype.property works but this.prototype.property does not
  Fox.prototype.speak0 = function(line) {
  console.log(`The ${this.type} fox (aged ${this.age} who loves ${_interests} ) says '${line}'`);
  };

  // You can get and set interests using the Fox.prototype functions which form a closure on _interests.
  Fox.prototype.getInterests = function() {
  return _interests;
  };

  Fox.prototype.setInterests = function(interest) {
  _interests = interest;
  };

}

Fox.prototype.speak = function(line) {
console.log(`The ${this.type} fox (likes ${this.getInterests()}) says '${line}'`);
};

// Any property on Fox is useless as Fox.prototype is used to create the object along with the constructor
Fox.speak = function(line) {console.log("Hi")}; //does not appear in snowFox properties.


let snowFox = new Fox("snow", 46);
snowFox.setInterests("singing and dancing");
snowFox.speak("It's snowing - can you see me?");
snowFox.speak0("It's snowing - can you see me?");
console.log('typeof Fox:',typeof Fox);
console.log('typeof snowFox:',typeof snowFox);

console.log('++++++++++++++++');
logAllProperties(snowFox);
console.log('++++++++++++++++');


class Fox0 {
  // Only takes functions and all are defined on Function.prototype.
  constructor(type,age) {
  this.type = type;
  //Fox0.prototype.property works but this.prototype.property does not
  Fox0.prototype.inspiration = "imagination";
  //this.property works but Fox0.property does not
  this.age = age;
  Fox0.prototype.speak0 = function(line) {
  console.log(`The ${this.type} fox (from author ${this.author} - aged ${this.age}) says: ${line}`);
  }
  }

  speak(line) {
  console.log(`The ${this.type} fox (from author ${this.author} ) says: ${line}`);
  }
}

Fox0.prototype.author = "Nick";

let blackFox = new Fox0("black", 24);
blackFox.speak("It's dark!");
blackFox.speak0("It's dark!");

console.log('=======================');
logAllProperties(blackFox);
console.log('=======================');

console.log('To make speak enumerable we can use Object.defineProperty');
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(blackFox),'speak'));

Object.defineProperty( Fox0.prototype, 'speak', {
//   value: 3,
   enumerable: true //,
//   writable: true,
//   configurable: true
 });

 console.log('=======================');
 console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(blackFox), 'speak'));
 console.log('=======================');




console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(blackFox), 'speak0'));
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(blackFox), 'speak'));
console.log(Object.getPrototypeOf(blackFox).speak.toString());

function FoxFactory(type) {
  let _type = type;

  function speak(line) {
  console.log(`The ${_type} fox says: ${line}`);
  }

  return {speak};

}

let brownFox = FoxFactory("brown");

brownFox.speak("Hello!");

class NM {
  constructor(size, fn = (x) => undefined) {
    this.content = [];
    for (let x=0; x < size; x++) {
      this.content.push(fn(x));
    }

  }
}

let nm = new NM(4, (x) => x*x );

console.log(nm.content);



class Matrix {
constructor(width, height, element = (x, y) => undefined) {
  this.width = width;
  this.height = height;
  this.content = [];
  for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
  this.content[y * width + x] = element(x, y);
}
}
}
get(x, y) {
  return this.content[y * this.width + x];
}
set(x, y, value) {
  this.content[y * this.width + x] = value;
}

[Symbol.iterator]() {
  return new MatrixIterator(this);
}

}

class MatrixIterator {
constructor(matrix) {
  this.x = 0;
  this.y = 0;
  this.matrix = matrix;
}
next() {
  if (this.y == this.matrix.height) return {done: true};
  let value = {x: this.x,
              y: this.y,
              coordValue: this.matrix.get(this.x, this.y)};
  this.x++;
  if (this.x == this.matrix.width) {
  this.x = 0;
  this.y++;
  }
  return {value, done: false};
}
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, coordValue} of matrix) {
console.log(x, y, coordValue);
};


class Temperature {
constructor(celsius) {
this.celsius = celsius;
}
// get lets you call temp.fahrenheit as though fahrenheit is a data property like celsius
get fahrenheit() {
return this.celsius * 1.8 + 32;
}
// set lets you set temp.fahrenheit = 40 as though fahrenheit is a data property like celsius
set fahrenheit(value) {
this.celsius = (value - 32) / 1.8;
}
static fromFahrenheit(value) {
return new Temperature((value - 32) / 1.8);
}
}


let temp = new Temperature(22);
temp.celsius = 0;
console.log(temp.fahrenheit);


console.log('------------------Excercies Chapter 6------------------------------');

class Vector {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  plus(vector2) {
    let resultVector = new Vector(0,0);
    resultVector.x = this.x + vector2.x;
    resultVector.y = this.y + vector2.y;
    return resultVector;
  }

  minus(vector2) {
    let resultVector = new Vector(0,0);
    resultVector.x = this.x - vector2.x;
    resultVector.y = this.y - vector2.y;
    return resultVector;
  }

  get length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);

  }

}

let vector1 = new Vector(3 , 4);

let vector3 = vector1.plus(new Vector(4,4));

console.log(vector3);

console.log(vector1.length);

logAllProperties(vector1);

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(vector1), 'minus'));

console.log(Object.getPrototypeOf(vector1).length.toString());

console.log(Math.abs.toString());

console.log(Object.getPrototypeOf(vector1)['plus'].toString());

class Group {
  constructor() {
    this.content = [];
  }

  has(item) {
    return (this.content.indexOf(item) !== -1) ? true : false;
  }

  add(item) {
    if (!this.has(item)) {
    this.content.push(item);
    }
  }

  delete(item) {
    if (this.has(item)) {
      //delete this.content[this.content.indexOf(item)];
      this.content.splice(this.content.indexOf(item),1)
    }
  }

  [Symbol.iterator]() {
    return new groupIterator(this);
  }



  static from(anIterableObject) {
    let returnGroup = new Group();
    for (item of anIterableObject) {
      returnGroup.add(item);
        }
    return returnGroup;
  }

}

class groupIterator {

  constructor(group) {
    this.groupIndex = 0;
    this.group = group;
  }


  next() {
    //console.log('this.group.content',this.group.content,'this.groupIndex',this.groupIndex );
    if (this.groupIndex == this.group.content.length) {return {done:true};}
    let value = {groupIndex: this.groupIndex, groupValue: this.group.content[this.groupIndex] }
    this.groupIndex++;
    return {value, done:false};
  }
}



let gr = new Group();
gr.add('1');
console.log(gr);
gr.add('1');
console.log(gr);
gr.add('2');
console.log(gr);
gr.delete('1');
console.log(gr);
gr.add('2');
console.log(gr);
gr.add('3');
console.log(gr);

let grIterator = gr[Symbol.iterator]();
console.log(grIterator.next());

for (let el of gr) {
  console.log(el);
}


const myObj = {name: "test", hasOwnProperty: "stupid mixup", speak: function() {console.log('hi');}};

const hasOwnProperty = Symbol('hasOwnProperty');

myObj[hasOwnProperty] = Object.getPrototypeOf(myObj).hasOwnProperty;

//console.log(Object.getPrototypeOf(myObj).hasOwnProperty);

console.log(myObj[hasOwnProperty]('hasOwnPropert'));

console.log( '------------------------------- End of Exercises Chapter 6 ---------------------------------');

let begin = 'uvw', end = 'xyz';
console.log(begin, ':', end);
console.log([begin, end] ='abc-def'.split('-'));
console.log(begin, ':', end);
