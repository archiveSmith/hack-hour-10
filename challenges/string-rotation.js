/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s2.length; i++) {
      if (s2.substring(i) === s1.substring(0, s1.length-i)) {
        s2 = s2.substring(i) + s2.substring(0,i);
        break;
      }
  }

  // let newStr = s2 + s2;
  //
  // llohe + llohe => llohellohe
  return isSubstring(newStr, s1);
}

console.log(stringRotation("hey you", " youhey"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
