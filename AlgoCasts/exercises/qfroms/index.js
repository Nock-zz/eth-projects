// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  add(element) {
    this.stackIn.data.length = 0;
    while (this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
    this.stackIn.push(element);
    this.stackOut.data.length = 0;
    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  remove() {
    return this.stackOut.pop();
  }

  peek() {
    return this.stackOut.peek();
  }

}


module.exports = Queue;
