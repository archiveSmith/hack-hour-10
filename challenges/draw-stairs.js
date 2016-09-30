/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let result ='',p, q;
  for(let i = 1; i < n; i++){
  p = i;
  q = n - i;
  while(q > 0){
    q--;
    result+= ' ';
  }
  while(p > 0){
    p--;
    result += '*';
  }
   console.log(result);
   result = '';
}
}


module.exports = drawStairs;
