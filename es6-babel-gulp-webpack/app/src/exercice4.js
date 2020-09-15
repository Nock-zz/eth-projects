// Range function range(start, end)

const range = function(start, end, step = 1) {

  if (!( Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(step) ) ) {return}
  if (end < start) {let temp = start; start = end; end = temp;}
  let rangeArray = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    }
  } else if (step < 0) {
    for (let i = end; i >= start; i = i + step) {
      rangeArray.push(i);
    }
  } else {return}
  return rangeArray;
}

export {range};

const sum = function(rangeArray) {
  let resultSum = 0;
  for (let i of rangeArray) {
    resultSum += i;
    }
return resultSum;
}

export {sum};

const reverseArray = (anArray) => {
  let resultArray = [];
  for (let i of anArray) {
    resultArray.unshift(i);
  }
  return resultArray;
}

export {reverseArray};

// unable to change the parameter anArray by anArray = reverseArray(anArray) as parameter is by copy
const reverseArrayInPlace = (anArray) => {
  // let tempArray = [];
  // for (let i =0; i < anArray.length; i++) {
  //   tempArray.unshift(anArray[i]);
  // }
  // for (let i =0; i < anArray.length; i++) {
  //   anArray[i] = tempArray[i];
  // }

  let tempArray = reverseArray(anArray);
  for (let i =0; i < anArray.length; i++) {
    anArray[i] = tempArray[i];
  }
}

export {reverseArrayInPlace};


const arrayToList = function(anArray) {
  let resultList = null;
  let value;
  for (let i = anArray.length -1; i >=0 ; i--) {
    value = anArray[i];
    resultList = { ...{value} , rest: resultList}
  }
  return resultList;
}


export {arrayToList};

const listToArray = (aList) => {
  // let returnArray = [];
  // let rest1;
  // let workList = aList;
  // do {
  //   let {value, rest} = workList;
  //   rest1 = rest;
  //   console.log(value);
  //   console.log(rest);
  //   returnArray.push(value);
  //   workList = rest;
  // } while (rest1 != null);
  let returnArray = [];
  ///let rest1;
  //let workList = aList;
  do {
    var {value, rest} = aList; ///let scope ends before while so use var
    ///rest1 = rest;
    returnArray.push(value);
    aList = rest;
  }  while (rest != null) /// while (rest1 != null)

  return returnArray;
}

export {listToArray};

const prepend = (value, aList) => {
  let returnList = { ...{value}, rest: aList}
  return returnList;
}

export {prepend};

const nth = (aList, num) => {
  let returnValue;
  let {value, rest} = aList;
  // console.log('value:', value, 'rest:', rest, 'num:', num);

  if ((num > 0) && (rest != null)) {
    num--;
    aList = rest;
    // console.log('aList:', aList, 'num:', num);
    returnValue = nth(aList, num);
    } else if ((num > 0) && (rest == null)) {
    // console.log(undefined);
    returnValue = undefined;

    } else {
    // console.log(value);
    returnValue = value;

    }
    return returnValue;

}

export {nth};

const deepEqual = (firstValue, secondValue) => {
  let result;
  if (typeof firstValue == 'object' && firstValue !== null && typeof secondValue == 'object' && secondValue !== null ) {
  let firstValueKeys = Object.keys(firstValue);
  let secondValueKeys = Object.keys(secondValue);
    if (firstValueKeys.length != secondValueKeys.length) {
      return false;
    } else {
      for (let key of firstValueKeys) {
        if (!secondValueKeys.includes(key)) {
          // console.log(firstValue, key, firstValue[key], secondValue, key, secondValue[key]);
          return false;
        } else {
          result = deepEqual(firstValue[key], secondValue[key])
          if (result === false) {return false;}
        }
      }
    }
  } else if (typeof firstValue !== typeof secondValue) {
    return false;
  } else {
    if (firstValue !== secondValue) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
};

export {deepEqual};
