'use strict';

const { Stack, Queue } = require('../linkedList');

describe('Stack Tests', () => {

  test('Can successfully instantiate an empty stack', () => {
    const myStack = new Stack();

    expect(myStack).toBeTruthy();
    expect(typeof myStack).toBe('object');
  });

  test('Can successfully push onto a stack', () => {
    const myStack = new Stack();
    myStack.push('A');

    expect(myStack.head.value).toBe('A');
  });

  test('Can successfully push multiple values onto a stack', () => {
    const myStack = new Stack();
    myStack.push('C');
    myStack.push('B');
    myStack.push('A');

    expect(myStack.head.value).toBe('A');
    expect(myStack.head.next.value).toBe('B');
    expect(myStack.head.next.next.value).toBe('C');
  });

  test('Can successfully pop off the stack', () => {
    const myStack = new Stack();
    myStack.push('C');
    myStack.push('B');
    myStack.pop();

    expect(myStack.head.value).toBe('C');
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const myStack = new Stack();
    myStack.push('C');
    myStack.push('B');
    myStack.pop();
    myStack.pop();

    expect(myStack.head).toBe(null);
  });

  test('Can successfully peek the next item on the stack', () => {
    const myStack = new Stack();
    myStack.push('C');
    myStack.push('B');

    expect(myStack.peek()).toBe('B');
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    const myStack = new Stack();

    expect(myStack.peek()).toBe('ERROR');
  });
});

describe('Queue Tests', () => {

  test('Can successfully instantiate an empty queue', () => {
    const myQueue = new Queue();

    expect(myQueue).toBeTruthy();
    expect(typeof myQueue).toBe('object');
  });

  test('Can successfully enqueue into a queue', () => {
    const myQueue = new Queue();
    myQueue.enqueue('A');

    expect(myQueue.peek()).toBe('A');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const myQueue = new Queue();
    myQueue.enqueue('A');
    myQueue.enqueue('B');
    myQueue.enqueue('C');

    expect(myQueue.front.value).toBe('A');
    expect(myQueue.rear.value).toBe('C');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const myQueue = new Queue();
    myQueue.enqueue('A');
    myQueue.enqueue('B');
    const dequeuedValue = myQueue.dequeue();

    expect(dequeuedValue).toBe('A');
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const myQueue = new Queue();
    myQueue.enqueue('A');
    myQueue.enqueue('B');

    expect(myQueue.peek()).toBe('A');
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const myQueue = new Queue();

    expect(myQueue.peek()).toBe('ERROR: Empty Queue');
    expect(myQueue.dequeue()).toBe('ERROR: Empty Queue');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const myQueue = new Queue();
    myQueue.enqueue('A');
    myQueue.enqueue('B');

    myQueue.dequeue();
    myQueue.dequeue();
    expect(myQueue.peek()).toBe('ERROR: Empty Queue');
  });
});
