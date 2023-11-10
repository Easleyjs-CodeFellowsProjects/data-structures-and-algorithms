const Graph = require('./index');

describe('It should instantiate a working Graph', () => {

  test('A vertex can be successfully added to the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );

    expect( myGraph.getVerticies()[0] ).toEqual('Ryu');

  });

  test('An edge can be successfully added to the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addVertex( 'Ken' );
    myGraph.addEdge('Ryu', 'Ken');

    expect( myGraph.adjacencyList.get( 'Ryu' ) ).toEqual(['Ken']);

  });

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addVertex( 'Ken' );

    //console.log( myGraph.adjacencyList );
    expect( myGraph.getVerticies().map( vertex => vertex ) ).toEqual(['Ryu','Ken']);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addVertex( 'Ken' );
    myGraph.addEdge('Ryu', 'Ken');

    expect( myGraph.displayAllNeighbors() ).toEqual([ 'Ryu => Ken', 'Ken => Ryu' ]);
  });

  test('The proper size is returned, representing the number of vertices in the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addVertex( 'Ken' );
    myGraph.addEdge('Ryu', 'Ken');

    expect( myGraph.size() ).toEqual(2);
  });

  test('A graph with only one vertex and edge can be properly returned', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );
    myGraph.addEdge('Ryu', null);

    expect( myGraph.adjacencyList.get('Ryu') ).toEqual([null]);
  });

});
