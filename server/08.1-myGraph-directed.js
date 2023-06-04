class MyGraph { // directed, based on an object 'adjacentList'
  constructor() {
    this.adjacentList = {};
    this.nodes = 0;
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
    return this;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    //this.adjacentList[node2].push(node1);
    return this;
  }
}

const myGraph = new MyGraph();
console.log('MyGraph', myGraph);
console.log('addVertex(1)', myGraph.addVertex(1));
console.log('addVertex(3)', myGraph.addVertex(3));
console.log('addVertex(4)', myGraph.addVertex(4));
console.log('addVertex(5)', myGraph.addVertex(5));
console.log('addVertex(6)', myGraph.addVertex(6));
console.log('addVertex(8)', myGraph.addVertex(8));
console.log('addEdge(1,3)', myGraph.addEdge('1','3',true));
console.log('addEdge(1,4)', myGraph.addEdge('1','4',true));
console.log('addEdge(1,6)', myGraph.addEdge('1','6',true));
console.log('addEdge(3,5)', myGraph.addEdge('3','5',true));
console.log('addEdge(3,6)', myGraph.addEdge('3','6',true));
console.log('addEdge(4,5)', myGraph.addEdge('4','5',true));
console.log('addEdge(4,8)', myGraph.addEdge('4','8',true));