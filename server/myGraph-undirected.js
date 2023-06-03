class MyGraph { // undirected, based on an array 'edgeList'
  constructor() {
    this.edgeList = [];
  }

  addEdge(node1, node2) {
    this.edgeList.push([node1, node2]);
    return this;
  }
}

const myGraph = new MyGraph();
console.log('myGraph', myGraph);
console.log('addEdge(1,3)', myGraph.addEdge(1,3));
console.log('addEdge(1,4)', myGraph.addEdge(1,4));
console.log('addEdge(1,6)', myGraph.addEdge(1,6));
console.log('addEdge(3,5)', myGraph.addEdge(3,5));
console.log('addEdge(3,6)', myGraph.addEdge(3,6));
console.log('addEdge(4,5)', myGraph.addEdge(4,5));
console.log('addEdge(4,8)', myGraph.addEdge(4,8));
