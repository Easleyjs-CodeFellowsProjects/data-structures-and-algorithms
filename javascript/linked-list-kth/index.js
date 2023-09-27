'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor (value, next, prev) {
    this.next = next;
    this.value = value;
    this.prev = prev;
  }

  setNext (node) {
    this.next = node;
  }

  setPrev (node) {
    this.prev = node;
  }

  setValue (value) {
    this.value = value;
  }
}

// Upon instantiation, an empty Linked List should be created.
class LinkedList {
  constructor () {
    this.head = null;
  }

  // Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert (value) {
    if (this.head) {
      this.head = new Node(value, this.head);
    } else {
      this.head = new Node(value);
    }
  }
  /*
    arguments: value, new value
    adds a new node with the given new value immediately before the first node that has the value specified
  */

  insertBefore (value, newValue) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if ( currentNode.value === value ) {
        if (this.head.value === value) {
          this.head = new Node(newValue,this.head, null);
          break;
        } else {
          prevNode.next = new Node(newValue,currentNode,null);
          break;
        }
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /*
    insert after
    arguments: value, new value
    adds a new node with the given new value immediately after the first node that has the value specified
  */
  insertAfter (value, newValue) {
    let currentNode = this.head;

    while (currentNode) {
      if ( currentNode.value === value ) {
        currentNode.next = new Node(newValue,currentNode.next,null);
        break;
      }

      currentNode = currentNode.next;
    }
  }

  /* Append
  arguments: new value
  adds a new node with the given value to the end of the list
  */
  append (value) {
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next) {
        currentNode.next = new Node(value,null,currentNode);
        break;
      }
      currentNode = currentNode.next;
    }
  }

  // Indicates whether that value exists as a Node’s value somewhere within the list. Returns a boolean
  includes (value) {
    let currentNode = this.head;
    let foundValue = false;

    while (currentNode) {
      if (currentNode.value === value) {
        foundValue = true;
        break;
      }
      currentNode = currentNode.next;
    }
    return foundValue;
  }

  /*
    Returns: a string representing all the values in the Linked List, formatted as:
    "{ a } -> { b } -> { c } -> NULL"
  */
  toString () {
    let currentNode = this.head;
    let listAscii = '';

    while (currentNode) {
      listAscii = `${listAscii} { ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    listAscii = `${listAscii}NULL`;
    return listAscii;
  }

  /*
  ## kth from end
  **argument: a number, k, as a parameter.**
  - Return the node’s value that is k places from the tail of the linked list.

  pseudocode:
  Create a storage array for node values, and to implicitly keep track of total length of list
  Create a pointer variable for the currentNode
  Move through the arr using the node property .next
  - If we hit end of the list, return the value at the index of storage array length - k
  - If not, add current node's value to array
  */
  kthFromEnd(k) {
    const nodeStorage = [];
    let currentNode = this.head;

    if (k < 0) {
      return 'ERROR! k must be greater than 0.';
    }

    if (k === 1 && currentNode && !currentNode.next) {
      return currentNode.value;
    }

    while (currentNode) {
      nodeStorage.push(currentNode.value);
      //once we get to end of list
      if (!currentNode.next) {
        //console.log('Array length:',nodeStorage.length);
        //console.log('Array values:',nodeStorage);
        // happy path
        if (nodeStorage.length > k) {
          return nodeStorage[nodeStorage.length-k];
        }
        if (nodeStorage.length < k) {
          return 'ERROR! k greater than list length.';
        }
        if (nodeStorage.length === k) {
          return nodeStorage[0];
        }
      }
      currentNode = currentNode.next;
    }
  }
}

module.exports = { LinkedList };
