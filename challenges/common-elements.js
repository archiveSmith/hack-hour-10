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
	let resultsArray = [];
	let args = [...arguments];
	let lengthsofthearrays = [];

	lengthsofthearrays.push(array1.length, array2.length, array3.length, array4.length);
	if(lengthsofthearrays.includes(0)) return "Nothing in Common!";

	let shortestarraylength = Math.min(...lengthsofthearrays);
	let index = lengthsofthearrays.indexOf(shortestarraylength)
	let thelongestarray = args[index];

	for( var i = 0 ; i < thelongestarray.length; i++) {
		let checkingthisvalue = thelongestarray[i];
		if (args[0].includes(checkingthisvalue) & args[1].includes(checkingthisvalue) & args[2].includes(checkingthisvalue)) {
			if (!resultsArray.includes(checkingthisvalue)) {
				resultsArray.push(checkingthisvalue)
			}
		}
	}
	if(resultsArray.length === 0) return "Nothing in Common!"
	return resultsArray;
}

  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];


console.log(commonElements(array1, array2, array3, array4));
// your output would be [ 12, 'ferret']


// module.exports = commonElements;
