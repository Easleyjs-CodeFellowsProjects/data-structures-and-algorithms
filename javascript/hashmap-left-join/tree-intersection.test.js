const { HashTable, findRepeatedWords } = require('./index');
const BinaryTree = require('./BinaryTree/index');
const tree_intersection = require('./tree-intersection');

describe('It should return the intersection of values when passed two trees', () => {
  test('It should successfully return the intersection of two trees with common values', () => {
    // Move this to test file once function works.
    const testTree1 = new BinaryTree();

    testTree1.insert(10);
    testTree1.insert(5);
    testTree1.insert(15);
    testTree1.insert(3);
    testTree1.insert(7);

    const testTree2 = new BinaryTree();

    testTree2.insert(10);
    testTree2.insert(50);
    testTree2.insert(150);
    testTree2.insert(3);
    testTree2.insert(7);

    const results = tree_intersection( testTree1, testTree2 );
    expect(results).toStrictEqual([ 3, 7, 10]);
  });

  test('It should successfully return null when passed two trees with no common values', () => {
    const testTree1 = new BinaryTree();

    testTree1.insert(1);
    testTree1.insert(5);
    testTree1.insert(9);
    testTree1.insert(3);
    testTree1.insert(7);

    const testTree2 = new BinaryTree();

    testTree2.insert(2);
    testTree2.insert(4);
    testTree2.insert(8);
    testTree2.insert(710);
    testTree2.insert(57);

    const results = tree_intersection( testTree1, testTree2 );
    expect(results).toStrictEqual([]);
  });

  test('It should return error when passed non-int values', () => {
    const testTree1 = new BinaryTree();

    testTree1.insert(1);
    testTree1.insert('cat');
    testTree1.insert('dog');
    testTree1.insert(3);
    testTree1.insert(7);

    const testTree2 = new BinaryTree();

    testTree2.insert(2);
    testTree2.insert(4);
    testTree2.insert(8);
    testTree2.insert(710);
    testTree2.insert(57);

    const results = tree_intersection( testTree1, testTree2 );
    expect(results).toStrictEqual('Non-int detected.');
  });
});
