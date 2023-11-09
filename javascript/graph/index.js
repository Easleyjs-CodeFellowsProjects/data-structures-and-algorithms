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

class Vertex {
  constructor( value ) {
    this.value = value;
  }
}

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
    return this.adjacencyList.keys().length;
  }

  addVertex( value ) {
    let vertex = new Vertex( value );
    this.adjacencyList.set( vertex, [] );
    return vertex;
  }

  addEdge( startVertex, endVertex, weight = 0 ) {
    if ( !this.adjacencyList.get( startVertex ) || !this.adjacencyList.get( endVertex ) ) {
      throw new Error('invalid vertices');
    }

    const adjacencies = this.adjacencyList.get( startVertex );
    adjacencies.push( new Edge( endVertex, weight ));
  }

  getEdges( vertex ) {
    return [ ...this.adjacencyList.get( vertex ) ];
  }

  getVerticies() {
    return this.adjacencyList.keys();
  }

}

module.exports = Graph;
