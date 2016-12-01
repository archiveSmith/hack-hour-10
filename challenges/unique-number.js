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
    const sorted = array.sort()
    for (let i = 0; i < sorted.length; i += 2) {
        if (sorted[i] !== sorted[i+1]) return sorted[i]
    }
}

module.exports = uniqueNumber;
