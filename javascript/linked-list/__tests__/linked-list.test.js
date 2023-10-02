'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');

// Require our linked list implementation
const { LinkedList, zipLists } = require('../index');

xdescribe('Should create a blank Linked List', () => {
  test('Create an empty Linked List', () => {
    const emptyList = new LinkedList;

    expect(emptyList.head).toEqual(null);
  });
});

xdescribe('Should be able to insert a node into a new Linked List', () => {
  test('Insert node into new Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Some Value');

    expect(typeof myList.head).toEqual('object');
  });
});

xdescribe('Should be able to point to first node in a new Linked List', () => {
  test('Access value from first node in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('1');

    expect(myList.head.value).toEqual('1');
  });
});

xdescribe('Should be able to insert multiple nodes into a Linked List', () => {
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

xdescribe('Should return true searching for a value that exists in a Linked List', () => {
  test('Search for value in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Barney');
    myList.insert('Fred');
    myList.insert('Dino');

    expect(myList.includes('Dino')).toBeTruthy();
  });
});

xdescribe('Should return false searching for a value that does not exist in a Linked List', () => {
  test('Search for value in Linked List', () => {
    const myList = new LinkedList;
    myList.insert('Snagglepuss');
    myList.insert('Deputy Dog');
    myList.insert('Quickdraw McGraw');

    expect(myList.includes('Tom')).toBeFalsy();
  });
});

xdescribe('Should return ascii depiction of a Linked List', () => {
  test('Display ascii picture of linked list', () => {
    const myList = new LinkedList;
    myList.insert('a');
    myList.insert('b');
    myList.insert('c');

    expect(myList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});

// Linked List Zip Tests
/*

- Zip two lists of equal length
- Zip two lists of different lengths

*/

describe('Should return a new linked list made from two linked list inputs', () => {
  test('Zips up two equally-sized input lists', () => {
    const listOne = new LinkedList;
    listOne.insert('E');
    listOne.insert('C');
    listOne.insert('A');

    const listTwo = new LinkedList;
    listTwo.insert('F');
    listTwo.insert('D');
    listTwo.insert('B');

    const newList = zipLists(listOne, listTwo);

    expect(newList.toString()).toEqual('{ A } -> { B } -> { C } -> { D } -> { E } -> { F } -> NULL');
  });

  test('Zips up two different-sized input lists', () => {
    const listOne = new LinkedList;
    listOne.insert('E');
    listOne.insert('C');
    listOne.insert('A');

    const listTwo = new LinkedList;
    listTwo.insert('H');
    listTwo.insert('G');
    listTwo.insert('F');
    listTwo.insert('D');
    listTwo.insert('B');

    const newList = zipLists(listOne, listTwo);

    expect(newList.toString()).toEqual('{ A } -> { B } -> { C } -> { D } -> { E } -> { F } -> { G } -> { H } -> NULL');
  });
});
