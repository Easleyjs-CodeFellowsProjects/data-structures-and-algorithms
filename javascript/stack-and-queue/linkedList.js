'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, next) {
    this.next = next || null;
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

class Stack extends LinkedList {
  constructor() {
    super();
  }

  push(value) {
    this.insert(value);
  }

  pop() {
    this.head = this.head.next;
  }

  peek() {
    return this.head ? this.head.value : 'ERROR';
  }

}

class Queue extends LinkedList {
  constructor() {
    super();
    this.rear = null;
    this.front = null;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  peek() {
    return this.front !== null ? this.front.value : 'ERROR: Empty Queue';
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'ERROR: Empty Queue';
    }
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    return dequeuedValue;
  }
}

module.exports = {
  LinkedList,
  Stack,
  Queue
};
