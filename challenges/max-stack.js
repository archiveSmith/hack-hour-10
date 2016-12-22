/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.storage = {};
  this.push = (item) => {
    this.storage[this.length++] = item;
    return this.length;
  }
  this.pop = () => {
    let value = this.storage[(this.length - 1)];
    delete this.storage[(this.length - 1)];
    this.length--;
    return value;
  }
  this.getMax = () => {
    let largest = -Infinity;
    for(let index in this.storage) {
      largest = this.storage[index] > largest ? this.storage[index] : largest;
    }
    return largest;
  };
}


module.exports = Stack;