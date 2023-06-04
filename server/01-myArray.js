// My own class 'Array.js'

class MyArray {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    for(let i=index; i<this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return item;
  }
}

const myArray = new MyArray();
console.log('push', myArray.push("José"));
console.log('push', myArray.push("Adriana"));
console.log('push', myArray.push("Carlos"));

console.log('get', myArray.get(1));

console.log('pop', myArray.pop());
console.log('array', myArray.data);
console.log('delete', myArray.delete(0));
console.log('array', myArray.data);