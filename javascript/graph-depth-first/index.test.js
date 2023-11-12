const Graph = require('./index');

describe('It should instantiate a working Graph', () => {

  test('A vertex can be successfully added to the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );

    expect( myGraph.getVerticies()[0] ).toEqual('Ryu');

  });

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addVertex( 'Ken' );

    //console.log( myGraph.adjacencyList );
    expect( myGraph.getVerticies().map( vertex => vertex ) ).toEqual(['Ryu','Ken']);
  });

  test('Depth-First search can be performed on the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex('A');
    myGraph.addVertex('B');
    myGraph.addVertex('C');
    myGraph.addVertex('D');
    myGraph.addVertex('E');
    myGraph.addVertex('F');
    myGraph.addVertex('G');
    myGraph.addVertex('H');

    myGraph.addEdge('A', 'B');
    myGraph.addEdge('A', 'D');
    myGraph.addEdge('B', 'C');
    myGraph.addEdge('B', 'D');
    myGraph.addEdge('D', 'E');
    myGraph.addEdge('D', 'F');
    myGraph.addEdge('D', 'H');
    myGraph.addEdge('H', 'F');
    myGraph.addEdge('C', 'G');

    console.log( myGraph.depthFirst('A') );

    const searchResults = Array.from(myGraph.depthFirst('A'));

    expect( searchResults ).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'F', 'H']);
  });

});
