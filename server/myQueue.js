class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if(this.length == 0) {
      return undefined;
    } else {
      return this.first;
    }
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if(this.length == 0) {
      return undefined;
    } else {
      const holdingPointer = this.first;
      if(this.length == 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
      this.length--;
      return holdingPointer;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myQueue = new MyQueue();
console.log('enqueue(1)', myQueue.enqueue(1));
console.log('enqueue(2)', myQueue.enqueue(2));
console.log('enqueue(3)', myQueue.enqueue(3));
console.log('peek()', myQueue.peek());
console.log('dequeue()', myQueue.dequeue());
console.log('dequeue()', myQueue.dequeue());
console.log('dequeue()', myQueue.dequeue());
console.log('dequeue()', myQueue.dequeue());