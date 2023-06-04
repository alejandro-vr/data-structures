class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for(let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i=0; i<currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i=0; i<currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          delete this.data[address][i];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    return this.data
      .flat()
      .map(item => item[0]);
  }
}

const myHashTable = new MyHashTable(50);
myHashTable.set("Diego", 1990);
console.log(myHashTable);
myHashTable.set("Mariana", 1998);
console.log(myHashTable);
myHashTable.set("Alejandra", 2000);
console.log(myHashTable);
console.log('get("Mariana")', myHashTable.get("Mariana"));
console.log('getAllKeys()', myHashTable.getAllKeys());
console.log('delete("Mariana")', myHashTable.delete("Mariana"));
console.log(myHashTable);