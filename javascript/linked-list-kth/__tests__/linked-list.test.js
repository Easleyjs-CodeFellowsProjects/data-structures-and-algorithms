'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');

// Require our linked list implementation
const { LinkedList } = require('../index');

describe('Should add a node the end of a Linked List', () => {

  const newList = new LinkedList;


  test('Add node to head, verify add', () => {
    newList.insert('Head');

    expect(newList.head.value).toEqual('Head');
  });

  test('Verify additonal insert still works correctly', () => {
    newList.insert('node2');
    expect(newList.head.value).toEqual('node2');
  });

  test('Append node, verify it was added after head', () => {
    newList.append('Tail');

    expect(newList.head.next.next.value).toEqual('Tail');
  });

});

describe('Should be able to add multiple nodes to a Linked List', () => {
  const myList = new LinkedList;
  myList.insert('1');

  test('Add multiple nodes to Linked List', () => {
    myList.append('2');
    myList.append('3');
    myList.append('4');

    expect(myList.head.next.value).toEqual('2');
    expect(myList.head.next.next.value).toEqual('3');
    expect(myList.head.next.next.next.value).toEqual('4');
  });
});

//Can successfully insert a node before a node located i the middle of a linked list
describe('Should be able to insert a node at position i in a Linked List', () => {
  const myList = new LinkedList;
  myList.insert('1');
  myList.insert('2');
  myList.insert('3');
  myList.insert('4');
  myList.insert('5');

  test('Add a node to Linked List at a given position', () => {
    myList.insertBefore('4','X');

    expect(myList.head.next.value).toEqual('X');
  });

  test('Insert a node before the first node',() => {
    myList.insertBefore('5','Y');

    expect(myList.head.value).toEqual('Y');
  });
});

//Can successfully insert a node after a node located i the middle of a linked list
describe('Should be able to insert a node after a node in the middle of a Linked List', () => {
  const myList = new LinkedList;
  myList.insert('1');
  myList.insert('2');
  myList.insert('3');
  myList.insert('4');
  myList.insert('5');

  test('Add a node to Linked List at a given position', () => {
    myList.insertAfter('4','X');

    expect(myList.head.next.next.value).toEqual('X');
  });
});

/*
Can successfully insert a node after the last node of the linked list
*/
describe('Should be able to insert a node at the end of a Linked List', () => {
  const myList = new LinkedList;
  myList.insert('1');
  myList.insert('2');
  myList.insert('3');
  myList.insert('4');
  myList.insert('5');

  test('Add a node to Linked List at the end of the linked list', () => {
    myList.insertAfter('1','X');

    console.log(myList.toString());
    expect(myList.head.next.next.next.next.next.value).toEqual('X');
  });
});
