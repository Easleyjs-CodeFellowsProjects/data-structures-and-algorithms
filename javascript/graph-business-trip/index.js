class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, new Map());
  }

  getVerticies() {
    return Array.from( this.vertices );
  }

  addFlight(source, destination, cost) {
    if (!this.vertices.has(source)) {
      this.addVertex(source);
    }
    if (!this.vertices.has(destination)) {
      this.addVertex(destination);
    }

    this.vertices.get(source).set(destination, cost);
  }

  dijkstraPathExists(path) {
    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];

      if (!this.vertices.get(current).has(next)) {
        return false; // Direct flight does not exist
      }
    }

    return true; // Direct flights exist for the entire path
  }

  dijkstra(path) {
    if (!this.dijkstraPathExists(path)) {
      return false; // No direct flights for the entire path
    }

    let totalCost = 0;

    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];
      totalCost += this.vertices.get(current).get(next);
    }

    return totalCost;
  }
}

module.exports = Graph;
