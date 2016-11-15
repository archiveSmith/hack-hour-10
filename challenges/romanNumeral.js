/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  const numerals = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'I', 'II', 'III', 'IV', 'V', 'VII', 'VIII', 'IX'],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  ]

  function transform(n) {
    let numeral = [];
    const digits = n.toString().split('');
    for (var i = 0; i < digits.length; i++) {
      numeral.push(numerals[i][parseInt(digits[i])]);
    }
    return numeral.join('');
  } 
 return transform(n);
}

module.exports = romanNumeral;
