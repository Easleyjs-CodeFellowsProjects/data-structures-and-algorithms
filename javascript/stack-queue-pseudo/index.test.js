const PseudoQueue = require('./index');
const myQueue = new PseudoQueue();


describe('myQueue should be instantiated', () => {
  test('myQueue should exist', () => {
    expect(myQueue).toBeTruthy();
  });
});

describe('Should be able to enqueue items correctly', () => {

  test('An item is enqueued correctly', () => {
    myQueue.enqueue(2);

    expect(myQueue.stackA.peek()).toBe(2);
  });

  test('Multiple items are enqueued correctly', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    expect(myQueue.stackA.peek()).toBe(3);
  });

});

describe('Should be able to dequeue items correctly', () => {
  test('Dequeue should be last value enqueued', () => {
    myQueue.enqueue(4);
    expect(myQueue.stackA.peek()).toBe(4);
  });
});
