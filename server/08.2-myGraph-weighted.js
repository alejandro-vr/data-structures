class MyGraph { // weigthed and optional directed, based on an object 'adjacentMatrix'
  constructor() {
    this.adjacentMatrix = { 'Tit':[], };
    this.nodes = 0;
  }

  addVertex(node) {
    if(node == 'Tit') return undefined;
    this.adjacentMatrix['Tit'].push(node);
    this.adjacentMatrix[node] = [];
    this.nodes++;
    return this;
  }

  addEdge(node1, node2, weight, isBidirected) {
    const keys = Object.keys(this.adjacentMatrix);
    for(let i=0; i<this.nodes; i++) {
      for(let j=0; j<this.nodes; j++) {
        // Fill weigth in first direction
        if(keys[i] == node1) {
          if(keys[j] == node2) {
            this.adjacentMatrix[node1][j] = weight;
          }
        }
        // Fill weight contra direction if apply
        if(isBidirected) {
          if(keys[i] == node2) {
            if(keys[j] == node1) {
              this.adjacentMatrix[node2][j] = weight;
            }
          }
        }
        // Fill empty (undefined) elements using '-'
        if(this.adjacentMatrix[keys[i]][j] == undefined) {
          this.adjacentMatrix[keys[i]][j] = '-';
        }
      }
    };
    return this;
  }
}

const myGraph = new MyGraph();
console.log('MyGraph', myGraph);
console.log('addVertex(1)', myGraph.addVertex('1'));
console.log('addVertex(3)', myGraph.addVertex('3'));
console.log('addVertex(4)', myGraph.addVertex('4'));
console.log('addVertex(5)', myGraph.addVertex('5'));
console.log('addVertex(6)', myGraph.addVertex('6'));
console.log('addVertex(8)', myGraph.addVertex('8'));
console.log('addEdge(1,3,1,true)', myGraph.addEdge('1','3',.1,false));
console.log('addEdge(1,6,3,true)', myGraph.addEdge('1','5',.2,true));
console.log('addEdge(3,5,4,true)', myGraph.addEdge('3','6',.3,true));
console.log('addEdge(3,6,5,true)', myGraph.addEdge('3','5',.4,true));
console.log('addEdge(1,4,2,true)', myGraph.addEdge('4','1',.5,false));
console.log('addEdge(4,5,6,true)', myGraph.addEdge('4','6',.6,true));
console.log('addEdge(4,8,7,true)', myGraph.addEdge('4','8',.7,true));