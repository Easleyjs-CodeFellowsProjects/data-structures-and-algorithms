class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0] || false;
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
}

function validateBrackets(string) {
  const queue = new Queue();
  const stack = new Stack();
  let brackets = '';

  if ( !string ) {
    return false;
  }
  string.split('').forEach(char => {
    if ( /\{|\[|\(/.test(char) ) {
      queue.enqueue(char);
    }
    if ( /\}|\]|\)/.test(char) ) {
      stack.push(char);
    }
  });

  while ( queue.peek() ) {
    brackets = queue.dequeue() + stack.pop();

    if ( !/\{\}|\[\]|\(\)/.test(brackets) ) {
      return false;
    }
  }
  if ( stack.pop() !== undefined ) {
    return false;
  }
  return true;
}

module.exports = validateBrackets;
