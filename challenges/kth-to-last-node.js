/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode1(k, head) {
  let values = [];
  curr = head;
  while (curr) {
    values.push(curr.value);
    curr = curr.next;
  }
  return values[values.length - k];
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode1(0, a));













function kthToLastNode(k, head) {
  const storage = [];
  let current = head;
  while (current) {
    storage.push(current.value);
    current = current.next;
  }
  return storage[storage.length-k];
}
// 
// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
//
// console.log(kthToLastNode(8, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
