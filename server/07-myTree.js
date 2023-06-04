class MyBinarySearchTree { // Balanced binary tree
  constructor() {
    this.root = null;
    this.length = 0;
  }
  
  insert(value) {
    const newNode = new Node(value);
    this.length++;
    if(this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while(true) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let myBinarySearchTree = new MyBinarySearchTree();
console.log('insert(10)', myBinarySearchTree.insert(10));
console.log('insert(9)', myBinarySearchTree.insert(4));
console.log('insert(20)', myBinarySearchTree.insert(20));
console.log('insert(2)', myBinarySearchTree.insert(2));
console.log('insert(8)', myBinarySearchTree.insert(8));
console.log('insert(17)', myBinarySearchTree.insert(17));
console.log('insert(170)', myBinarySearchTree.insert(170));
console.log('search(4)', myBinarySearchTree.search(4));