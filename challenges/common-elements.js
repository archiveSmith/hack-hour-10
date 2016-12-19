// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){

  const args = [...arguments];
  const numArgs = args.length;

  // create an array with common elements (has dups)
  let commonElems = args[0];
  for (let i = 1; i < numArgs; ++i) {
    commonElems = commonElems.filter(elem => args[i].indexOf(elem) !== -1);
  }

  // create a set to remove dups
  commonElems = commonElems.reduce((set, elem) => {
    set[String(elem)] = true;
    return set;
  }, {});

  // re-create an array from set
  commonElems = Object.keys(commonElems).filter(keys => commonElems[keys]);

  return commonElems.length === 0 ? 'Nothing in Common!' : commonElems;
}

// console.log(commonElements([1, 2, 3, 3], [3, 4, 5], [3, 6, 7, 8]));
// console.log(commonElements([1, 2, 3], [6, 4, 5]));

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
