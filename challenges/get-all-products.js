/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    if (!array.length) return [0]
    const zeroes = array.reduce((a, c) => c === 0 ? ++a : a, 0)
    switch (zeroes) {
        case 0:
            const prodAllnoZeroes = array.reduce((a, c) => a * c)
            return array.map(e => prodAllnoZeroes / e)
        case 1:
            return [array.reduce((a, c) => c === 0 ? a : a * c, 1)]
        default:
            return [0]
    }
}

module.exports = getAllProducts;
