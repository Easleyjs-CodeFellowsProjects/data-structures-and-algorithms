
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

class AnimalShelter extends PseudoQueue {
  constructor() {
    super();
    this.oldestAnimal = null;
  }

  dequeue(pref) {
    let {
      popValue,
      oldestAnimal,
      stackA,
      stackB
    } = this;

    if ( !( pref === 'cat' || pref === 'dog' )) {
      return null;
    }

    while ( stackA.peek() ) {
      popValue = stackA.pop();

      if ( popValue.species === pref ) {
        oldestAnimal = popValue;
      }

      if ( stackA.peek() ) {
        stackB.push(popValue);
      }
    }

    while ( stackB.peek() ) {
      stackA.push(stackB.pop());

    }
    return oldestAnimal;
  }
}

module.exports = AnimalShelter;
