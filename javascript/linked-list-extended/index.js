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
}

module.exports = { LinkedList };
