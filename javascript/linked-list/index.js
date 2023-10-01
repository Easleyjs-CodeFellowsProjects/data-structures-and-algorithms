'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }

  setNext(node) {
    this.next = node;
  }

  setValue(value) {
    this.value = value;
  }
}

// Upon instantiation, an empty Linked List should be created.
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    if (this.head) {
      this.head = new Node(value, this.head);
    } else {
      this.head = new Node(value);
    }
  }

  // Indicates whether that value exists as a Node’s value somewhere within the list. Returns a boolean
  includes(value) {
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
  /*
  toString() {
    let currentNode = this.head;
    let listAscii = '';

    while (currentNode) {
      listAscii = `{ ${currentNode.value} } -> ${listAscii}`;
      currentNode = currentNode.next;
    }
    listAscii = `${listAscii}NULL`;
    return listAscii;
  }
}
*/
  toString() {
    let currentNode = this.head;
    let listAscii = '';

    while (currentNode) {
      listAscii = `${listAscii}{ ${currentNode.value} } -> `; // -> ${listAscii}`;
      currentNode = currentNode.next;
    }
    listAscii = `${listAscii}NULL`;
    return listAscii;
  }
}


function zipLists(list1, list2) {
  const zippedList = new LinkedList;
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  //might need .next on these nodes, we'll see.
  while ( currentNode1 || currentNode2 ) {
    if ( currentNode2 ) { zippedList.insert( currentNode2.value ); }
    if ( currentNode1 ) { zippedList.insert( currentNode1.value ); }
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }
  return zippedList;
}

module.exports = {
  LinkedList,
  zipLists
};
