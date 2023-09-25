'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
/*
- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list
*/

// Require our linked list implementation
const { LinkedList } = require('../index');

describe('Should create a blank Linked List', () => {
  test('Create an empty Linked List', () => {
    const emptyList = new LinkedList;

    expect(emptyList.head).toEqual(null);
  });
});

describe('Should be able to insert a node into a new Linked List', () => {
  test('Insert node into new Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Some Value');

    expect(typeof myList.head).toEqual('object');
  });
});

describe('Should be able to point to first node in a new Linked List', () => {
  test('Access value from first node in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('1');

    expect(myList.head.value).toEqual('1');
  });
});

describe('Should be able to insert multiple nodes into a Linked List', () => {
  test('Insert multiple nodes', () => {
    const myList = new LinkedList;
    myList.insert('1');
    myList.insert('2');
    myList.insert('3');

    expect(myList.head.value).toEqual('3');
    expect(myList.head.next.value).toEqual('2');
    expect(myList.head.next.next.value).toEqual('1');
  });
});

describe('Should return true searching for a value that exists in a Linked List', () => {
  test('Search for value in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Barney');
    myList.insert('Fred');
    myList.insert('Dino');

    expect(myList.includes('Dino')).toBeTruthy();
  });
});

describe('Should return false searching for a value that does not exist in a Linked List', () => {
  test('Search for value in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Snagglepuss');
    myList.insert('Deputy Dog');
    myList.insert('Quickdraw McGraw');

    expect(myList.includes('Tom')).toBeFalsy();
  });
});

describe('Should return ascii depiction of a Linked List', () => {
  test('Display ascii picture of linked list', () => {
    const myList = new LinkedList;
    myList.insert('a');
    myList.insert('b');
    myList.insert('c');

    expect(myList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});
