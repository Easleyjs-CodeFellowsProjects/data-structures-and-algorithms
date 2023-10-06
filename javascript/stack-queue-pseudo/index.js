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

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    const { stack } = this;
    return stack[stack.length -1] || false;
  }

}

class PseudoQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
    this.popValue = null;
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    let { popValue, stackA, stackB } = this;

    while ( stackA.peek() ) {
      popValue = stackA.pop();
      if ( stackA.peek() ) {
        stackB.push(popValue);
      }
    }

    while ( stackB.peek() ) {
      stackA.push(stackB.pop());

    }

    return popValue;
  }
}

let myQueue = new PseudoQueue();


myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());


//console.log(myQueue.stackA.peek());
