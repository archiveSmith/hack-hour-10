/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      current += arr[j];
      if (current > max)
        max = current;
    }
  }
  return max;
}

module.exports = maxSubarray;
