/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
  if (!Array.isArray(array)) return "error";
  let temp, mid = array.length / 2;
  for (let i = 0, j = array.length -1 ; i < mid; i += 1, j -= 1) {
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

module.exports = reverseInPlace;
let a = ['a', 'b', 'c', 'd'];
a = 12;
a = reverseInPlace(a);
console.log(a);