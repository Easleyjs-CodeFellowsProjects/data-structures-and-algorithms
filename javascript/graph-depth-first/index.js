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

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // If the graph is undirected
  }

  getEdges( vertex ) {
    return [ ...this.adjacencyList.get( vertex ) ];
  }

  getVerticies() {
    return Array.from( this.adjacencyList.keys() );
  }


  depthFirst( startVertex ) {
    const visited = new Set();

    // Helper function for recursive DFS
    const explore = (vertex) => {
      visited.add(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          explore(neighbor);
        }
      }
    };

    explore(startVertex);
    return visited;
  }


  breadthFirstSearch(startingVertex) {
    const visited = new Map();
    const queue = [];

    // Mark the starting vertex as visited and enqueue it
    visited.set(startingVertex, true);
    queue.push(startingVertex);

    // Loop until the queue is empty
    while (queue.length > 0) {
      // Dequeue a vertex from the queue
      const currentVertex = queue.shift();
      console.log(currentVertex);

      // Get adjacent vertices of the dequeued vertex
      const adjacentVertices = this.vertices.get(currentVertex);

      // Loop through the adjacent vertices
      for (const neighbor of adjacentVertices) {
        // If the neighbor has not been visited, mark it as visited and enqueue it
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      }
    }
  }


}

module.exports = Graph;
