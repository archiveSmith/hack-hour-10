/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
<<<<<<< HEAD
  this.max = undefined;
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (val) {
  this.storage[this.index++] = val;
  if ((!this.max) || (val > this.max)) this.max = val;
  return this.index;
};

Stack.prototype.pop = function () {
  const poppedVal = this.storage[--this.index];
  delete this.storage[this.index];
  if (this.index === 0) this.max = undefined;
  // if we're popping the max, find a new max
  if (this.max === poppedVal) {
    this.max = -Infinity;
    const allVals = Object.keys(this.storage).map(key => this.storage[key]);
    allVals.forEach(value => {
      if (value > this.max) this.max = value;
    });
  }
  return poppedVal;
};

Stack.prototype.getMax = function () {
  return this.max;
};

module.exports = Stack;
=======
  // body...
}

module.exports = Stack;
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
