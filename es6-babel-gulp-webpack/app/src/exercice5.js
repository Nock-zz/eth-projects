const flatten = (anArrayOfArrays) => {
  let returnArray = anArrayOfArrays.reduce((resultArray, arr) => resultArray.concat(arr) );
  return returnArray;
}

export {flatten};


const myloop = (value, test, update, body) => {
  while (true) {
    if (test(value)) {
      body(value);
      //let newValue = update(value);
      //console.log('newValue', newValue);
      value = update(value);
    } else {
      break;
    }
  }
}

export {myloop};


const every = (anArray, predicateFunction ) => {

    if (anArray.some( element => { return !predicateFunction(element)})) {return false;}

    else {return true;}
}

export {every};

// import SCRIPTS from './scripts';

function countBy (anArray, groupName /*function*/) {
  let counts = []; // the array will contain objects of the form {group: groupName, count: countForGroup}
  for (let element of anArray) {
    let name = groupName(element);
    let key = counts.findIndex((e) => e.group == name);
    if (key == -1) {
      counts.push({group:name, count: 1})
    } else {
      counts[key].count++;
    }
  }
  return counts;
}

export {countBy};


const characterScript = function(aCodePoint) {

  for (let script of SCRIPTS) {
    if (script.ranges.some( ([from,to]) => {
      return (from <= aCodePoint) && (to >= aCodePoint);
    })) {return script;}
    // for (let range of script.ranges) {
    // if (scriptMatches(aCodePoint, range)) return script;
    // }
  }
  const nullScript =  //This covers spaces which do not get mapped in SCRIPTS.
    {
      name: "Unknown",
      ranges: [],
      direction: "NA",
      year: 2100,
      living: true,
      link: ""
    };
  return nullScript;

}

export {characterScript};
