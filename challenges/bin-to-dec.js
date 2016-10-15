/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const binArray = binary.split('');
  let magnitude = binArray.length;
  let result = 0;
  while (magnitude > 0) {
    // shift the most significant bit out of the array of bits
    const bit = binArray.shift();
    // multiply it by the decimal value of it's magnitude
    result += (Math.pow(2, --magnitude) * bit);
  }
  return result;
}

module.exports = binToDec;

console.log(binToDec('0'));
console.log(binToDec('01'));
console.log(binToDec('10'));
console.log(binToDec('101'));
console.log(binToDec('100001'));
console.log(binToDec('100101'));
