/**
 * Create a stack.Then create a queue using two stacks.
 */

/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [],
  this.push = (val) => {
    this.storage[this.storage.length] = val;
  },
  this.pop = () => {
    if (this.storage) {
      let val = this.storage[this.storage.length - 1];
      this.storage = this.storage.slice(0, this.storage.length - 1);
      return val;
    }
    else { return undefined; }
  } 
}


/**
* Queue Class
*/

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.enqueue = (val) => {
    if (this.stack1) {
      for (let i = this.stack1.storage.length; i > 0; i--) {
        this.stack1.storage[i] = this.stack1.storage[i - 1]; 
      }
    this.stack1.storage[0] = val;
    if (this.stack2.storage.length === 0) {
      this.stack2.storage[0] = this.stack1.pop();
    }
    }
    else { 
      this.stack1.storage[0] = val; 
    }
  },
  this.dequeue = () => {
  	if (this.stack2.storage) {
  	  let val = this.stack2.storage[0];
  	  this.stack2.storage[0] = this.stack1.pop();
  	  return val;
  	}
  else { return undefined }
  };
}

/* APPROACH #2

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.enqueue = (val) => {
    this.stack1.push(val);
  },
  this.dequeue = () => {
    if (this.stack2.storage.length !== 0) {
      return this.stack2.pop();
    } 
    else {
      while (this.stack1.storage.length) {
        this.stack1.storage.forEach((val, i = 1) => {
          this.stack2.storage[this.stack1.storage.length - i] = val;
          i++;
        });
        this.stack1.storage = [];
        let val = this.stack2.pop();
        this.stack2.storage = this.stack2.storage.slice(1);
        return val;
      }
    }
  };
}

*/

module.exports = {Stack: Stack, Queue: Queue};
