class MyDoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.prev = null;
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if(index > this.length) {
      return undefined;
    }
    const newNode = new Node(value);
    if(index == 0) {
      this.prepend(value);
    } else if(index == this.length) {
      this.append(value);
    } else {
      const firstPointer = this.getByIndex(index-1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      holdingPointer.prev = newNode;
      newNode.prev = firstPointer;
      newNode.next = holdingPointer;
      this.length++;
    }
    return this;
  }

  remove(index) {
    if(index >= this.length) {
      return undefined;
    }
    if(index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }

    const firstPointer = this.getByIndex(index-1);
    if(index = this.length-1) {
      firstPointer.next = null;
      this.tail = firstPointer;
    } else {
      const holdingPointer = this.getByIndex(index+1);
      holdingPointer.prev = firstPointer;
      firstPointer.next = holdingPointer;
    }
    this.length--;
    return this;
  }

  getByIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    if(index > this.length / 2) {
      counter = this.length-1;
      currentNode = this.tail;
      while(counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    } else {
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return currentNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

let myDoubleLinkedList = new MyDoubleLinkedList(2);
console.log('new', myDoubleLinkedList);
myDoubleLinkedList.prepend(1);
console.log('prepend(1)', myDoubleLinkedList);
myDoubleLinkedList.append(4);
console.log('append(4)', myDoubleLinkedList);
myDoubleLinkedList.insert(2,3);
console.log('insert(2,3)', myDoubleLinkedList);
myDoubleLinkedList.remove(0);
console.log('remove(0)', myDoubleLinkedList);
myDoubleLinkedList.remove(2);
console.log('remove(2)', myDoubleLinkedList);