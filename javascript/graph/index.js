/*
**add vertex**
Arguments: value
Returns: The added vertex
Add a vertex to the graph

**add edge**
- Arguments: 2 vertices to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two vertices in the graph

If specified, assign a weight to the edge
Both vertices should already be in the Graph

**get vertices**
- Arguments: none
- Returns all of the vertices in the graph as a collection (set, list, or similar)
- Empty collection returned if there are no vertices

**get neighbors**
- Arguments: vertex
- Returns a collection of edges connected to the given vertex

Include the weight of the connection in the returned collection
Empty collection returned if there are no vertices

**size**
- Arguments: none
- Returns the total number of vertices in the graph: 0 if there are none
*/

/*
class Vertex {
  constructor( value ) {
    this.value = value;
  }
}
*/

class Edge {
  constructor( vertex, weight = 0 ) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return Array.from( this.adjacencyList.keys() ).length;
  }

  addVertex( value ) {
    this.adjacencyList.set( value, [] );
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    // Assuming an undirected graph, so the edge is added to both vertices
    this.adjacencyList.set(vertex1, [...this.adjacencyList.get(vertex1) || [], vertex2]);
    this.adjacencyList.set(vertex2, [...this.adjacencyList.get(vertex2) || [], vertex1]);
  }

  getEdges( vertex ) {
    return [ ...this.adjacencyList.get( vertex ) ];
  }

  getVerticies() {
    return Array.from( this.adjacencyList.keys() );
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return null; // Vertex not found in the graph
    }

    if ( this.adjacencyList.get(vertex).length === 0 ) {
      return null;
    }
    return this.adjacencyList.get(vertex);
  }

  displayAllNeighbors() {
    const allVerticies = this.getVerticies();
    let neighborStringsArr = [];

    allVerticies.forEach( vertex => {
      const vertexNeighbors = this.getNeighbors( vertex );

      vertexNeighbors.map( neighbor => {
        neighborStringsArr.push( `${ vertex } => ${ neighbor}` );
      });

    });
    return neighborStringsArr;
  }

}

module.exports = Graph;
