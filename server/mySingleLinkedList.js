class MySingleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
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
    } else if(index > this.length) {
      this.append(value);
    } else {
      const firstPointer = this.getByIndex(index-1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
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
      this.length--;
      return this;
    }

    const firstPointer = this.getByIndex(index-1);
    if(index = this.length-1) {
      firstPointer.next = null;
      this.tail = firstPointer;
    } else {
      const holdingPointer = this.getByIndex(index+1);
      firstPointer.next = holdingPointer;
    }
    this.length--;
    return this;
  }

  getByIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let mySingleLinkedList = new MySingleLinkedList(2);
console.log('prepend(1)', mySingleLinkedList.prepend(1));
console.log('append(4)', mySingleLinkedList.append(4));
console.log('insert(2,3)', mySingleLinkedList.insert(2,3));
console.log('remove(0)', mySingleLinkedList.remove(0));
console.log('remove(2)', mySingleLinkedList.remove(2));