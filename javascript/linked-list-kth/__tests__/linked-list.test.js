'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');

// Require our linked list implementation
const { LinkedList } = require('../index');

// kth from end tests
describe('Should return error when k is greater than the length of the linked list', () => {
  test('Given a populated linked list, should return an when given k of greater number than list length', () => {
    const myList = new LinkedList;
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    myList.insert('D');
    myList.insert('E');

    const k = 15;

    expect(myList.kthFromEnd(k)).toEqual('ERROR! k greater than list length.');
  });
});

describe('Should return value of first (head) node when k and the length of the list are the same', () => {
  test('Given a populated linked list, should return first node',() => {
    const myList = new LinkedList;
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    const k = 3;

    expect(myList.kthFromEnd(k)).toEqual('C');
  });
});


describe('Should return error when k is not a positive integer', () => {
  test('Given a negative k value, should return error',() => {
    const myList = new LinkedList;
    myList.insert('A');

    const k = -1;

    expect(myList.kthFromEnd(k)).toEqual('ERROR! k must be greater than 0.');
  });
});

describe('Should return first (head) node when the linked list is of a size 1', () => {
  test('Given a k value of 1 and linked list with one node, should return node one value',() => {
    const myList = new LinkedList;
    myList.insert('A');
    const k = 1;

    expect(myList.kthFromEnd(k)).toEqual('A');
  });
});

describe('Should return expected value when k is not at the end, but somewhere in the middle of the linked list', () => {
  test('Given a k value of 1 and linked list with four node, should return third node value',() => {
    const myList = new LinkedList;
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    myList.insert('D');
    const k = 3;

    expect(myList.kthFromEnd(k)).toEqual('C');
  });
});
