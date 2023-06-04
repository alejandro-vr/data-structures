class MyStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if(this.length == 0) {
      return undefined;
    } else {
      return this.top;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length == 0) {
      return undefined;
    } else {
      const holdingPointer = this.top;
      if(this.length == 1) {
        this.top = null;
        this.bottom = null;
      } else {
        this.top = this.top.next;
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

let myStack = new MyStack();
console.log('push(1)', myStack.push(1));
console.log('push(2)', myStack.push(2));
console.log('peek()', myStack.peek());
console.log('pop()', myStack.pop());
console.log('pop()', myStack.pop());
console.log('pop()', myStack.pop());
console.log('peek()', myStack.peek());