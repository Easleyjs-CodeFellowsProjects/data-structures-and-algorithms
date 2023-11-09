/*

An edge can be successfully added to the graph
A collection of all vertices can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between vertices included
The proper size is returned, representing the number of vertices in the graph
A graph with only one vertex and edge can be properly returned
*/
const Graph = require('./index');

describe('It should instantiate a working Graph', () => {

  test('A vertex can be successfully added to the graph', () => {
    const myGraph = new Graph();

    myGraph.addVertex( 'Ryu' );

    console.log( myGraph.getVerticies() );

  });

});
