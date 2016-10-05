/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
 function pow(base, power) {
   if (base.constructor !== Number || power.constructor !== Number || base < 0 || power < 0) return 'base and power must both be positive numbers';
   if (base === 0 && base === power) return 0;
   let result = 1;
   let p = power;

   function exp(result) {
   	if (p === 0) return result;
   	result *= base;
   	p--;
   	return exp(result)
   }

   return exp(result);
 }

module.exports = pow;
