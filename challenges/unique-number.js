/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  return Object.keys(a.reduce((acc, cur) => {
    if (acc[cur]) delete acc[cur];
    else acc[cur] = 1;
    return acc;
  }, {}))[0];
}

module.exports = uniqueNumber;