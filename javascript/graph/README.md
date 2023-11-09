# Challenge Title
## Graph

## Description
Implement a Graph data structure in JS

## Requirements (methods)

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


## Tests
Vertex can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all vertices can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between vertices included
The proper size is returned, representing the number of vertices in the graph
A graph with only one vertex and edge can be properly returned

## Whiteboard
![a whiteboard of a graph](./whiteboard.png)